import React from 'react';
import { TbCheckbox } from 'react-icons/tb';
import BackButton from '../components/BackButton/BackButton';
import TodoList from '../components/TodoList/TodoList';
import AuthContext from '../contexts/AuthContext';
import Loading from '../components/Loading/Loading';
import useGetValue from '../hooks/useGetValue';

function TodoPage() {
  const currentUser = React.useContext(AuthContext);
  const taskTodo = useGetValue('todo/task');
  const optionsTodo = useGetValue(`todo/users/${currentUser.uid}`);
  const loading = taskTodo.isLoading || optionsTodo.isLoading;
  if (loading) {
    return (<Loading />);
  }

  return (
    <div className="todo-container">
      <BackButton />
      <h3 className="todo-title">
        <TbCheckbox className="todo-icon" />
        Todolist
      </h3>
      { optionsTodo.snapshot == null ? (
        <TodoList dataTodo={null} />
      ) : (
        <TodoList
          dataTaskTodo={Object.values(taskTodo.snapshot)}
          dataOptionsTodo={Object.values(optionsTodo.snapshot)}
          userId={currentUser.uid}
        />
      )}
    </div>
  );
}

export default TodoPage;
