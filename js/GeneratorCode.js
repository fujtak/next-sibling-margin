import { ComponentMain } from './ComponentMain.js';
import { ComponentNextList } from './ComponentNextList.js';

const pc = (line) => `  @include g.media-pc() {\n    ${line}\n  }\n`
const sp = (line) => `  @include g.media-sp() {\n    ${line}\n  }\n`

export class GeneratorCode {
  constructor() {
    this.main = new ComponentMain()
    this.nextList = ComponentNextList.for()
    this.isVarid = (this.nextList.length > 0) && (this.nextList.reduce((prev, current) => prev && current.isVarid, this.main.isVarid))
    Object.freeze(this)
  }
  get value() {
    if(!this.isVarid) return
    const lines = this.nextList.map(next => {
      const block = (content) => `${this.main.selector.value} + ${next.selector.value} {\n${content}}`
      const linePc = pc(`margin-top: ${next.marginPc.value}px;`)
      const lineSp = sp(`margin-top: ${next.marginSp.value}px;`)
      return block(linePc + lineSp)
    })
    return lines.join('\n')
  }
}