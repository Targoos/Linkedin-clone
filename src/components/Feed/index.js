import React, { useState, useEffect } from "react";
import firebase from "firebase";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { db } from "../../firebase/firebaseConfig";
import Post from "./Post";
import PostOption from "./PostOption";
import { feed as s } from "./styles";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    name: "Liliana Zorrilla",
    description: "Graphic Designer",
    message: "",
  });

  const { displayName, photoURL } = useSelector(selectUser);

  const { description, message } = post;

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        return setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const handleChange = (name, value) => {
    setPost({
      ...post,
      [name]: value,
    });
  };

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: displayName,
      description,
      message,
      photoUrl: photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setPost({
      ...post,
      message: "",
    });
  };

  return (
    <s.Container>
      <s.WrapperPost>
        <s.PostInput>
          <CreateIcon />
          <s.Form onSubmit={sendPost}>
            <s.Input
              type="text"
              name="message"
              value={message}
              placeholder="Crear Publicacion"
              onChange={({ target }) => handleChange("message", target.value)}
              autoComplete="off"
            />
            <s.Button type="submit">Send</s.Button>
          </s.Form>
        </s.PostInput>
        <s.PostOptions>
          <PostOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <PostOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <PostOption Icon={EventNoteIcon} title="Evento" color="#C0CBCD" />
          <PostOption
            Icon={CalendarViewDayIcon}
            title="Escribir Articulo"
            color="#7FC15E"
          />
        </s.PostOptions>
      </s.WrapperPost>

      <s.FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          );
        })}
      </s.FlipMove>
    </s.Container>
  );
};

export default Feed;
