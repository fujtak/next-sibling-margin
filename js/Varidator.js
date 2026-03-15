import { ComponentMain } from './ComponentMain.js';
import { ComponentNext } from './ComponentNext.js';

export class Varidator {
  constructor() {
    this.main = new ComponentMain()
    this.nextList = Array.from(document.querySelectorAll('[data-next="root"]')).map(element => new ComponentNext({ element }))
    this.isVarid = (this.nextList.length > 0) && (this.nextList.reduce((prev, current) => prev && current.isVarid, this.main.isVarid))
    Object.freeze(this)
  }
}