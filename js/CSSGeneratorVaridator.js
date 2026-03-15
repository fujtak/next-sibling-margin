import { CSSGeneratorComponent } from './CSSGeneratorComponent.js';
import { CSSGeneratorComponentNext } from './CSSGeneratorComponentNext.js';

export class CSSGeneratorVaridator {
  constructor() {
    this.component = new CSSGeneratorComponent()
    this.componentNextList = Array.from(document.querySelectorAll('[data-css-generator-next="root"]')).map(element => new CSSGeneratorComponentNext({ element }))
    this.isVarid = (this.componentNextList.length > 0) && (this.componentNextList.reduce((prev, current) => prev && current.isVarid, this.component.isVarid))
    Object.freeze(this)
  }
}