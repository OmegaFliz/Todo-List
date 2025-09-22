import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const createList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".list-task").innerText = currentTask;

  return list;
};

export const addList = (text) => {
  // console.log(taskInput.value);
  if (taskInput.value.trim() !== "") {
    listGroup.append(createList(text));
    taskInput.value = null;
    // updateListCount();
  }
};

export const updateListCount = () => {
  const lists = document.querySelectorAll(".list");
  totalTask.innerText = lists.length;
};

export const updateDoneListCount = () => {
  const lists = document.querySelectorAll(".list input:checked");
  doneTask.innerText = lists.length;
};

export const deleteList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  // if (window.confirm("Are you sure delete?")) {
  // currentList.classList.add("animate__animated", "animate__hinge");
  //   currentList.addEventListener("animationend", () => {
  //     currentList.remove();
  //     // updateDoneListCount();
  //     // updateListCount();
  //   });
  // }

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentList.classList.add("animate__animated", "animate__hinge");
      currentList.addEventListener("animationend", () => {
        currentList.remove();
      });
    }
  });
 
};

export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  const listDoneCheck = currentList.querySelector(".list-done-check");

  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);

  const currentTask = listTask.innerText;
  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    "border border-slate-900 italic font-serif px-2 w-[150px] focus-visible:outline-none";
  newTaskInput.value = currentTask;
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");

  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  });
};

export const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");

  // updateDoneListCount();
  listTask.classList.toggle("line-through");
  // list.classList.add("duration-200");
  currentList.classList.toggle("opacity-30");
  currentList.classList.toggle("scale-90");
  listDoneCheck.checked
    ? listEditBtn.setAttribute("disabled", true)
    : listEditBtn.removeAttribute("disabled");
};
