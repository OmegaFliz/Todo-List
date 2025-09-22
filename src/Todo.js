import listener from "./listener.js";
import observer from "./observer.js";

class Todo {
  init() {
    console.log("Todo App Start");
    listener();
    observer();
  }
}

export default Todo;
