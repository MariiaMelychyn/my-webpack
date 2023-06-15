
import refs from "./refs.js";
import {arrayName} from '../data/serverData.js';
import questionsTemplate from '../partials/arr.hbs';


export function submitHandler(e) {
    e.preventDefault();
    const value = refs.input.value;
  // console.log(value)
  arrayName.push(value);
  refs.input.value = "";
  // console.log(serverData)
  const markup = questionsTemplate(arrayName);
  // refs.root.insertAdjacentHTML("beforeend", markup);
  refs.root.innerHTML = markup;



const array = JSON.parse(localStorage.getItem("list"));
const arrayFromStorage = array ? array : [];
arrayFromStorage.push(value)
localStorage.setItem("list", JSON.stringify(arrayFromStorage) )
refs.input.value = "";
  }