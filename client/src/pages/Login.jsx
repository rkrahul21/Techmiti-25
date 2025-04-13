import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginContainer = styled.div`
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

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 2.5rem;
  background: rgba(106, 117, 247, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(106, 117, 247, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;

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
  width: 100%;
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

const ErrorMessage = styled.div`
  color: #ff4444;
  background: rgba(255, 68, 68, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProfileCard = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2.5rem;
  background: rgba(106, 117, 247, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(106, 117, 247, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const ProfileTitle = styled.h2`
  font-size: 2rem;
  font-family: "Orbitron", sans-serif;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(120deg, #6a75f7, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(106, 117, 247, 0.3);
`;

const ProfileInfo = styled.div`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;

  span {
    color: #6a75f7;
    font-weight: 600;
  }
`;

const RegisterLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  a {
    color: #6a75f7;
    text-decoration: none;
    font-weight: 600;
    margin-left: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #00f2fe;
      text-decoration: underline;
    }
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, user, logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(email, password);

    if (result.success) {
      if (result.user.isPaymentVerified) {
        // Login successful, user state will be updated automatically
        setLoading(false);
      } else {
        setError(
          "Your payment is not verified yet. Please complete the payment verification process."
        );
        setLoading(false);
        // Logout the user since payment is not verified
        logout();
      }
    } else {
      setError(result.message);
      setLoading(false);
    }
  };

  // If user is already logged in, show profile
  if (user) {
    if (!user.isPaymentVerified) {
      return (
        <LoginContainer>
          <ProfileCard>
            <ProfileTitle>Payment Verification Required</ProfileTitle>
            <ProfileInfo>
              Your payment is not verified yet. Please complete the payment
              verification process to access your account.
            </ProfileInfo>
            <SubmitButton onClick={() => logout()}>Login Again</SubmitButton>
          </ProfileCard>
        </LoginContainer>
      );
    }

    return (
      <LoginContainer>
        <ProfileCard>
          <ProfileTitle>Profile Details</ProfileTitle>
          <ProfileInfo>
            Name: <span>{user.name}</span>
          </ProfileInfo>
          <ProfileInfo>
            Techmiti ID: <span>{user.techmitiId}</span>
          </ProfileInfo>
          <ProfileInfo>
            Email: <span>{user.email}</span>
          </ProfileInfo>
          <ProfileInfo>
            College: <span>{user.college}</span>
          </ProfileInfo>
          <ProfileInfo>
            Branch: <span>{user.branch}</span>
          </ProfileInfo>
          <ProfileInfo>
            Payment Status:{" "}
            <span>{user.isPaymentVerified ? "Verified" : "Pending"}</span>
          </ProfileInfo>
        </ProfileCard>
      </LoginContainer>
    );
  }

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroup>
          <label>Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </FormGroup>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </SubmitButton>
        <RegisterLink>
          New to TechMITi? <a href="/register">Register Now</a>
        </RegisterLink>
      </Form>
    </LoginContainer>
  );
}
