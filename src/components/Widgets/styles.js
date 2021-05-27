import styled from "styled-components";

export const widgets = {
  Container: styled.div`
    position: sticky;
    position: -webkit-sticky;
    align-self: flex-start;
    top: 80px;
    flex: 0.2;
    background-color: white;
    border-radius: 10px;
    border: 1px solid lightgray;
    height: fit-content;
    padding-bottom: 10px;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  `,
  Title: styled.h2`
    font-size: 16px;
    font-weight: 400;
  `,
};

export const newsArticle = {
  Container: styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: whitesmoke;
    }
  `,
  LeftContainer: styled.div`
    color: #0177b7;
    margin-right: 7px;
  `,
  RightContainer: styled.div`
    flex: 1;
  `,
  Heading: styled.h4`
    font-size: 14px;
  `,
  Subtitle: styled.p`
    font-size: 12px;
    color: gray;
  `,
};
