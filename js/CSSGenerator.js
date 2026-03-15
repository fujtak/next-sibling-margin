import { cssGeneratorTrigger } from "./CSSGeneratorTrigger.js";

class CSSGenerator {
  constructor() {
    this.trigger = cssGeneratorTrigger
    Object.freeze(this)
  }
  initialize() {
    this.trigger.initialize()
  }
}

export const cssGenerator = new CSSGenerator()