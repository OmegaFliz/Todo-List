import { addList, deleteList, doneList, editList } from "./list.js";


export const listHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(list.id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(list.id);
  }
  if (event.target.classList.contains("list-done-check")) {
    doneList(list.id);
  }
};

export const addBtnHandler = () => {
  addList(taskInput.value);
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    addList(taskInput.value);
  }
};

export const deleteAllHandler = () => {
  if (confirm("Are u sure what to delete All !!")) {
    const allList = listGroup.querySelectorAll(".list");
    allList.forEach((list) => {
      list.remove();
    });
  }
};

export const doneAllHandler = () => {
  const allList = listGroup.querySelectorAll(".list");
  allList.forEach((list) => {
    list.querySelector(".list-done-check").checked = true;
    doneList(list.id);
  });
};