import { ComponentMain } from './ComponentMain.js';
import { ComponentNextList } from './ComponentNextList.js'

export class ShareURL {
  constructor() {
    this.element = document.querySelector('[data-share-display="wrapper"]')
    this.main = new ComponentMain()
    this.nextList = ComponentNextList.for()
    Object.freeze(this)
  }
  #generate() {
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
  clear() {
    this.element.textContent = ''
  }
  display() {
    this.element.textContent = this.#generate()
  }
}