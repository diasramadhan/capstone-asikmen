import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './TodoAsikmen.scss';
import useUpdateValue from '../../hooks/useUpdateValue';

function TodoAsikmen({ dataTaskTodo, dataOptionsTodo, userId }) {
  const [toDo, setToDo] = React.useState(dataOptionsTodo);
  const updateTodo = useUpdateValue();

  const markDone = async (id, todostatus) => {
    let finalStatus = false;
    if (todostatus === false) {
      finalStatus = true;
    }
    const path = `/todo/users/${userId}/${id}`;
    const value = {
      status: finalStatus,
    };
    await updateTodo.updateDoc(path, value, id);

    const newTasks = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTasks);
  };

  const completeTodo = (todos) => {
    const statusTodo = todos.filter((todo) => todo.status === false);
    return statusTodo.length;
  };

  return (
    <div className="todo-list">
      <div className="row">
        <div className="col">
          {toDo && completeTodo(toDo) === 0 ? (
            <p className="todo-ucapan">Selamat anda menyelesaikan todo dengan baik 🎉🎉🎉</p>
          ) : (
            <p className="todo-ucapan">Selesaikan todo dengan baik yaa, semangat ! 😊😊😊 </p>
          )}
          <img src="/img/todo-asikmen.svg" className="icon-no-todo" alt="icon no history" />
        </div>
        <div className="col">
          {toDo &&
            toDo
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((task, index) => (
                <div key={String(task.id)}>
                  <div className="col todoBg">
                    <div className={task.status ? 'done' : ''}>
                      <span className="todoNumber">{index + 1}</span>
                      <span className="todoText">{dataTaskTodo[index].todoText}</span>
                    </div>

                    <div className="iconsWrap">
                      <span onClick={(e) => markDone(task.id, task.status)} title="tombol selesai dan belum selesai">
                        <FaCheckCircle />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default TodoAsikmen;
