import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { newsArticle as s } from "./styles";

const NewsArticle = ({ heading, subtitle }) => {
  return (
    <s.Container>
      <s.LeftContainer>
        <FiberManualRecordIcon />
      </s.LeftContainer>
      <s.RightContainer>
        <s.Heading>{heading}</s.Heading>
        <s.Subtitle>{subtitle}</s.Subtitle>
      </s.RightContainer>
    </s.Container>
  );
};

export default NewsArticle;
