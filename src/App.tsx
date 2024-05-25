import { dummyTodoList } from './data/dummyTodoList';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <main className="mx-auto mt-10 max-w-xl space-y-10">
      <h1 className=" text-4xl text-center">Todoアプリ</h1>
      <div className="rounded bg-slate-200 p-5">
        <TodoList todoList={dummyTodoList} />
      </div>
    </main>
  );
}

export default App;
