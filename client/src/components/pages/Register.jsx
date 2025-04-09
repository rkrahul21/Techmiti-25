
import React from 'react'
import { useState } from 'react'
import { branchName, collegeName, batchCode, tshirtSizeValue, knowAbout } from '@/constant/collegeData';
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import MessageBox from '../sections/MessageBox';


function Register() {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [college, setCollege] = useState();
  const [branch, setBranch] = useState();
  const [rollNo, setRollNo] = useState();
  const [batch, setBatch] = useState();
  const [know, setKnow] = useState();
  const [isAccommodation, setIsAccommodation] = useState();
  const [tshirtSize, setTshirtSize] = useState();
  const [paymentMode, setPaymentMode] = useState();
  const [caCode, setCaCode] = useState();
  const [transactionId, setTransactionId] = useState();
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [techmitiId, setTechmitiId] = useState();
  const [givenCollegeName, setGivenCollegeName] = useState();
  const [OtherCollegeName, setOtherCollegeName] = useState();

  console.log("gender",gender,paymentMode);

  const allFill = () => {
    return (
      email &&
      phone &&
      name &&
      gender &&
      college &&
      branch &&
      rollNo &&
      batch &&
      know &&
      isAccommodation &&
      tshirtSize &&
      paymentMode &&
      password === confirmPass
    );
  };


  const validateEmail = (e) => {
    if (e.target.value) {
      const email = e.target.value;
      const atPos = email.indexOf("@");
      const domain = email.split("@")[1];
      const validDomain = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "live.com",
        "outlook.com",
        "mail.com",
      ];
      if (atPos > 1 && validDomain.includes(domain)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        document.getElementById("regSubmit").disabled = false;
        setEmail(e.target.value);
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");

        document.getElementById("regSubmit").disabled = true;
      }
    }
  };
  const validateMobile = (e) => {
    if (e.target.value) {
      const pattern = /^[6-9]\d{9}$/;
      if (pattern.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        document.getElementById("regSubmit").disabled = false;
        setPhone(e.target.value);
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");

        document.getElementById("regSubmit").disabled = true;
      }
    }
  };
  const validatePassword = (e) => {
    if (e.target.value) {
      if (password === e.target.value) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        setConfirmPass(e.target.value)
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  }
  const validateFile = (e) => {
    var file = e.target.files[0];
    if (file && (file.size / 1024 / 1024) < 2) {
      setReceipt(file);
    } else {
      window.alert('file size should be less than 5 mb');
      e.target.value = '';

    }
  }

  const onPaymentModeChange = ({ target: { value } }) => {
    setPaymentMode(value);
  };

  // form submit handler

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(email,
            phone,
            password,
            name,
            gender,
            college,
            branch,
            rollNo,
            batch,
            know,
            isAccommodation,
            tshirtSize,
            paymentMode,
            caCode,
            transactionId,
            receipt,);
    setLoading(true);
    try {
      const { data } = await fetch.post(
        "/api/user/create",
        {
          email,
          phone,
          password,
          name,
          gender,
          college,
          branch,
          rollNo,
          batch,
          know,
          isAccommodation,
          tshirtSize,
          paymentMode,
          caCode,
          transactionId,
          receipt,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTechmitiId(data.data.techmitiId);
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };



  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 py-4 bg-blue-800/40 '>
      <div >
        <h1 className='text-3xl font-serif text-slate-700'> TeCHMITI'<span className='text-4xl'>25</span> &nbsp; &nbsp;Registration</h1>
      </div>
      <div  className='flex flex-col items-center justify-center w-full '>
        <p>For all your queries, feel free to contact:</p>
        <p>Person1 : mobile number</p>
        <p>Person2 : mobile number</p>
        <p>Person3 : mobile number</p>
      </div>

      {/* form */}
        <form onSubmit={submitHandler} className='w-[100%] md:*[80%] '>
      <div className='flex  flex-col items-center justify-center w-full '>

        {/* 1st row */}
        <div className='flex flex-col md:flex-row items-start gap-4 py-4 '>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="name">Name*</label>
            <input type="text" required placeholder='Enter your Name' className=' bg-white p-1 rounded-sm w-[200px]' onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="email">Email*</label>
            <input type="email" required placeholder='Enter your Email ID' className=' bg-white p-1 rounded-sm w-[200px] ' onChange={(e)=> validateEmail(e)}/>
          </div>

        </div>

        {/* 2nd row */}
        <div className='flex flex-col md:flex-row items-start gap-4 py-4'>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="password">Password*</label>
            <input type="text" required placeholder='Set Your Password' className=' bg-white p-1 rounded-sm w-[200px]' onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="confirm password">Confirm Password*</label>
            <input type="text" required placeholder='Confirm Password' className=' bg-white p-1 rounded-sm w-[200px]' onChange={(e)=> setConfirmPass(e.target.value)}/>
          </div>

        </div>

        {/* 3rd row */}
        <div className='flex flex-col md:flex-row items-start gap-4 py-4'>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="mobilenumber">Mobile Number*</label>
            <div className='flex flex-row items-center justify-center '><p className='bg-slate-600/30 text-md  p-1 rounded-sm'>+91</p>
            <input type="number" required placeholder='Mobile Number' className=' bg-white p-1 rounded-sm w-[170px] ' />

            </div>
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="gender">Gender*</label>
            <select  id="gender" required onChange={(e)=>{setGender(e.target.value)}} className=' bg-white p-1 rounded-sm w-[200px]'>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
          </div>

        </div>

        {/* 4th row */}
        <div className='flex flex-col md:flex-row items-start gap-4 py-4'>
        <div className='flex flex-col items-start justify-center '>
            <label htmlFor="collegename">College*</label>
            <select name="college" id="college" required onChange={(e)=>setCollege(e.target.value)} className=' bg-white p-1 rounded-sm w-[200px]'>
              <option >Select One</option>
              {collegeName.sort((a,b)=>a.college.localeCompare(b.college)).map((item, index) => (
                <option key={index} value={`${item.value}`}> {item.college}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="branch">Branch*</label>
            <select name="branch" id="branch" required onChange={(e)=>setBranch(e.target.value)} className=' bg-white p-1 rounded-sm w-[200px]'>
              <option >Select One</option>
              {branchName.sort((a,b)=>a.branch.localeCompare(b.branch)).map((item, index) => (
                <option key={index} value={`${item.value}`}> {item.branch}</option>
              ))}
            </select>
          </div>
          
        </div>
        
        {college === "others" && (
                <div className='flex flex-col items-start justify-center '>
                  <label htmlFor="college">College Name*</label>
                  <input type="text" required placeholder='Enter your College Name' className=' bg-white p-1 rounded-sm w-[200px] md:w-[420px]' />
                </div>
              )}


      {/* 5th row */}

      <div className='flex flex-col md:flex-row items-start gap-4 py-4'>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="rollno">College Roll No*</label>
            <input type="text" required placeholder='Enter your Roll No' className=' bg-white p-1 rounded-sm w-[200px]' />
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="batch">Batch*</label>
            <select  id="batch" required onChange={(e)=>{setBatch(e.target.value)}} className=' bg-white p-1 rounded-sm w-[200px]'>
                <option value="">Select One</option>
                {batchCode.map((item, index) => (
                  <option key={index} value={`${item.value}`}> {item.batch}</option>
                ))}
            </select>
          </div>

        </div>
      
      {/* 6th row */}
      <div className='flex flex-col md:flex-row items-start gap-4 py-4'>
        <div className='flex flex-col items-start justify-center '>
            <label htmlFor="tshirt">T-shirt Size*</label>
            <select name="tshirt" id="tshirt" required onChange={(e)=>setCollege(e.target.value)} className=' bg-white p-1 rounded-sm w-[200px]'>
              <option >Select One</option>
              {tshirtSizeValue.map((item, index) => (
                <option key={index} value={`${item}`}> {item}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="accommodation">Do you need Accommodation*</label>
            <select name="accommodation" id="accommodation" required onChange={(e)=>setIsAccommodation(e.target.value)} className=' bg-white p-1 rounded-sm w-[200px]'>
              <option >Select One</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          
        </div>
              
      {/* 7th row */}

      <div className='flex flex-col  items-start gap-4 py-4'>
        <p>Payment Method*</p>
            <div>
            <input type="radio" id="ca" name="ca" value = "ca" onChange={onPaymentModeChange} required checked={paymentMode==="ca"}/>
            <label htmlFor="ca">Through Campus Ambassador</label>
            </div>
            <div>
            <input type="radio" id="bank" name="bank" value = "bank" required checked={paymentMode==="bank"} onChange={onPaymentModeChange}/>
            <label htmlFor="bank">Through Bank Account</label>
            </div>
      </div>
      {paymentMode && paymentMode === "ca" && (
        <div className='flex flex-col  items-start gap-4 py-4'>
          <h3>Campus Ambassador</h3>
          <MessageBox> Participants can pay registration fee of Rs 1100/- to Campus
          Ambassador of their college.</MessageBox>
          <div className='flex flex-col  items-start gap-4 py-4 '>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="cacode">Campus Ambassador TechMITi Code*</label>
            <input type="text" required placeholder='Enter your CA Code' className=' bg-white p-1 rounded-sm w-[200px]' onChange={(e)=>setCaCode(e.target.value)} />
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="paymentreceipt">Screenshot of Payment(less than 2 mb)*</label>
            <input type="file" required placeholder='Upload Payment receipt' className=' bg-white p-1 rounded-sm w-[200px] ' />
          </div>

        </div>
        </div>
      )
      }

      {paymentMode && paymentMode === "bank" && (
        <div className='flex flex-col items-center justify-center w-full '>
          <h3>Bank Account</h3>
          <MessageBox>Participants can pay registration fee of Rs 1100/- on
          following bank account and upload the screenshot of payment:</MessageBox><br></br>
          <h4>Bank Details of Moxie:</h4>
                <p>
                  A/c no 3642274255 <br /> A/c Holder - MOXIE TECHNICAL CLUB MIT
                  MUZAFFARPUR <br />
                  IFSC code - CBIN0282034
                  <br /> Bank - Central Bank of India
                  <br /> Branch - Jhuran Chapra, Muzaffarpur (BH)
                </p>
                <div className='flex flex-col  items-start gap-4 py-4 '>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="cacode">Campus Ambassador TechMITi Code*</label>
            <input type="text"  placeholder='Enter your CA Code' className=' bg-white p-1 rounded-sm w-[200px]' onChange={(e)=>setCaCode(e.target.value)} />
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="paymentreceipt">Transaction ID*</label>
            <input type="text" required placeholder='Enter Transaction ID' className=' bg-white p-1 rounded-sm w-[200px] '  onChange={(e)=> setTransactionId(e.target.value)}/>
          </div>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor="paymentreceipt">Screenshot of Payment(less than 2 mb)*</label>
            <input type="file" required placeholder='Upload Payment receipt' className=' bg-white p-1 rounded-sm w-[200px] '  onChange={(e)=> validateFile(e)}/>
          </div>
          
          

        </div>
        </div>)}


      <button type="submit" id="regSubmit" disabled={!allFill()} className='p-2 bg-blue-600 text-white rounded-md my-4'> Register</button>
      </div>
        </form>
    </div>
  )
}

export default Register