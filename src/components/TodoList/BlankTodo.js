import React from 'react';

function BlankTodo() {
  return (
    <div className="todo-list__blank">
      <img src="/img/no-todo.svg" className="icon-no-todo" alt="icon no todo" />
      <p className="fs-2 fw-bold">Opps, Todo Kosong!</p>
      <p className="fs-5 ">Silakan lakukan test terlebih dahulu</p>
    </div>
  );
}

export default BlankTodo;
