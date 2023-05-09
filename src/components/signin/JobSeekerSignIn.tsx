import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

// interface SignInProps {
//   onSignIn: (email: string, password: string) => void;
// }

const SignInFormContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: auto;
  padding: 20px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 10px;
  box-sizing: border-box;
  padding: 70px;
  border: 0px solid grey;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);

  @media screen and (max-width: 700px) {
    width: 80vw;
    padding: 10px;
    margin-top: -200px;
  }
`;

const SignInButton = styled.button`
  background-color: #0077cc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

const SignInInput = styled.input`
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: 80%;
`;
const Title = styled.label`
  font-family: sans-serif;
  letter-spacing: 1px;
  font-weight: 600;
  color: #3d5a81;
  margin-bottom: 20px;
`;
type TRecruiterSigninDetails = { email?: string; password?: string };

const RecruiterSignIn: React.FC<any> = () => {
  const [recruiterSigninDetails, setRecruiterSigninDetails] = useState<
    any | TRecruiterSigninDetails
  >(null);

  const handleSignIn = (event: any) => {
    event.preventDefault();
  };
  const getSiginDetails = (e: any) => {
    setRecruiterSigninDetails({
      ...recruiterSigninDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <Link
          to="/"
          style={{
            position: "fixed",
            top: "25px",
            left: "20px",
            textDecoration: "none",
            color: "#eef",
            background: "#ee6c4d",
            width: "100px",
            height: "32px",
            textAlign: "center",
            borderRadius: "7px",
            paddingTop: "10px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          Home
        </Link>
      </div>
      <SignInFormContainer>
        <SignInForm onSubmit={handleSignIn}>
          <Title>JobSeeker Signin</Title>
          {/* <SignInInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        /> */}
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            name="email"
            size="small"
            variant="outlined"
            fullWidth
            value={recruiterSigninDetails?.email}
            onChange={getSiginDetails}
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            size="small"
            variant="outlined"
            fullWidth
            name="password"
            value={recruiterSigninDetails?.email}
            onChange={getSiginDetails}
          />
          {/* <SignInInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        /> */}

          <SignInButton type="submit">Sign In</SignInButton>
          <Link
            to="/jobseeker/signup"
            style={{
              textDecoration: "none",
              color: "#16488a",
            }}
          >
            Create Account
          </Link>
        </SignInForm>
      </SignInFormContainer>
    </>
  );
};

export default RecruiterSignIn;
//[#3d5a80 : dark slate color,#98c1d9 : sky blue,#e0fbfc : light skyblue,#ee6c4d : brick color,#293241 :black]
