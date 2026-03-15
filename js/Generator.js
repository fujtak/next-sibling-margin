import { Varidator } from './Varidator.js';
import { Code } from './Code.js';
import { display } from './Display.js';

class Generator {
  constructor() {
    this.element = document.querySelector('[data-generator="trigger"]')
    this.display = display
    Object.freeze(this)
  }
  #generate() {
    const varidator = new Varidator()
    if(!varidator.isVarid) {
      window.alert('Error: Please check your inputs.')
      return
    }
    const code = new Code()
    this.display.update(code.value)
  }
  #enable() {
    this.element.removeAttribute('disabled')
  }
  #disable() {
    this.element.setAttribute('disabled', 'true')
    this.display.clear()
  }
  #update() {
    const varidator = new Varidator()
    varidator.isVarid ? this.#enable() : this.#disable()
  }
  initialize() {
    this.element.addEventListener('click', () => this.#generate())
    setInterval(() => this.#update(), 100)
  }
}

export const generator = new Generator()