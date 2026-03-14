import { CSSGeneratorCalculator } from './CSSGeneratorCalculator.js';

class CSSGenerator {
  constructor() {
    this.trigger = document.querySelector('[data-css-generator="trigger"]')
    this.display = document.querySelector('[data-css-generator="display"]')
    Object.freeze(this)
  }
  #generate() {
    const calculator = new CSSGeneratorCalculator()
    if(!calculator.isVarid) {
      window.alert('Error: Please check your inputs.')
      this.display.textContent = ''
      return
    }
    this.display.textContent = calculator.code
  }
  addEventListener() {
    this.trigger.addEventListener('click', () => this.#generate())
  }
}

export const cssGenerator = new CSSGenerator()