import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import mav from "../images/mav.png";
import marvel from "../images/marvel1.png";
import aven from "../images/avenger.png";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  margin-top: 70px;
`;
const Btn = styled.button`
  background-color: blue;
  padding: 8px;
  color: white;
  border-radius: 10px;
  margin-top: 15px;
`;
const Para = styled.p`
  padding: 5px;
  margin-right: 20px;
`;
const PRight = styled.p`
  margin-left: 50px;
  padding: 10px;
`;
export default function Home() {
  return (
    <>
      <Nav />
      <FlexDiv>
        <div>
          <h1>Marvel Myanmar</h1>
          <Para>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel vero
            ipsa amet tenetur aut illum, molestiae, error mollitia, praesentium
            porro sit? Rem accusamus soluta accusantium nobis ipsum cumque
            obcaecati veritatis?
          </Para>
          <Btn>Download App</Btn>
        </div>
        <img src={mav} width="450px" height="300px" />
      </FlexDiv>

      <FlexDiv>
        <img src={marvel} width="450px" height="300px" />
        <div>
          <PRight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            voluptatem omnis nemo aliquid culpa officia eum, dolor quod odit
            temporibus minus voluptas sequi odio voluptatum debitis maxime
            molestiae, itaque quidem? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corrupti, voluptatem omnis nemo aliquid culpa
            officia eum, dolor quod odit temporibus minus voluptas sequi odio
            voluptatum debitis maxime molestiae, itaque quidem? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Corrupti, voluptatem
            omnis nemo aliquid culpa officia eum, dolor quod odit temporibus
            minus voluptas sequi odio voluptatum debitis maxime molestiae,
            itaque quidem? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corrupti, voluptatem omnis nemo aliquid culpa officia eum,
            dolor quod odit temporibus minus voluptas sequi odio voluptatum
            debitis maxime molestiae, itaque quidem?
          </PRight>
        </div>
      </FlexDiv>

      <FlexDiv>
        <div>
          <Para>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel vero
            ipsa amet tenetur aut illum, molestiae, error mollitia, praesentium
            porro sit? Rem accusamus soluta accusantium nobis ipsum cumque
            obcaecati veritatis? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vel vero ipsa amet tenetur aut illum, molestiae,
            error mollitia, praesentium porro sit? Rem accusamus soluta
            accusantium nobis ipsum cumque obcaecati veritatis? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Vel vero ipsa amet
            tenetur aut illum, molestiae, error mollitia, praesentium porro sit?
            Rem accusamus soluta accusantium nobis ipsum cumque obcaecati
            veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Vel vero ipsa amet tenetur aut illum, molestiae, error mollitia,
            praesentium porro sit? Rem accusamus soluta accusantium nobis ipsum
            cumque obcaecati veritatis?
          </Para>
        </div>
        <img src={aven} width="450px" height="300px" />
      </FlexDiv>
    </>
  );
}
