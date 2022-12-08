import React from 'react';
import { TbCheckbox } from 'react-icons/tb';
import BackButton from '../components/BackButton/BackButton';
import TodoList from '../components/TodoList/TodoList';
import AuthContext from '../contexts/AuthContext';
import Loading from '../components/Loading/Loading';
import useGetValue from '../hooks/useGetValue';

function TodoPage() {
  const currentUser = React.useContext(AuthContext);
  const history = useGetValue(`history/${currentUser.uid}`);
  const todo = useGetValue('todo');

  const loading = history.isLoading || todo.isLoading;

  if (loading) {
    return (<Loading />);
  }

  const dataTodo = Object.values(todo.snapshot);

  return (
    <div className="todo-container">
      <BackButton />
      <h3 className="todo-title">
        <TbCheckbox className="todo-icon" />
        Todolist
      </h3>
      { history.snapshot == null ? (
        <TodoList dataTodo={null} />
      ) : (
        <TodoList dataTodo={dataTodo} />
      )}
    </div>
  );
}

export default TodoPage;
