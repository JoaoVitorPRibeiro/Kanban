import React, { useState } from 'react'
import produce from "immer";

import { loadLists } from "../../services/api";

import BoardContext from "./context";
import { Container } from "./styles";
import List from "../List";

export default function Board() {
  const data = loadLists();
  const [lists, setLists] = useState(data);

  function move(fromListIndex, toListIndex, fromCardIndex, toCardIndex) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromListIndex].cards[fromCardIndex];
      draft[fromListIndex].cards.splice(fromCardIndex, 1);
      draft[toListIndex].cards.splice(toCardIndex, 0, dragged);
    }));
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} data={list} index={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  )
}
