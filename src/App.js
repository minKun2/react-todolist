<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1fddddb7ec7a88a713deedefbb17caeddfb3774c
import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background:  #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>안녕하세요. todolist입니다.</TodoTemplate>
    </>
  );
}