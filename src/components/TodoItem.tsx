import React from "react";

type Item = { id: number; task: string; tags: string[]; isDone: boolean };

type Props = {
  item: Item;
  toggleDone: () => void;
};

export default function TodoItem(props: Props) {
  const { task, isDone, tags } = props.item;
  const { toggleDone } = props;

  return (
    <li>
      <p
        style={{
          textDecoration: isDone ? "line-through" : "",
        }}
      >
        [{isDone ? "√" : " "}] - {task} (
        {tags.map((tag, index) => (
          <span key={index}>{tag} </span>
        ))}
        )
      </p>
      <button onClick={toggleDone}>{isDone ? "Undo" : "Complete"}</button>
    </li>
  );
}
