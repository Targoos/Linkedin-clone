import styled from "styled-components";

export const header = {
  Container: styled.div`
    background-color: white;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 0.1px solid #ebebeb;
  `,
  LeftContainer: styled.div`
    display: flex;
  `,
  Logo: styled.img`
    object-fit: contain;
    height: 34px;
  `,
  RightContainer: styled.div`
    display: flex;
  `,
  SearchInput: styled.div`
    display: flex;
    padding: 6px;
    margin: 0 8px;
    align-items: center;
    border-radius: 5px;
    background: #eef3f8;
    height: 22px;
    color: black;
  `,
  Input: styled.input`
    outline: none;
    border: none;
    background: #eef3f8;
  `,
};

export const headerOption = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 11px;
    padding: 5px 20px;
    color: gray;
    cursor: pointer;
    &:hover {
      color: black;
    }
  `,
  HeaderAvatar: styled.img`
    height: 23px;
    border-radius: 50%;
    padding: 1px;
  `,
};
