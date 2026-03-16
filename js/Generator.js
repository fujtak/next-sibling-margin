import { Varidator } from './Varidator.js';

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
  #code() {
    const varidator = new Varidator()
    if(!varidator.isVarid) {
      return ''
    }
    const code = new GeneratorCode()
    return code.value
  }
  #url() {
    const varidator = new Varidator()
    if(!varidator.isVarid) {
      return ''
    }
    const share = new GeneratorShare()
    return share.url
  }
  #display() {
    const code = this.#code()
    this.codeDisplay.update(code)
    const url = this.#url()
    this.shareDisplay.update(url)
  }
  initialize() {
    setInterval(() => this.#display(), 100)
  }
}

export const generator = new Generator()