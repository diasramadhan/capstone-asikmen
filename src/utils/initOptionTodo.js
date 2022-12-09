const initialOptionTodo = async (createResult, pathTodo) => {
  const valueTodo = [
    {
      id: 0,
      status: false,
    },
    {
      id: 1,
      status: false,
    },
    {
      id: 2,
      status: false,
    },
    {
      id: 3,
      status: false,
    },
    {
      id: 4,
      status: false,
    },
  ];
  await createResult.pushValue(pathTodo, valueTodo, '');
};

export default initialOptionTodo;
