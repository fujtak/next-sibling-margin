
class ComponentMainSelector {
  constructor() {
    this.element = document.querySelector('[data-component-main="selector"]')
    this.isVarid = this.element.validity.valid
    this.value = this.element.value
    Object.freeze(this)
  }
}

export class ComponentMain {
  constructor() {
    this.selector = new ComponentMainSelector()
    this.isVarid = this.selector.isVarid
    Object.freeze(this)
  }
}