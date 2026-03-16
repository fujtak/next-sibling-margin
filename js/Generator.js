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
  initialize() {
    setInterval(() => this.#display(), 100)
  }
}

export const generator = new Generator()