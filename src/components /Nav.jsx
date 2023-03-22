import React from "react";
import logo from "../images/logo.png";
import sty from "styled-components";
import { useLoginContext } from "../LoginProvider";
import { useNavigate } from "react-router-dom";

const NavDiv = sty.div`
    display :flex;
   background-color : ${(props) => props.theme.color.primary};
   justify-content : space-between;
   align-items :center;
`;
const RightDIV = sty.div`
    margin-right : 30px;
    color: blue;
    font-size :20px;
   display :flex;

  
`;
const LDiv = sty.div`
    margin-left : 30px;
    padding:8px;
    border-radius: 45px;
`;

const ADiv = sty.div`
     &:hover {
      text-decoration: underline;
     }
     padding: 8px;
`;

export default function Nav() {
  const { loggedin, setLoggedin } = useLoginContext();
  const navigate = useNavigate();
  const logout = () => {
    setLoggedin(false);
    navigate("/");
  };

  return (
    <NavDiv>
      <LDiv>
        <img src={logo} width="115px" height="80px" />
      </LDiv>
      <div>
        <h1>MARVEL Myanmar</h1>
      </div>
      <RightDIV>
        <ADiv>Download</ADiv>
        <ADiv>
          <a href="#" onClick={logout}>
            {" "}
            {loggedin ? "Logout" : "Login"}
          </a>
        </ADiv>
      </RightDIV>
    </NavDiv>
  );
}
