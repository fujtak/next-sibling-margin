import { ComponentMain } from './ComponentMain.js';
import { ComponentNextList } from './ComponentNextList.js'

export class GeneratorShare {
  constructor() {
    this.main = new ComponentMain()
    this.nextList = ComponentNextList.for()
    this.isVarid = (this.nextList.length > 0) && (this.nextList.reduce((prev, current) => prev && current.isVarid, this.main.isVarid))
    Object.freeze(this)
  }
  get url() {
    if(!this.isVarid) return
    const url = new URL(document.location)
    const params = url.searchParams
    params.append('main-selector', this.main.selector.value)
    for(let i = 0; i < this.nextList.length; ++i) {
      const next = this.nextList[i]
      params.append(`next${i}-selector`, next.selector.value)
      params.append(`next${i}-marginPc`, next.marginPc.value)
      params.append(`next${i}-marginSp`, next.marginSp.value)
    }
    return url
  }
}