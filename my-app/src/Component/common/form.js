import { useState } from "react";
import axios from 'axios';
// import { Input } from 'semantic-ui-react';
import { Input, Button } from 'semantic-ui-react';


function UserForm() {
  const [formData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    Address: "",
    useImage: "",
    password: ""
  })
  
  const submitInfo = () => {
    const fd = new FormData();
    fd.append('file', formData.useImage, formData.useImage.name);
    fd.append('firstName', formData.firstName)
    fd.append('lastName', formData.lastName)
    fd.append('email', formData.email)
    fd.append('phoneNumber', formData.phoneNumber)
    fd.append('Address', formData.Address)
    fd.append('password', formData.password)
    
    axios.post("http://localhost:8080/user", fd).then(ele => {
    console.log('ele---------->', ele);
  })

  }

  // const setSelectedImage = (ele) => {
  //   const fd = new FormData();
  //   fd.append('file', ele, ele.name);

  //  axios.post("http://localhost:8080/user/upload", fd).then(ele => {
  //   console.log('ele---------->', ele);
  // })

  // }

  return (
    <div className="App">
      <Input fluid onChange={(e) => setData({...formData, firstName: e.target.value})} placeholder='firstName' value={formData.firstName}/><br/>
      <Input fluid onChange={(e) => setData({...formData, lastName: e.target.value})} placeholder='lastName' value={formData.lastName}/><br/>
      <Input fluid onChange={(e) => setData({...formData, email: e.target.value})} placeholder='email' value={formData.email}/><br/>
      <Input fluid onChange={(e) => setData({...formData, phoneNumber: e.target.value})} placeholder='phoneNumber' value={formData.phoneNumber}/><br/>
      <Input fluid onChange={(e) => setData({...formData, Address: e.target.value})} placeholder='Address' value={formData.Address}/><br/>
      <Input fluid onChange={(e) => setData({...formData, password: e.target.value})} placeholder='password' value={formData.password}/><br/>
      {/* <input type='file' onChange={(e) => setData({...formData, useImage: e.target.files[0]})} id={formData.useImage} name="userImage" placeholder='useImage' value={formData.useImage}/><br/> */}
      {/* <input
        type="file"
        name="myImage"
        id="fileupload"
        onChange={(event) => {
          // console.log('-----------**',event.target.files[0]);
          // setSelectedImage(event.target.files[0]);
          setData({...formData, useImage: event.target.files[0]});
        }}
      /> */}
      {/* <div><img style={{ width: '100%' }} src={formData.useImage} alt='' /></div> */}
      {/* <button type='button' >Submit</button> */}
      <Button fluid primary onClick={submitInfo}>Sign Up</Button>
    </div>
  );
}

export default UserForm;
