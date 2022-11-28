import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logout from "./Logout";
import Robot from "../assets/robot1.gif";
export default function Welcome() {
    const [userName, setUserName] = useState("");
    useEffect(async () => {
        setUserName(
            await JSON.parse(
                localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
            ).username
        );
    }, []);
    return (
        <Container>
            <img src={Robot} alt="" />
            <h1>
                Welcome, <span>{userName}!</span>
            </h1>
            <br />
            <h3>Make some new friends  .   .   .</h3>
            <br />
            <h3> Please select  a new chat. </h3>

        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color:   #e57eb7;
  }
`;