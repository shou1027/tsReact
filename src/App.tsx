import { dummyTodoList } from './data/dummyTodoList';
import { TodoList } from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState(dummyTodoList);

  const changeCompleted = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      });
    });
  };

  return (
    <main className="mx-auto mt-10 max-w-xl space-y-10">
      <h1 className=" text-4xl text-center">Todoアプリ</h1>
      <div className="rounded bg-slate-200 p-5">
        <TodoList todoList={todoList} changeCompleted={changeCompleted} />
      </div>
    </main>
  );
}

export default App;
