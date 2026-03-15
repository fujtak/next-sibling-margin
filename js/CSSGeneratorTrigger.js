import { CSSGeneratorVaridator } from './CSSGeneratorVaridator.js';
import { CSSGeneratorCode } from './CSSGeneratorCode.js';
import { cssGeneratorDisplay } from './CSSGeneratorDisplay.js';

class CSSGeneratorTrigger {
  constructor() {
    this.element = document.querySelector('[data-css-generator="trigger"]')
    this.display = cssGeneratorDisplay
    Object.freeze(this)
  }
  #generate() {
    const varidator = new CSSGeneratorVaridator()
    if(!varidator.isVarid) {
      window.alert('Error: Please check your inputs.')
      return
    }
    const code = new CSSGeneratorCode()
    this.display.update(code.value)
  }
  #enable() {
    this.element.removeAttribute('disabled')
  }
  #disable() {
    this.element.setAttribute('disabled', 'valid')
    this.display.clear()
  }
  #update() {
    const varidator = new CSSGeneratorVaridator()
    varidator.isVarid ? this.#enable() : this.#disable()
  }
  initialize() {
    this.element.addEventListener('click', () => this.#generate())
    setInterval(() => this.#update(), 300)
  }
}

export const cssGeneratorTrigger = new CSSGeneratorTrigger()