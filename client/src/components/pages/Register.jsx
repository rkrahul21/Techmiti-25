import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import qrImage from "./qr.jpg";
import {
  branchName,
  collegeName,
  batchCode,
  // knowAbout,
  tshirtSizeValue,
} from "@/constant/collegeData";
import MessageBox from "../sections/MessageBox";
import { useNavigate } from "react-router-dom";

const RegisterContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(13, 17, 23, 0.98) 0%,
    rgba(21, 25, 31, 0.99) 100%
  );
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/bg-video.mp4") center/cover no-repeat fixed;
    opacity: 0.08;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(13, 17, 23, 0.8) 100%
    );
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: "Orbitron", sans-serif;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(120deg, #6a75f7, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(106, 117, 247, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(106, 117, 247, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(106, 117, 247, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  p {
    margin: 0.5rem 0;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 1000px;
  padding: 2.5rem;
  background: rgba(106, 117, 247, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(106, 117, 247, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;

  label {
    display: block;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(106, 117, 247, 0.2);
  background: rgba(13, 17, 23, 0.3);
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6a75f7;
    box-shadow: 0 0 0 2px rgba(106, 117, 247, 0.2);
  }

  &.is-valid {
    border-color: #00f2fe;
  }

  &.is-invalid {
    border-color: #ff4444;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(106, 117, 247, 0.2);
  background: rgba(13, 17, 23, 0.3);
  color: white;
  font-size: 0.9rem;
  cursor: pointer;

  option {
    background: #0d1117;
    color: white;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  background: rgba(106, 117, 247, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(106, 117, 247, 0.1);

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  input[type="radio"] {
    accent-color: #6a75f7;
  }
`;

const StyledMessageBox = styled(MessageBox)`
  background: linear-gradient(
    135deg,
    rgba(106, 117, 247, 0.1) 0%,
    rgba(0, 242, 254, 0.1) 100%
  );
  border: 1px solid rgba(106, 117, 247, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
  color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(106, 117, 247, 0.5),
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 242, 254, 0.5),
      transparent
    );
  }
`;

const BankDetails = styled.div`
  background: rgba(106, 117, 247, 0.05);
  padding: 2rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  border: 1px solid rgba(106, 117, 247, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  h4 {
    color: #6a75f7;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #6a75f7 0%, #00f2fe 100%);
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(106, 117, 247, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background: linear-gradient(
    135deg,
    rgba(13, 17, 23, 0.98) 0%,
    rgba(21, 25, 31, 0.99) 100%
  );
`;

const StatusCard = styled.div`
  background: rgba(106, 117, 247, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(106, 117, 247, 0.1);
  padding: 3rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const StatusTitle = styled.h2`
  font-size: 2rem;
  font-family: "Orbitron", sans-serif;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #6a75f7, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(106, 117, 247, 0.3);
`;

const StatusMessage = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechmitiId = styled.span`
  display: inline-block;
  background: rgba(106, 117, 247, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: #6a75f7;
  font-weight: 600;
  margin-top: 1rem;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(106, 117, 247, 0.3);
  border-radius: 50%;
  border-top-color: #6a75f7;
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

const LoginButton = styled.button`
  background: transparent;
  border: 1px solid rgba(106, 117, 247, 0.3);
  color: #6a75f7;

  &:hover {
    background: rgba(106, 117, 247, 0.1);
    border-color: #6a75f7;
  }
`;

export default function Register() {
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
  const [know, setKnow] = useState("website");
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
  const navigate = useNavigate();

  const onPaymentModeChange = ({ target: { value } }) => {
    setPaymentMode(value);
  };
  // setKnow("website");
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

  useEffect(() => {
    if (givenCollegeName === "other") {
      setCollege(OtherCollegeName);
    } else {
      setCollege(givenCollegeName);
    }
  }, [OtherCollegeName, givenCollegeName]);

  useEffect(() => {
    // Check if there's a saved success state
    const savedSuccess = sessionStorage.getItem("registrationSuccess");
    const savedTechmitiId = sessionStorage.getItem("techmitiId");
    if (savedSuccess === "true" && savedTechmitiId) {
      setSuccess(true);
      setTechmitiId(savedTechmitiId);
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3004/api/user/create",
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
      console.log("data in register.jsx", data);
      console.log("techmitiid", data.data.techmitiId);
      setTechmitiId(data.data.techmitiId);
      // Save success state and techmitiId to sessionStorage
      sessionStorage.setItem("registrationSuccess", "true");
      sessionStorage.setItem("techmitiId", data.data.techmitiId);
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
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

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleNewRegistration = () => {
    // Clear session storage
    sessionStorage.removeItem("registrationSuccess");
    sessionStorage.removeItem("techmitiId");

    // Reset all form states
    setEmail(undefined);
    setPhone(undefined);
    setPassword(undefined);
    setConfirmPass(undefined);
    setName(undefined);
    setGender(undefined);
    setCollege(undefined);
    setBranch(undefined);
    setRollNo(undefined);
    setBatch(undefined);
    setKnow("website");
    setIsAccommodation(undefined);
    setTshirtSize(undefined);
    setPaymentMode(undefined);
    setCaCode(undefined);
    setTransactionId(undefined);
    setReceipt(null);
    setGivenCollegeName(undefined);
    setOtherCollegeName(undefined);

    // Reset success state to show registration form
    setSuccess(false);
    setTechmitiId(undefined);
  };

  return (
    <div>
      {loading ? (
        <StatusContainer>
          <StatusCard>
            <LoadingSpinner />
            <StatusTitle>Processing Registration</StatusTitle>
            <StatusMessage>
              Please wait while we process your registration...
            </StatusMessage>
          </StatusCard>
        </StatusContainer>
      ) : error ? (
        <StatusContainer>
          <StatusCard>
            <StatusTitle>Registration Error</StatusTitle>
            <StatusMessage>{error}</StatusMessage>
            <ButtonGroup>
              <LoginButton onClick={() => setError("")}>Try Again</LoginButton>
              <LoginButton onClick={handleLoginClick}>Go to Login</LoginButton>
            </ButtonGroup>
          </StatusCard>
        </StatusContainer>
      ) : success ? (
        <StatusContainer>
          <StatusCard>
            <StatusTitle>Registration Successful!</StatusTitle>
            <StatusMessage>
              Congratulations! You have successfully registered for TechMITi'25
            </StatusMessage>
            <StatusMessage>
              Your Techmiti ID: <TechmitiId>{techmitiId}</TechmitiId>
            </StatusMessage>
            <StatusMessage>
              Congratulations, your application has been successfully processed,
              and you have been assigned a TechMITi'25 ID. Please note that it
              may take up to 24 hours for your payment to be verified by the
              organizers. Once your payment is verified, you will be able to
              register for events. If you have any questions or concerns about
              the event, please contact the organizers directly.
            </StatusMessage>
            <ButtonGroup>
              <LoginButton onClick={handleLoginClick}>
                Login to your account
              </LoginButton>
              <LoginButton
                onClick={handleNewRegistration}
                style={{
                  background: "rgba(106, 117, 247, 0.1)",
                  color: "#00f2fe",
                }}
              >
                Register Another Account
              </LoginButton>
            </ButtonGroup>
          </StatusCard>
        </StatusContainer>
      ) : (
        <RegisterContainer>
          <Title>
            TechMITi'<span>25</span> Registration
          </Title>

          <ButtonGroup style={{ marginBottom: "2rem" }}>
            <LoginButton
              onClick={handleLoginClick}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
            >
              Already have an account? Login
            </LoginButton>
          </ButtonGroup>

          <ContactInfo>
            <p>For all your queries, feel free to contact:</p>
            <p>Ashwani Kumar : 7488239311</p>
            <p>Rahul Kumar : 8102140127</p>
            <p>Om Kumar: 6203442712</p>
          </ContactInfo>

          <Form onSubmit={submitHandler} encType="multipart/form-data">
            <FormRow>
              <FormGroup>
                <label>Full Name*</label>
                <Input
                  type="text"
                  required
                  placeholder="Enter your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Email*</label>
                <Input
                  type="email"
                  required
                  placeholder="Enter your Email ID"
                  onChange={(e) => validateEmail(e)}
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <label>Password*</label>
                <Input
                  type="password"
                  required
                  placeholder="Set Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Confirm Password*</label>
                <Input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  onChange={(e) => validatePassword(e)}
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <label>Mobile Number*</label>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Input
                    style={{ width: "60px", textAlign: "center" }}
                    value="+91"
                    disabled
                  />
                  <Input
                    type="number"
                    required
                    placeholder="Mobile Number"
                    onChange={(e) => validateMobile(e)}
                    maxLength={10}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <label>Gender*</label>
                <Select required onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <label>College*</label>
                <Select
                  required
                  onChange={(e) => setGivenCollegeName(e.target.value)}
                >
                  <option value="">Select One</option>
                  {collegeName
                    .sort((a, b) => a.college.localeCompare(b.college))
                    .map((item, index) => (
                      <option key={index} value={`${item.value}`}>
                        {item.college}
                      </option>
                    ))}
                  <option value="other">Other</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <label>Branch*</label>
                <Select required onChange={(e) => setBranch(e.target.value)}>
                  <option value="">Select One</option>
                  {branchName
                    .sort((a, b) => a.branch.localeCompare(b.branch))
                    .map((item, index) => (
                      <option key={index} value={`${item.value}`}>
                        {item.branch}
                      </option>
                    ))}
                </Select>
              </FormGroup>
            </FormRow>

            {givenCollegeName && givenCollegeName === "other" && (
              <FormRow>
                <FormGroup>
                  <label>Enter College Name*</label>
                  <Input
                    type="text"
                    required
                    placeholder="Enter your College Name"
                    onChange={(e) => setOtherCollegeName(e.target.value)}
                  />
                </FormGroup>
              </FormRow>
            )}

            <FormRow>
              <FormGroup>
                <label>College Roll No*</label>
                <Input
                  type="text"
                  required
                  placeholder="Enter your Roll No"
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Batch*</label>
                <Select required onChange={(e) => setBatch(e.target.value)}>
                  <option value="">Select One</option>
                  {batchCode.map((item, index) => (
                    <option key={index} value={`${item.value}`}>
                      {item.batch}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <label>T-shirt Size*</label>
                <Select
                  required
                  onChange={(e) => setTshirtSize(e.target.value)}
                >
                  <option value="">Select One</option>
                  {tshirtSizeValue.map((item, index) => (
                    <option key={index} value={`${item}`}>
                      {item}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <label>Do you need Accommodation*</label>
                <Select
                  required
                  onChange={(e) => setIsAccommodation(e.target.value)}
                >
                  <option value="">Select One</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <RadioGroup>
                <p>Payment Method*</p>
                <label>
                  <input
                    id="default-radio-1"
                    type="radio"
                    name="payment"
                    value="ca"
                    checked={paymentMode === "ca"}
                    onChange={onPaymentModeChange}
                  />
                  Through QR Code
                </label>
                <label>
                  <input
                    id="default-radio-2"
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMode === "bank"}
                    onChange={onPaymentModeChange}
                  />
                  Through Bank Account
                </label>
              </RadioGroup>
            </FormRow>

            {paymentMode && paymentMode === "ca" && (
              <div>
                <h3 style={{ color: "#6a75f7", marginBottom: "1rem" }}>
                  Campus Ambassador
                </h3>
                <StyledMessageBox>
                  Participants can pay registration fee of Rs 1000/
                </StyledMessageBox>

                {/* QR Code Section */}
                <div
                  style={{
                    margin: "1.5rem 0",
                    padding: "1rem",
                    backgroundColor: "#1a1a2e",
                    borderRadius: "8px",
                    border: "1px solid #2d2d42",
                    textAlign: "center",
                  }}
                >
                  <h4 style={{ color: "#6a75f7", marginBottom: "0.5rem" }}>
                    Scan to Pay via UPI
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <img
                      src={qrImage} // Replace with your actual QR code image path
                      alt="Payment QR Code"
                      style={{
                        width: "200px",
                        height: "200px",
                        border: "1px solid #3a3a5a",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: "#a0a0c0",
                      fontSize: "0.9rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    UPI ID: kr03ankit@oksbi
                  </p>
                  <p
                    style={{
                      color: "#d0d0f0",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    Amount: ₹1000
                  </p>
                </div>

                <FormRow>
                  <FormGroup>
                    <label>Campus Ambassador TechMITi Code (Optional)</label>
                    <Input
                      type="text"
                      placeholder="Enter your CA Code"
                      onChange={(e) => setCaCode(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Transaction ID*</label>
                    <Input
                      type="text"
                      required
                      placeholder="Enter Transaction ID"
                      onChange={(e) => setTransactionId(e.target.value)}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow>
                  <FormGroup>
                    <label>Screenshot of Payment (less than 2 mb)*</label>
                    <Input
                      type="file"
                      name="receipt"
                      required
                      onChange={(e) => validateFile(e)}
                      accept="image/*"
                    />
                  </FormGroup>
                </FormRow>
              </div>
            )}

            {paymentMode === "bank" && (
              <div>
                <h3 style={{ color: "#6a75f7", marginBottom: "1rem" }}>
                  Bank Account
                </h3>
                <StyledMessageBox>
                  Participants can pay registration fee of Rs 1000/- on
                  following bank account and upload the screenshot of payment:
                </StyledMessageBox>
                <BankDetails>
                  <h4>Bank Details of Moxie:</h4>
                  <p>
                    A/c no: 3642274255
                    <br />
                    A/c Holder: MOXIE TECHNICAL CLUB MIT MUZAFFARPUR
                    <br />
                    IFSC code: CBIN0282034
                    <br />
                    Bank: Central Bank of India
                    <br />
                    Branch: Jhuran Chapra, Muzaffarpur (BH)
                  </p>
                </BankDetails>
                <FormRow>
                  <FormGroup>
                    <label>Campus Ambassador TechMITi Code (Optional)</label>
                    <Input
                      type="text"
                      placeholder="Enter your CA Code"
                      onChange={(e) => setCaCode(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Transaction ID*</label>
                    <Input
                      type="text"
                      required
                      placeholder="Enter Transaction ID"
                      onChange={(e) => setTransactionId(e.target.value)}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow>
                  <FormGroup>
                    <label>Screenshot of Payment (less than 2 MB)*</label>
                    <Input
                      type="file"
                      name="receipt"
                      required
                      onChange={(e) => validateFile(e)}
                      accept="image/*"
                    />
                  </FormGroup>
                </FormRow>
              </div>
            )}

            <div style={{ textAlign: "center" }}>
              <SubmitButton type="submit" id="regSubmit" disabled={!allFill()}>
                Register
              </SubmitButton>
            </div>
          </Form>
        </RegisterContainer>
      )}
    </div>
  );
}
