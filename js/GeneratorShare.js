import { ComponentMain } from './ComponentMain.js';
import { ComponentNextList } from './ComponentNextList.js'

export class GeneratorShare {
  constructor() {
    this.main = new ComponentMain()
    this.nextList = ComponentNextList.for()
    Object.freeze(this)
  }
  get url() {
    const url = new URL(document.location)
    const params = url.searchParams
    params.append('main-selector', this.main.selector.value)
    for(let i = 0; i < this.nextList.length; ++i) {
      const next = this.nextList[i]
      params.append(`next${i}-selector`, next.selector.value)
      params.append(`next${i}-margin`, next.margin.value)
    }
    return url
  }
}