import React, { useEffect, useState } from 'react'

const App1 = () => {

    const [details, setdetails] = useState({
        Fullname:"",
        Email:"",
        number:""
    })

    const [newdetail, setnewdetail] = useState({
        Fullname1 : "",
        Email1 : "",
        number1 :""
    })

    // const [touched, settouched] = useState({
    //     Fullname:false,
    //     Email:false,
    //     number:false
    // })

    const [errors, seterrors] = useState({
        Fullname:"",
        Email:"",
        number:""
    })

    const [submit, setsubmit] = useState(false)

    useEffect(()=>{
        const allfield = details.Fullname.trim() !== "" && details.Email.trim() !== "" && details.number.trim() !== "" && /^\d{10}$/.test(details.number) && /\S+@\S+\.\S+/.test(details.Email);
        setsubmit(allfield)
    },[details.Fullname,details.Email,details.number])

    // let validateName = details.Fullname.trim() === '' && touched.Fullname ? 'Enter name' : '';
    // let validateEmail = details.Email.trim() === '' && touched.Email ? 'Enter Email' : '';
    // let validateNumber = details.number.trim() === '' && touched.number ? 'Enter Number' : '';

    const validateField = (name, value)=>{
        let error = ''
        switch(name){
            case 'Fullname':
                if(value.trim()===''){
                    error = 'Enter Name'
                }
                break;
            case 'Email':
                if(value.trim()===''){
                    error = 'Enter Email'
                }
                else if (!/\S+@\S+\.\S+/.test(value)){
                    error = 'Invalid email address';
                }
            break;
            case 'number':
                if(value.trim()===''){
                    error = 'Enter Number'
                }
                else if (!/^\d{10}$/.test(value)){
                    error = 'Phone number must be exactly 10 digits';
                }
                break;

        } 
        seterrors({
            ...errors,
            [name]: error
          });       
    }

    const handleinp = (e)=>{    
        let {name,value} = e.target
        console.log(name,value);

        setdetails((pre)=>({...pre,[name]:value}))

        validateField(name, value);
    }

    const handleblur = (e)=>{
        const {name,value} = e.target  
        validateField(name,value)      
    }

    const handlesubmit = (e)=>{
        e.preventDefault()
        {
            alert('Form submitted successfully!');
            setnewdetail({Fullname1:details.Fullname,Email1:details.Email,number1:details.number})         
        }       

        setdetails({
            Fullname:"",
            Email:"",
            number:""
        })

        // settouched({
        //     Fullname:false,
        //     Email:false,
        //     number:false
        // })

    }

  return (
    <>
    <form style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"}}>
    {/* <input type="text" value={details.Fullname}  name='Fullname' onBlur={handleblur}  onChange={(e)=>handleinp(e)} placeholder='Enter Name' />
    {touched.Fullname==true&&<p style={{color:"black",fontWeight:"bolder"}}>{errors.Fullname}</p>} */}

    <input type="text" value={details.Fullname}  name='Fullname' onBlur={handleblur}   onChange={(e)=>handleinp(e)} placeholder='Enter Name' />
    {<p style={{color:"black",fontWeight:"bolder"}}>{errors.Fullname}</p>}
     <br/>
    {/* <input type="email" value={details.Email} name='Email' onBlur={handleblur} onChange={(e)=>handleinp(e)} placeholder='Enter Email' />
    {touched.Email==true&&<p style={{color:"black",fontWeight:"bolder"}}>{errors.Email}</p>} */}

    <input type="email" value={details.Email} name='Email' onBlur={handleblur}  onChange={(e)=>handleinp(e)} placeholder='Enter Email' />
    {<p style={{color:"black",fontWeight:"bolder"}}>{errors.Email}</p>}
    <br />
    {/* <input type="number" value={details.number} name='number' onBlur={handleblur} onChange={(e)=>handleinp(e)} placeholder='Enter Phone Number' />
    {touched.number==true&&<p style={{color:"black",fontWeight:"bolder"}}>{errors.number}</p> } */}

    <input type="number" value={details.number} name='number' onBlur={handleblur}  onChange={(e)=>handleinp(e)} placeholder='Enter Phone Number' />
    {<p style={{color:"black",fontWeight:"bolder"}}>{errors.number}</p> }
    <br />
    <button style={{cursor:"pointer"}} disabled={!submit} onClick={handlesubmit}>Submit</button> <br />
    <p>Enter All Input To Enable Button</p> <br />

    {/* {JSON.stringify(NewDetails)} <br /> */}

    <p>NEW FULL NAME : {newdetail.Fullname1}</p>
    <p>NEW EMAIL : {newdetail.Email1}</p>
    <p>NEW NUMBER : {newdetail.number1}</p>
    </form>
    </>
  )
}

export default App1