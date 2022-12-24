import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { Container } from "./styles";
import Card from "../Card";

export default function List({data, index: listIndex}) {
  const { move, lists } = useContext(BoardContext);
  const { title, cards, done, creatable } = data;

  const [_, dropRef] = useDrop({
    accept: "CARD",
    drop(item) {
      const fromListIndex = item.listIndex;
      const toListIndex = listIndex;

      if(fromListIndex === toListIndex) {
        return;
      }

      const draggedCardIndex = item.index;
      const toListLastIndex = lists[listIndex].cards.length;

      move(fromListIndex, toListIndex, draggedCardIndex, toListLastIndex);

      item.index = toListLastIndex;
      item.listIndex = toListIndex;
    }
  })

  return (
    <Container done={done} ref={dropRef}>
      <header>
        <h2>{title}</h2>
        {creatable && (
          <button type="button">
            <MdAdd size={24} color="#ffffff" />
          </button>
        )}
      </header>
      <ul>
        {
          cards.map((card, index) => (
            <li key={card.id}>
              <Card data={card} index={index} listIndex={listIndex} />
            </li>
          ))
        }
      </ul>
    </Container>
  )
}
