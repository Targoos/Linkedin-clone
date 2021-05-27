import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase/firebaseConfig";
import { useForm } from "../../hooks/useForm";
import { register as s } from "./styles";

const Login = () => {
  const [registerForm, setField] = useForm({
    fullName: "",
    profileUrl: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { fullName, profileUrl, email, password } = registerForm;

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fullName,
            photoURL: profileUrl,
          })
          .then(() =>
            dispatch(
              login({
                displayName: fullName,
                photoURL: profileUrl,
                email: userAuth.user.email,
                uid: userAuth.user.uid,
              })
            )
          );
      })
      .catch((err) => alert(err));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            user: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };

  return (
    <s.Container>
      <s.Logo src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" />
      <s.Title>Make the most of your professional life</s.Title>
      <s.Wrapper>
        <s.Form>
          <s.Label>Full name</s.Label>
          <s.Input
            name="fullName"
            value={fullName}
            type="text"
            onChange={({ target: { value } }) => setField("fullName", value)}
          />
          <s.Label>Profile Pic</s.Label>
          <s.Input
            name="profileUrl"
            value={profileUrl}
            type="text"
            onChange={({ target: { value } }) => setField("profileUrl", value)}
          />
          <s.Label>Email</s.Label>
          <s.Input
            name="email"
            value={email}
            type="email"
            onChange={({ target: { value } }) => setField("email", value)}
          />
          <s.Label>Password</s.Label>
          <s.Input
            name="password"
            value={password}
            type="password"
            onChange={({ target: { value } }) => setField("password", value)}
          />
          <s.Button onClick={handleLogin}>Sing in</s.Button>
          <s.Question>
            Already on LinkedIn?
            <s.Register to="/auth/login">Sign in</s.Register>
          </s.Question>
        </s.Form>
      </s.Wrapper>
    </s.Container>
  );
};

export default Login;
