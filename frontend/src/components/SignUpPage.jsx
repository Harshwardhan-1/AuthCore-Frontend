import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function SignUpPage(){
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [gmail,setGmail]=useState("");
    const [password,setPassword]=useState("");
    const handle=async(e)=>{
        e.preventDefault();
        try{
        const send={name,gmail,password};
        const response=await axios.post("https://authcore-backend-3.onrender.com/api/all/getSignUp",send,{withCredentials:true});
        if(response.data.message==="Successfully Login"){
            navigate("/signIn");
        }
    }catch(err){
        if(err.response?.data?.message=== "Enter proper detail"){
                alert("Fill your details properly");
            }else if(err.response?.data?.message=== "Something went wrong"){
                alert("Something went wrong");
            }
    }
}
    return(
        <>
        <h1>hello</h1>
        <form onSubmit={handle}>
            <input type="text" placeholder="Enter your name here" name="name" onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter your email here" name="gmail" onChange={(e)=>setGmail(e.target.value)} />
            <input type="password" placeholder="Enter your password here" name="password" onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" />
        </form>
        </>
    );
}