import { memo } from "react";

interface Card {
  title: string;
  genre: string;
  description: string;
}

function Card({ title, genre, description }: Card) {
  return (
    <div
      style={{
        borderRadius: "5px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "skyblue",
        }}
      ></div>
      <div>{title}</div>
      <div>{genre}</div>
      <div>{description}</div>
    </div>
  );
}
export default memo(Card);
