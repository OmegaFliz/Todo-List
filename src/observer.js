import { updateDoneListCount, updateListCount } from "./list.js";
import { listGroup } from "./selectors.js";

const observer = () => {
  const changes = () => {
    console.log("U changed!");
    updateListCount();
    updateDoneListCount();
  };

  const observerOptions = {
    attributes: true,
    childList: true,
    subtree: true,
  };
  const listGroupObserver = new MutationObserver(changes);
  listGroupObserver.observe(listGroup, observerOptions);
};

export default observer;
