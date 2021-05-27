import styled from "styled-components";

export const sidebar = {
  Container: styled.div`
    position: sticky;
    position: -webkit-sticky;
    align-self: flex-start;
    top: 80px;
    flex: 0.2;
  `,
  IdentityModule: styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-bottom: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-bottom: 16px;
  `,
  Avatar: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 20px;
  `,
  ProfileBackground: styled.img`
    margin-bottom: -25px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  `,
  Username: styled.h2`
    font-size: 18px;
    margin-bottom: 5px;
  `,
  UserEmail: styled.h4`
    color: gray;
    font-size: 12px;
    font-weight: 400;
  `,
  Statistics: styled.div`
    background-color: #ffffff;
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `,
  Stat: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 600;
  `,
  StatInfo: styled.p`
    color: gray;
  `,
  StatNumber: styled.p`
    color: #0a66c2;
  `,
  CommunityPanel: styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 12px 0 16px;
    font-size: 12px;
  `,
  Recent: styled.p`
    padding: 6px 12px;
  `,
  RecentItem: styled.div`
    display: flex;
    color: gray;
    font-weight: bold;
    padding: 4px 12px;
    cursor: pointer;
    &:hover {
      background-color: whitesmoke;
      color: black;
    }
  `,
  Item: styled.p`
    padding-left: 5px;
  `,
};
