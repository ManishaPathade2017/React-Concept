import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'



const UserForm = (props) => {

    const [formData, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        password: ""
    })

    const handleSubmit = () => {
        console.log('test the data ', formData)
        props.submitInfo(formData);
        setData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        password: ""
        })

    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>First Name</label>
                <input fluid placeholder='First Name' onChange={(e) => {setData({...formData, firstName: e.target.value })}} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setData({...formData, lastName: e.target.value})} />
            </Form.Field>
            <Form.Field>
                <label>Email Id</label>
                <input placeholder='Email Id'  onChange={(e) => setData({...formData, email: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Contact Number</label>
                <input placeholder='Contact Number' onChange={(e) => setData({...formData, contactNumber: e.target.value})} />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input type='password' placeholder='Password' onChange={(e) => setData({...formData, password: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Confirm Password</label>
                <input type='password'  placeholder='Confirm Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default UserForm