import React from 'react';
import BlankTodo from './BlankTodo';
import TodoAsikmen from './TodoAsikmen';
import './TodoList.scss';

function TodoList({ dataTodo }) {
  return (
    <div className="todo-list__wrapper">
      {
        dataTodo == null ? <BlankTodo /> : <TodoAsikmen dataTodo={dataTodo} />
      }
    </div>
  );
}

export default TodoList;
