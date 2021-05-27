import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import { widgets as s } from "./styles";
import NewsArticle from "./NewsArticle";

const Widgets = () => {
  return (
    <s.Container>
      <s.Header>
        <s.Title>Linkedin News</s.Title>
        <InfoIcon />
      </s.Header>
      <NewsArticle heading="Bitcoin breaks $50k" subtitle="300 readers" />
      <NewsArticle heading="Is redux too good?" subtitle="80 readers" />
      <NewsArticle heading="Is necessary TypeScript" subtitle="400 readers" />
    </s.Container>
  );
};

export default Widgets;
