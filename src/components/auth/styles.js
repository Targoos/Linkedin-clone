import styled from "styled-components";
import { Link } from "react-router-dom";

export const login = {
  Container: styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: white;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
  `,
  Logo: styled.img`
    object-fit: contain;
    align-self: flex-start;
    height: 30px;
    margin: 30px 0;
  `,
  Heading: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 24px;
  `,
  Title: styled.h1`
    font-size: 30px;
    line-height: 1.25;
    font-weight: 600;
    padding: 0 0 4px 0;
  `,
  Subtitle: styled.p`
    font-size: 15px;
    font-weight: 400;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 32px 32px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  `,
  Input: styled.input`
    width: 350px;
    height: 50px;
    font-size: 15px;
    padding-left: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid gray;
  `,
  Button: styled.button`
    width: 365px;
    height: 50px;
    font-size: large;
    color: #fff;
    background-color: #0074b1;
    border-radius: 50px;
    border: none;
    margin-top: 22px;
  `,
  Question: styled.p`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `,
  Register: styled(Link)`
    color: #0177b7;
    cursor: pointer;
    margin-left: 5px;
    text-decoration: none;
  `,
};

export const register = {
  Container: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Logo: styled.img`
    object-fit: contain;
    align-self: center;
    height: 40px;
    margin: 30px 0;
  `,
  Heading: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 24px;
  `,
  Title: styled.h1`
    font-size: 30px;
    line-height: 1.25;
    font-weight: 400;
    padding: 0 0 30px;
  `,
  Form: styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 24px 32px 32px;
    border-radius: 8px;
  `,
  Label: styled.label`
    align-self: flex-start;
    color: gray;
    font-size: 15px;
    font-weight: 400;
  `,
  Input: styled.input`
    width: 350px;
    height: 30px;
    font-size: 15px;
    padding-left: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid gray;
  `,
  Button: styled.button`
    width: 365px;
    height: 50px;
    font-size: large;
    color: #fff;
    background-color: #0074b1;
    border-radius: 50px;
    border: none;
    margin-top: 22px;
  `,
  Question: styled.p`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `,
  Register: styled(Link)`
    color: #0177b7;
    cursor: pointer;
    margin-left: 5px;
    text-decoration: none;
  `,
};
