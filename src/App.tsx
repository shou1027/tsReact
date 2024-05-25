import { dummyTodoList } from './data/dummyTodoList';
import { TodoList } from './components/TodoList';
import { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState(dummyTodoList);

  const changeCompleted = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    });
  };

  const addTodo = (title: string) => {
    setTodoList((prevTodoList) => {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };

      return [newTodo, ...prevTodoList];
    });
  };

  const deleteTodo = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => {
        return todo.id != id;
      });
    });
  };

  return (
    <main className="mx-auto mt-10 max-w-xl space-y-10">
      <h1 className=" text-4xl text-center">Todoアプリ</h1>
      <AddTodoForm addTodo={addTodo} />
      <div className="rounded bg-slate-200 p-5">
        <TodoList
          todoList={todoList}
          changeCompleted={changeCompleted}
          deleteTodo={deleteTodo}
        />
      </div>
    </main>
  );
}

export default App;
