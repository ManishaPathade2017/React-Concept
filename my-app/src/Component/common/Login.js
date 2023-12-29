import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";
import Cookies from 'js-cookie';

const LoginForm = () => {
    const [formData, setData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = () => {
        console.log('data----->', formData);
        axios.post('http://localhost:8080/user/login', formData).then((response) => {
            console.log('response--------->', response)
            console.log(Cookies.set('token', response.data.token));
          }).catch((error) => {
            console.log('error', error)
          });
    }

    return(
        <div style={{margin: "40px", padding: "20px"}}>
        <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Email ID</label>
            <input fluid placeholder='First Name' value={formData.email} onChange={(e) => {setData({...formData, email: e.target.value })}} />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder='Last Name' value={formData.password}  onChange={(e) => setData({...formData, password: e.target.value})}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>
        </div>
    )
}

export default LoginForm;