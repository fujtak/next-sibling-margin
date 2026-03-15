import { ComponentMain } from './ComponentMain.js';
import { ComponentNext } from './ComponentNext.js';

export class Code {
  constructor() {
    this.component = new ComponentMain()
    this.componentNextList = Array.from(document.querySelectorAll('[data-next="root"]')).map(element => new ComponentNext({ element }))
    this.value = this.componentNextList.map(next => `${this.component.selector.value} + ${next.selector.value} { margin-top: ${next.margin.value}px; }`).join('\n')
    Object.freeze(this)
  }
}