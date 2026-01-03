import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SignInPage({setUserData}){
    const navigate=useNavigate();
    const [gmail,setGmail]=useState("");
    const [password,setPassword]=useState("");
    const handle=async(e)=>{
        e.preventDefault();
        const send={gmail,password};
        try{
        const response=await axios.post("https://authcore-backend-3.onrender.com/api/all/getSignIn",send,{withCredentials:true});
        if(response.data.message==="Login Successfully"){
            setUserData(response.data.data);
            navigate('/HomePage');
        }
    }catch(err){
        if(err.response?.data?.message==="Something went Wrong"){
            alert('please do signUp first');
            navigate('/');
        }else if(err.response?.data?.message==="Something went wrong"){
            alert('enter correct password');
        }
    }
}
    return(
        <>
         <h1>Hii welcome to sign in page</h1>
         <form onSubmit={handle}>
            <input type="email" placeholder="Enter your gmail here"  onChange={(e)=>setGmail(e.target.value)} />
            <input type="password" placeholder='Enter your password here' onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" />
         </form>
        </>
    );
}