import UserForm from "./SignupForm";
import axios from "axios";



const SignUp = (props) => {

    const submitInfo = (data) => {
        axios.post('http://localhost:8080/user', data).then((response) => {
            console.log('response--------->', response)
          }).catch((error) => {
            console.log('error', error)
          });
    }

      
    return(
        <div style={{margin: "40px", padding: "20px"}}>
            <UserForm submitInfo={submitInfo}/>
        </div>
    )
}

export default SignUp;