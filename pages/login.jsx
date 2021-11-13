import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { app, auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
const Login = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title>Log in to access your account</Title>
      <LoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <LoginButton
        onClick={() => {
          signInWithPopup(auth, provider);
        }}
      >
        Login With Google
      </LoginButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
  flex flex-col h-screen w-screen bg-gray-200 p-4 gap-10
`;
const LoginButton = tw.button`
bg-black text-white text-center py-4  self-center w-full
`;
const UberLogo = tw.img`
 h-10 w-auto object-contain self-start
`;
const Title = tw.div`
text-5xl text-gray-500
`;
const LoginImage = tw.img`
object-contain h-1/2
`;
