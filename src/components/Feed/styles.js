import styled from "styled-components";
import FlipMove from "react-flip-move";

export const feed = {
  Container: styled.div`
    flex: 0.6;
    margin: 0 20px;
  `,
  WrapperPost: styled.div`
    background-color: white;
    padding: 10px 10px 5px;
    border-radius: 10px;
    margin-bottom: 20px;
  `,
  PostInput: styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 10px;
    color: gray;
    background-color: #ebebeb;
  `,
  Form: styled.form`
    display: flex;
    width: 100%;
  `,
  Input: styled.input`
    border: none;
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    outline-width: 0;
    font-weight: 600;
    background-color: #ebebeb;
  `,
  Button: styled.button`
    display: none;
  `,
  PostOptions: styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 5px;
  `,
  FlipMove: styled(FlipMove)`
    position: static !important;
  `,
};

export const postOption = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    color: gray;
    cursor: pointer;
    padding: 15px 5px;
    &:hover {
      background-color: whitesmoke;
      border-radius: 10px;
    }
  `,
  Title: styled.h5`
    margin-left: 5px;
  `,
};

export const post = {
  Container: styled.div`
    position: static;
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
  `,
  Header: styled.div`
    display: flex;
    margin-bottom: 10px;
  `,
  Info: styled.div`
    margin-left: 10px;
  `,
  User: styled.h2``,
  Description: styled.p`
    font-size: 12px;
    color: gray;
  `,
  Body: styled.div`
    overflow-wrap: anywhere;
  `,
  Message: styled.p`
    font-size: 15px;
  `,
  Buttons: styled.div`
    display: flex;
  `,
};
