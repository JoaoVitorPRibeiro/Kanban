import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { MdInsertEmoticon } from "react-icons/md";

import BoardContext from "../Board/context";

import { Container, Label } from "./styles";

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const { labels, content, user: avatarUrl } = data;
  const renderLabels = labels.map(label => (
    <Label key={data.id} color={label} />
  ))

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [_, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const fromListIndex = item.listIndex;
      const toListIndex = listIndex;
      const draggedIndex = item.index;
      const targetIndex = index;

      if(fromListIndex === toListIndex && draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetVerticalCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if(draggedIndex < targetIndex && draggedTop < targetVerticalCenter) {
        return;
      }

      if(draggedIndex > targetIndex && draggedTop > targetVerticalCenter) {
        return;
      }

      move(fromListIndex, toListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = toListIndex;
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {renderLabels}
      </header>
      <p>{content}</p>
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt="user avatar"
          title="Nome do responsável pelo card"
        />
      )}
    </Container>
  )
}
