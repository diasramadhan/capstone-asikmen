import React from 'react';
import BlankTodo from './BlankTodo';
import TodoAsikmen from './TodoAsikmen';
import './TodoList.scss';

function TodoList({ dataTaskTodo, dataOptionsTodo, userId }) {
  return (
    <div className="todo-list__wrapper">
      {
        dataOptionsTodo == null ? (
          <BlankTodo />
        ) : (
          <TodoAsikmen
            dataTaskTodo={dataTaskTodo}
            dataOptionsTodo={dataOptionsTodo}
            userId={userId}
          />
        )
      }
    </div>
  );
}

export default TodoList;
