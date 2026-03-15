import { ComponentMain } from './ComponentMain.js';
import { ComponentNextList } from './ComponentNextList.js'

export class Varidator {
  constructor() {
    this.main = new ComponentMain()
    this.nextList = ComponentNextList.for()
    this.isVarid = (this.nextList.length > 0) && (this.nextList.reduce((prev, current) => prev && current.isVarid, this.main.isVarid))
    Object.freeze(this)
  }
}