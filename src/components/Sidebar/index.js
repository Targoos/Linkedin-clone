import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { sidebar as s } from "./styles";

const Sidebar = () => {
  const { email, displayName, photoURL } = useSelector(selectUser);

  const userImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZkUZ6zLYjidf8l1PVbM02TAROpPBoSBeKzMO-iJBsutj5jT4hLxRqo2SZN0H7WrIYlY&usqp=CAU";

  return (
    <s.Container>
      <s.IdentityModule>
        <s.ProfileBackground src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <s.Avatar src={userImage} />
        <s.Username>{displayName}</s.Username>
        <s.UserEmail>{email}</s.UserEmail>
      </s.IdentityModule>
      <s.Statistics>
        <s.Stat>
          <s.StatInfo>Quien ha visto tu perfil</s.StatInfo>
          <s.StatNumber>85</s.StatNumber>
        </s.Stat>
        <s.Stat>
          <s.StatInfo>Contactos</s.StatInfo>
          <s.StatNumber>128</s.StatNumber>
        </s.Stat>
      </s.Statistics>
      <s.CommunityPanel>
        <s.Recent>Recientes</s.Recent>
        <s.RecentItem>
          <span>#</span>
          <s.Item>mercadoLibre</s.Item>
        </s.RecentItem>
        <s.RecentItem>
          <span>#</span>
          <s.Item>Js</s.Item>
        </s.RecentItem>
        <s.RecentItem>
          <span>#</span>
          <s.Item>ofertalaboral</s.Item>
        </s.RecentItem>
        <s.RecentItem>
          <span>#</span>
          <s.Item>trabajo</s.Item>
        </s.RecentItem>
      </s.CommunityPanel>
    </s.Container>
  );
};

export default Sidebar;
