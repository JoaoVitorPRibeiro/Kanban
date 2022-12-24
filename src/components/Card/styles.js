import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 15px;
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    border-radius: 2px;
  }

  ${({isDragging}) => isDragging && css`
    padding-top: 31px;
    background-color: transparent;
    border: 2px dashed rgba(0, 0, 0, 0.2);
    border-radius: 0;
    box-shadow: none;
    cursor: grabbing;

    header, p, img {
      opacity: 0;
    }
  `}
`;

export const Label = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${({color}) => color};
`;
