import { addBtnHandler, deleteAllHandler, doneAllHandler, listHandler, taskInputHandler } from "./handlers.js";
import { addBtn, deleteAll, doneAll, listGroup, taskInput } from "./selectors.js";


const listener = () => {
    addBtn.addEventListener("click", addBtnHandler);
    taskInput.addEventListener("keyup", taskInputHandler);
    listGroup.addEventListener("click", listHandler);
    deleteAll.addEventListener("click", deleteAllHandler);
    doneAll.addEventListener("click", doneAllHandler);
}

export default listener;