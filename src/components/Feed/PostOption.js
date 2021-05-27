import React from "react";
import { postOption as s } from "./styles";

const PostOption = ({ Icon, title, color }) => {
  return (
    <s.Wrapper>
      <Icon color={color} style={{ color: color }} />
      <s.Title>{title}</s.Title>
    </s.Wrapper>
  );
};

export default PostOption;
