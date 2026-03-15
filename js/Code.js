import { ComponentMain } from './ComponentMain.js';
import { ComponentNextList } from './ComponentNextList.js';

export class Code {
  constructor() {
    this.component = new ComponentMain()
    this.componentNextList = ComponentNextList.for()
    this.value = this.componentNextList.map(next => `${this.component.selector.value} + ${next.selector.value} { margin-top: ${next.margin.value}px; }`).join('\n')
    Object.freeze(this)
  }
}