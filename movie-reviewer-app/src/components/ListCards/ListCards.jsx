import React from "react";
import { useSelector } from "react-redux";

const boards = [
  {
    name: "Board1", //CONTAINS
    description: "description board1",
  },
  {
    name: "Borde",
    description: "description sadsd",
  },
  {
    name: "nuevo bord",
    description: "description qweqwe",
  },
  {
    name: "bicicleta",
    description: "description ghjkl",
  },
];

function ListCards(props) {
  const searchText = useSelector((state) => state.searchText.value);
  const toShowboards = boards.filter((b) =>
    b.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <h1>List Cards</h1>
      {toShowboards.map((board) => {
        return <h3>{board.name}</h3>;
      })}
    </div>
  );
}

export default ListCards;
