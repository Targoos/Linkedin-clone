import React from "react";
import { headerOption as s } from "./styles";

const Option = ({ Icon, title, avatar, onClick }) => {
  return (
    <s.Wrapper onClick={onClick}>
      {Icon && <Icon />}
      {avatar && <s.HeaderAvatar src={avatar} alt={avatar} />}
      <h3>{title}</h3>
    </s.Wrapper>
  );
};

export default Option;
