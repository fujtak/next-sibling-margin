
class CSSGeneratorComponentSelector {
  constructor() {
    this.element = document.querySelector('[data-css-generator-component="selector"]')
    this.isVarid = this.element.validity.valid
    this.value = this.element.value
    Object.freeze(this)
  }
}

export class CSSGeneratorComponent {
  constructor() {
    this.selector = new CSSGeneratorComponentSelector()
    this.isVarid = this.selector.isVarid
    Object.freeze(this)
  }
}