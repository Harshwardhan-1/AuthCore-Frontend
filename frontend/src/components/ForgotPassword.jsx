import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function ForgotPassword({setUserPassword}){
    const navigate=useNavigate();
    const [gmail,setGmail]=useState("");
    const handle=async(e)=>{
        e.preventDefault();
        const send={gmail};
        try{
        const response=await axios.post('https://authcore-backend-3.onrender.com/api/all/forgotPassword',send,{withCredentials:true});
        if(response.data.message=== 'otp send successfully'){
            setUserPassword(response.data.data);
            navigate('/OtpVerify');
        }    
    }catch(err){
        if(err.response?.data?.message=== 'Please do a signUp first'){
            alert('please do a sign up first');
            navigate('/');
        }else if(err.response?.data?.message==="something went wrong"){
            navigate('/');
        }
    }
    }
    return(
        <>
        <h1>Forgot password</h1>
        <form onSubmit={handle}>
 <input type="email" placeholder="enter your gmail here" name="email" onChange={(e)=>setGmail(e.target.value)}/>
 <button type="submit">Click here</button>
        </form>
        </>
    );
}