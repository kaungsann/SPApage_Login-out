import React, { useRef } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { useLoginContext } from "../LoginProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const InputForm = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: aliceblue;
    padding: 30px;
    margin: auto;
  `;
  const Input = styled.div`
    padding: 10px;
  `;
  const Form = styled.div`
    margin-top: 90px;
  `;

  const { setLoggedin } = useLoginContext();
  const navigate = useNavigate();
  const nameRef = useRef();
  const passwordRef = useRef();
  const login = (e) => {
    e.preventDefault();
    let user = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };
    nameRef.current.value = "";
    passwordRef.current.value = "";
    setLoggedin(true);
    navigate("/home");
    console.log(user);
  };
  return (
    <>
      <Nav />
      <form className="mt-5" onSubmit={login}>
        <Form>
          <InputForm>
            <Input>
              <label class="form-label">Phone no:</label>
              <input
                type="tel"
                class="form-control"
                placeholder="Enter Your Phone"
                ref={nameRef}
              />
            </Input>
            <Input>
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter Your Password"
                ref={passwordRef}
              />
            </Input>
            <Input>
              <button type="submit" class="btn btn-primary float-end mt-3">
                Login
              </button>
            </Input>
          </InputForm>
        </Form>
      </form>
    </>
  );
}
