import React from "react";
import { useState } from "react";
import {
  branchName,
  collegeName,
  batchCode,
  tshirtSizeValue,
  knowAbout,
} from "@/constant/collegeData";
import MessageBox from "../sections/MessageBox";
import logo from "@/assets/logo.jpg";

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

  console.log("gender", gender, paymentMode);

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
        setConfirmPass(e.target.value);
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };
  const validateFile = (e) => {
    var file = e.target.files[0];
    if (file && file.size / 1024 / 1024 < 2) {
      setReceipt(file);
    } else {
      window.alert("file size should be less than 5 mb");
      e.target.value = "";
    }
  };

  const onPaymentModeChange = ({ target: { value } }) => {
    setPaymentMode(value);
  };

  // form submit handler

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(
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
      receipt
    );
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
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-6 py-8 px-4 bg-gradient-to-b from-[#0f0c29] to-[#302b63]">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 relative group">
          TechMITi'<span className="text-5xl md:text-6xl">25</span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </h1>
        <p className="text-xl text-white/80 mt-2">Registration</p>
      </div>

      <div className="w-full max-w-4xl bg-black/30 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/10">
        <div className="text-center mb-8">
          <p className="text-white/80">
            For all your queries, feel free to contact:
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-blue-300">Person1 : mobile number</p>
            <p className="text-blue-300">Person2 : mobile number</p>
            <p className="text-blue-300">Person3 : mobile number</p>
          </div>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/90"
              >
                Name*
              </label>
              <input
                type="text"
                required
                placeholder="Enter your Name"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/90"
              >
                Email*
              </label>
              <input
                type="email"
                required
                placeholder="Enter your Email ID"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
                onChange={(e) => validateEmail(e)}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/90"
              >
                Password*
              </label>
              <input
                type="password"
                required
                placeholder="Set Your Password"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="confirm password"
                className="block text-sm font-medium text-white/90"
              >
                Confirm Password*
              </label>
              <input
                type="password"
                required
                placeholder="Confirm Password"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="mobilenumber"
                className="block text-sm font-medium text-white/90"
              >
                Mobile Number*
              </label>
              <div className="flex flex-row items-center justify-center">
                <p className="bg-slate-600/30 text-md p-1 rounded-sm">+91</p>
                <input
                  type="number"
                  required
                  placeholder="Mobile Number"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-white/90"
              >
                Gender*
              </label>
              <select
                id="gender"
                required
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className="w-full px-4 py-2 bg-[#1a1a2e] border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="" className="bg-[#1a1a2e] text-white">
                  Select
                </option>
                <option value="male" className="bg-[#1a1a2e] text-white">
                  Male
                </option>
                <option value="female" className="bg-[#1a1a2e] text-white">
                  Female
                </option>
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="collegename"
                className="block text-sm font-medium text-white/90"
              >
                College*
              </label>
              <select
                name="college"
                id="college"
                required
                onChange={(e) => setCollege(e.target.value)}
                className="w-full px-4 py-2 bg-[#1a1a2e] border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="" className="bg-[#1a1a2e] text-white">
                  Select One
                </option>
                {collegeName
                  .sort((a, b) => a.college.localeCompare(b.college))
                  .map((item, index) => (
                    <option
                      key={index}
                      value={`${item.value}`}
                      className="bg-[#1a1a2e] text-white"
                    >
                      {item.college}
                    </option>
                  ))}
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="branch"
                className="block text-sm font-medium text-white/90"
              >
                Branch*
              </label>
              <select
                name="branch"
                id="branch"
                required
                onChange={(e) => setBranch(e.target.value)}
                className="w-full px-4 py-2 bg-[#1a1a2e] border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="" className="bg-[#1a1a2e] text-white">
                  Select One
                </option>
                {branchName
                  .sort((a, b) => a.branch.localeCompare(b.branch))
                  .map((item, index) => (
                    <option
                      key={index}
                      value={`${item.value}`}
                      className="bg-[#1a1a2e] text-white"
                    >
                      {item.branch}
                    </option>
                  ))}
              </select>
            </div>
            {college === "others" && (
              <div className="space-y-2">
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-white/90"
                >
                  College Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your College Name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
                />
              </div>
            )}
            <div className="space-y-2">
              <label
                htmlFor="rollno"
                className="block text-sm font-medium text-white/90"
              >
                College Roll No*
              </label>
              <input
                type="text"
                required
                placeholder="Enter your Roll No"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="batch"
                className="block text-sm font-medium text-gray-300"
              >
                Batch*
              </label>
              <select
                id="batch"
                required
                onChange={(e) => {
                  setBatch(e.target.value);
                }}
                className="w-full px-4 py-2 bg-[#1a1a2e] border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="" className="bg-[#1a1a2e] text-white">
                  Select One
                </option>
                {batchCode.map((item, index) => (
                  <option
                    key={index}
                    value={`${item.value}`}
                    className="bg-[#1a1a2e] text-white"
                  >
                    {item.batch}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="tshirt"
                className="block text-sm font-medium text-gray-300"
              >
                T-shirt Size*
              </label>
              <select
                name="tshirt"
                id="tshirt"
                required
                onChange={(e) => setCollege(e.target.value)}
                className="w-full px-4 py-2 bg-[#1a1a2e] border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="" className="bg-[#1a1a2e] text-white">
                  Select One
                </option>
                {tshirtSizeValue.map((item, index) => (
                  <option
                    key={index}
                    value={`${item}`}
                    className="bg-[#1a1a2e] text-white"
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="accommodation"
                className="block text-sm font-medium text-gray-300"
              >
                Do you need Accommodation*
              </label>
              <select
                name="accommodation"
                id="accommodation"
                required
                onChange={(e) => setIsAccommodation(e.target.value)}
                className="w-full px-4 py-2 bg-[#1a1a2e] border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="" className="bg-[#1a1a2e] text-white">
                  Select One
                </option>
                <option value="yes" className="bg-[#1a1a2e] text-white">
                  Yes
                </option>
                <option value="no" className="bg-[#1a1a2e] text-white">
                  No
                </option>
              </select>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-200">
              Payment Method*
            </h3>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center space-x-3 text-gray-300 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="ca"
                  onChange={onPaymentModeChange}
                  checked={paymentMode === "ca"}
                  className="w-4 h-4 text-blue-500 border-gray-600 focus:ring-blue-500"
                />
                <span>Through Campus Ambassador</span>
              </label>
              <label className="flex items-center space-x-3 text-gray-300 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  onChange={onPaymentModeChange}
                  checked={paymentMode === "bank"}
                  className="w-4 h-4 text-blue-500 border-gray-600 focus:ring-blue-500"
                />
                <span>Through Bank Account</span>
              </label>
            </div>
          </div>

          {paymentMode === "ca" && (
            <div className="mt-8 space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <img
                  src={logo}
                  alt="CA Logo"
                  className="w-32 h-32 object-cover rounded-lg shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-200">
                  Payment QR Code
                </h3>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-200">
                    Campus Ambassador
                  </h3>
                  <MessageBox>
                    Participants can pay registration fee of Rs 1100/- to Campus
                    Ambassador of their college.
                  </MessageBox>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="cacode"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Campus Ambassador TechMITi Code*
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your CA Code"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        onChange={(e) => setCaCode(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="paymentreceipt"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Screenshot of Payment(less than 2 mb)*
                      </label>
                      <input
                        type="file"
                        required
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {paymentMode === "bank" && (
            <div className="mt-8 space-y-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">
                  Bank Account
                </h3>
                <MessageBox>
                  Participants can pay registration fee of Rs 1100/- on
                  following bank account and upload the screenshot of payment:
                </MessageBox>
                <div className="mt-4 p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-200 mb-2">
                    Bank Details of Moxie:
                  </h4>
                  <div className="space-y-1 text-gray-300">
                    <p>A/c no 3642274255</p>
                    <p>A/c Holder - MOXIE TECHNICAL CLUB MIT MUZAFFARPUR</p>
                    <p>IFSC code - CBIN0282034</p>
                    <p>Bank - Central Bank of India</p>
                    <p>Branch - Jhuran Chapra, Muzaffarpur (BH)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            id="regSubmit"
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
