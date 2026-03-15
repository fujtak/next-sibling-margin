import { params } from "./Params.js";
import { ComponentNext } from './ComponentNext.js';
import { componentNextAdd } from "./ComponentNextAdd.js";

export class ComponentNextList {
  static for() {
    return Array.from(document.querySelectorAll('[data-next="root"]')).map(element => new ComponentNext(element))
  }
  static forLoad() {
    const paramList = params.nextList
    const array = []
    for(let i = 0; i < paramList.length; ++i) {
      componentNextAdd.click()
      const element = document.querySelectorAll('[data-next="root"]')[i]
      const key = paramList[i]
      const instance = ComponentNext.forLoad(element, key)
      array.push(instance)
    }
    return array
  }
}