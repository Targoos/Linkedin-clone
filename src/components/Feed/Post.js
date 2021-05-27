import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { post as s } from "./styles";
import PostOption from "./PostOption";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <s.Container ref={ref}>
      <s.Header>
        <Avatar src={photoUrl} style={{ position: "inherit" }} />
        <s.Info>
          <s.User>{name}</s.User>
          <s.Description>{description}</s.Description>
        </s.Info>
      </s.Header>
      <s.Body>
        <s.Message>{message}</s.Message>
      </s.Body>
      <s.Buttons>
        <PostOption
          Icon={ThumbUpAltOutlinedIcon}
          title="Recomendar"
          color="gray"
        />
        <PostOption Icon={ChatOutlinedIcon} title="Comentar" color="gray" />
        <PostOption Icon={ShareOutlinedIcon} title="Compartir" color="gray" />
        <PostOption Icon={SendOutlinedIcon} title="Enviar" color="gray" />
      </s.Buttons>
    </s.Container>
  );
});

export default Post;
