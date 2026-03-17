import { GeneratorCode } from './GeneratorCode.js';
import { generatorCodeDisplay } from './GeneratorCodeDisplay.js';
import { GeneratorShare } from './GeneratorShare.js';
import { generatorShareDisplay } from './GeneratorShareDisplay.js';

class Generator {
  constructor() {
    this.codeDisplay = generatorCodeDisplay
    this.shareDisplay = generatorShareDisplay
    Object.freeze(this)
  }
  #display() {
    const code = new GeneratorCode()
    this.codeDisplay.update(code.value)
    const share = new GeneratorShare()
    this.shareDisplay.update(share.url)
  }
  loop() {
    this.#display()
    requestAnimationFrame(() => this.loop())
  }
}

export const generator = new Generator()