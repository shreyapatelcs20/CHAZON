import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo1.png";

export default function Contacts({ contacts, changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    useEffect(async () => {
        const data = await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        );
        setCurrentUserName(data.username);
        setCurrentUserImage(data.avatarImage);
    }, []);
    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };
    return (
        <>
            {currentUserImage && currentUserImage && (
                <Container>
                    <div className="brand">
                        <img className="logo3" src={Logo} alt="logo" />
                        <h3>Chazon</h3>
                    </div>
                    <div className="contacts">
                        {contacts.map((contact, index) => {
                            return (
                                <div
                                    key={contact._id}
                                    className={`contact ${index === currentSelected ? "selected" : ""
                                        }`}
                                    onClick={() => changeCurrentChat(index, contact)}
                                >
                                    <div className="avatar">
                                        <img
                                            src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="username">
                                        <h3>{contact.username}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="current-user">
                        <div className="avatar">
                            <img
                                src={`data:image/svg+xml;base64,${currentUserImage}`}
                                alt="avatar"
                            />
                        </div>
                        <div className="username">
                            <h2>{currentUserName}</h2>
                        </div>
                    </div>
                </Container>
            )}
        </>
    );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color:   #6263cd59;
  .brand {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
   
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 1.2rem;
    &::-webkit-scrollbar {
      width: 0.6rem;
      &-thumb {
        background-color:  #9a86f3 ;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color:  #24ddd196;
      min-height: 5rem;
      cursor: pointer;
      width: 95%;
      border-radius: 0.7rem;
      padding: 0.6rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 4rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color:  #9a86f3;
    }
  }
  .current-user {
    text-align:center;
    position:relative;
    left:50px;
    padding:0.6rem;
    margin-top:0.6rem;
    border-radius:50rem;
    height:80px;
    width:200px;
    background-color: #9a86f3;
    .avatar {
      img {
        height: 2.7rem;
         
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
        
        bottom:0px;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;