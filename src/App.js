import Todo from "./componenets/Todo";
import Modal from "./componenets/Modal";
import Backdrop from "./componenets/Backdrop";
function App() {
  return (
    <div>
      <h1>Todos</h1>
      <Todo text="Item 1" />
      <Todo text="Item 2" />
      <Todo text="Item 3" />
      <Todo text="Item 4" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
