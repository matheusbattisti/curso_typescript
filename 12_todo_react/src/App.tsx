import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./App.module.css";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";

// interfaces
import { ITask } from "./interfaces/Task";

function App() {
  const [task, setTask] = useState<ITask[]>([]);
  const [title] = useState<string | undefined>(undefined);
  const [difficulty] = useState<number | undefined>(undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(task);
  };

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.todo_form}>
          <h2>O que você vai fazer?</h2>
          <form onSubmit={addTaskHandler}>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
              value={title}
              onChange={handleChange}
            />
            <input
              type="number"
              name="difficulty"
              placeholder="Dificuldade da tarefa (1 a 5)"
              value={difficulty}
              onChange={handleChange}
            />
            <input type="submit" value="Cadastrar" />
          </form>
        </div>
        <div className="todo-container">
          <h2>Suas tarefas:</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
