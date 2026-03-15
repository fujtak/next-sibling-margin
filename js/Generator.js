import { Varidator } from './Varidator.js';
import { ShareURL } from './ShareURL.js';

import { GeneratorCode } from './GeneratorCode.js';
import { generatorDisplay } from './GeneratorDisplay.js';

class Generator {
  constructor() {
    this.element = document.querySelector('[data-generator="trigger"]')
    this.display = generatorDisplay
    Object.freeze(this)
  }
  #generate() {
    const varidator = new Varidator()
    if(!varidator.isVarid) {
      window.alert('Error: Please check your inputs.')
      return
    }
    const code = new GeneratorCode()
    this.display.update(code.value)
    const share = new ShareURL()
    share.display()
  }
  #enable() {
    this.element.removeAttribute('disabled')
  }
  #disable() {
    this.element.setAttribute('disabled', 'true')
    this.display.clear()
    const share = new ShareURL()
    share.clear()
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