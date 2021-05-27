import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase/firebaseConfig";
import Option from "./Option";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { header as s } from "./styles";

const Header = () => {
  const dispatch = useDispatch();

  const userImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZkUZ6zLYjidf8l1PVbM02TAROpPBoSBeKzMO-iJBsutj5jT4hLxRqo2SZN0H7WrIYlY&usqp=CAU";

  const user = useSelector(selectUser);

  const logoutApp = () => {
    auth.signOut();
    dispatch(logout());
  };

  return (
    <s.Container>
      <s.LeftContainer>
        <s.Logo
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="Linkedin-logo"
        />
        <s.SearchInput>
          <SearchIcon />
          <s.Input type="text" placeholder="Buscar" />
        </s.SearchInput>
      </s.LeftContainer>
      <s.RightContainer>
        <Option Icon={HomeIcon} title="Inicio" />
        <Option Icon={SupervisorAccountIcon} title="Mi Red" />
        <Option Icon={WorkIcon} title="Empleos" />
        <Option Icon={ChatIcon} title="Mensajes" />
        <Option Icon={NotificationsIcon} title="Notificaciones" />
        <Option onClick={logoutApp} avatar={user && userImage} title="avatar" />
      </s.RightContainer>
    </s.Container>
  );
};

export default Header;
