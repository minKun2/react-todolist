import React from "react";
import { MdFiberPin } from "react-icons/md";
import styled from "styled-components";
import TodoItem from "./TodoItem";
<<<<<<< HEAD
import { useTodoState } from "../TodoContext";

=======
import {useTodoState} from '../TodoContext';
 
>>>>>>> 7b5df6f65b63e7c3bdcaeeb052050f5c3631f459
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todosd = useTodoState();

  return (
    <TodoListBlock>
      {todosd.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
