import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Sidebar from "../Sidebar";
import Feed from "../Feed";
import Widgets from "../Widgets";
import { body as s } from "./styles";
import Header from "../Header";

const Body = () => {
  const user = useSelector(selectUser);

  return (
    <s.Container>
      <Header />
      {user?.uid && (
        <s.Wrapper>
          <Sidebar />
          <Feed />
          <Widgets />
        </s.Wrapper>
      )}
    </s.Container>
  );
};

export default Body;
