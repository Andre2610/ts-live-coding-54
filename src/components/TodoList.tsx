import React, { useState } from "react";
import TodoItem from "./TodoItem";

type Item = {
  id: number;
  task: string;
  tags: string[];
  isDone: boolean;
};

export default function TodoList() {
  const [todoList, setTodoList] = useState<Item[]>([
    {
      id: 1,
      task: "Study",
      tags: ["React", "Typescript"],
      isDone: true,
    },
    {
      id: 2,
      task: "Prepare for the assessment",
      tags: ["React", "NodeJs"],
      isDone: false,
    },
    {
      id: 3,
      task: "Practice CSS",
      tags: ["Styling"],
      isDone: false,
    },
  ]);

  const toggleDone = (id: number) => {
    // console.log("Getting here", id);
    const updatedList = todoList.map((item) => {
      console.log(`is ${item.id} different from ${id}`, item.id !== id);
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });
    // console.log("updated List", updatedList);
    setTodoList(updatedList);
  };

  //   console.log("The Todo List", todoList);
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {todoList.map((item) => {
          const { id, task, isDone, tags } = item;

          return (
            <TodoItem key={id} item={item} toggleDone={() => toggleDone(id)} />
          );
        })}
      </ul>
    </div>
  );
}
