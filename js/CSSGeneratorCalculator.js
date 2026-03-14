import { CSSGeneratorComponent } from './CSSGeneratorComponent.js';
import { CSSGeneratorComponentNext } from './CSSGeneratorComponentNext.js';

export class CSSGeneratorCalculator {
  constructor() {
    this.component = new CSSGeneratorComponent()
    this.componentNextList = Array.from(document.querySelectorAll('[data-css-generator-next="root"]')).map(element => new CSSGeneratorComponentNext({ element }))
    this.isVarid = this.componentNextList.reduce((prev, current) => prev && current.isVarid, this.component.isVarid)
    this.code = this.componentNextList.map(next => `${this.component.selector.value} + ${next.selector.value} { margin-top: ${next.margin.value}px; }`).join('\n')
    Object.freeze(this)
  }
}