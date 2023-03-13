import { useState } from "react"
import axios from 'axios'
import "../style.css"

function Contact() {
    const [data,setData]= useState({
        name:'',
        email:'',
        message:''
    })
    const{name,email,message}=data

    const onChangeHandler=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    // console.log(data)
    // const changeHandler=(e)=>{
    //     setData({...data, [e.target.name]:e.target.vaue})
    // }
    // const handleSubmit= async(e)=>{
    //     console.log('hi')
    //     e.preventDefault();
    //     try {
    //         const response = await fetch("https://v1.nocodeapi.com/kalyan08/google_sheets/lDuxOhdUtjLObpDt?tabId=Sheet1",{
    //             method: 'POST',
    //             headers: {
    //                 'Content Type':'application/json' 
    //             },
    //             body:JSON.stringify([[Name,Email,Message, new Date().toDateString()]])
    //         })
    //         await response.json()
    //         setData({...data,Name:'',Email:'',Message:''})
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    console.log(name,email,message)
    const submitHandler=(e)=>{
        console.log('hi')
        e.preventDefault();
        console.log(data)
        
        // 'https://sheet.best/api/sheets/18878d72-e49f-4cd5-b9a2-0e0871fde293'
        
        axios.post('https://sheet.best/api/sheets/18878d72-e49f-4cd5-b9a2-0e0871fde293',data).then((response)=>{
            console.log(response)
            setData({name:'',email:"",message:''});
        })
        // axios({
        //     method: 'post',
        //     url: 'https://sheet.best/api/sheets/18878d72-e49f-4cd5-b9a2-0e0871fde293',
        //     data: {
        //       data
        //     }
        //   });
        // axios.post('https://sheet.best/api/sheets/18878d72-e49f-4cd5-b9a2-0e0871fde293',data).then((response)=>{
        //     console.log(response);
        //     //clearing form fields
        //     setData({name:'',email:"",message:''});


        // })
    }
    return ( 
        <div className="contact" id ="contact">
            
            <div className="service1">
                <h1 className="contact-me">Contact Me</h1>
                <div className="service-items">
                <i class="fa-solid fa-paper-plane"></i> <span>kalyanad100@gmail.com</span><br/><br/>
                <i class="fa-solid fa-mobile-retro"></i> <span>9803877877</span>
                 
                </div>
                
            </div>
            <div className="service2">
            {/* action =" https://script.google.com/macros/s/AKfycbzheeUVAhHBYM4Xx4JiMuuVP5gnSIGXqjKw3A1O0WNfgiD7VXIVI0dU647N_4aYnZTR/exec URL"name ="submit-to-google-sheet" */}
                {/* <form method="post" onSubmit={handleSubmit} >
                <input className="your-name" type="name" name="Name" value={name} placeholder="Your Name" onChange={changeHandler}/><br/>
                <input className= "your-email" type="email" name="Email"  value={email}placeholder="Your Email" onChange={changeHandler}/><br/>
                <textarea className= "your-message" name="Message" value={message} rows="10" cols="40" placeholder= "Your Message" onChange={changeHandler}></textarea><br/> 
                 
                </form> */}
                <form >
                    <input className="your-name" type="name" name="name" value={name} placeholder="Your Name Please"  onChange={onChangeHandler}/><br/>
                    <input className= "your-email" type="email" name="email"  value={email} placeholder="Your Email Please" onChange={onChangeHandler} /><br/>
                    <textarea className= "your-message" name="message" value={message} rows="10" cols="40" placeholder= "Your Message" onChange={onChangeHandler} ></textarea><br/> 
                    <button onClick={submitHandler} className="submit-message" type="button">Submit</button>  
                </form>
               
                
            </div>

            
        </div>
        
     );
}

export default Contact;