
import { params } from "./Params.js";

class ComponentMainSelector {
  constructor() {
    this.element = document.querySelector('[data-component-main="selector"]')
    this.isVarid = this.element.validity.valid
    this.value = this.element.value
    Object.freeze(this)
  }
  set(value) {
    if(value) this.element.value = value
    return new ComponentMainSelector()
  }
  static forLoad() {
    const stale = new ComponentMainSelector()
    if(!params.main) return stale
    const value = params.main.selector
    return stale.set(value)
  }
}

export class ComponentMain {
  constructor(selector) {
    this.selector = selector ?? new ComponentMainSelector()
    this.isVarid = this.selector.isVarid
    Object.freeze(this)
  }
  static forLoad() {
    const selector = ComponentMainSelector.forLoad()
    return new ComponentMain(selector)
  }
}