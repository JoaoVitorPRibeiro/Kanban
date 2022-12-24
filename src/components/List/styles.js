import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  padding: 0 15px;
  flex: 0 0 320px;
  opacity: ${({done}) => done ? 0.6 : 1};

  &:not(:first-child) {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    height: 42px;
    justify-content: space-between;
    align-items: center;

    h2 {
      padding: 0 10px;
      font-size: 16px;
      font-weight: 500;
    }

    button {
      width: 42px;
      height: 42px;
      background-color: #6a5241;
      border: 0;
      border-radius: 18px;
      cursor: pointer;
    }
  }

  ul {
    height: calc(100% - 70px);
    margin-top: 30px;
    padding-right: 10px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;

      &-track, &-thumb {
        border-radius: 10px;
      }

      &-track {
        background-color: #cccccc;
      }

      &-thumb {
        background-color: #6a5241;
      }
    }
  }
`;
