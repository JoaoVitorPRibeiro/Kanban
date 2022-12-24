import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import GlobalStyle from "./styles/global";

import Board from "./components/Board"
import Header from "./components/Header";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
