class CSSGeneratorComponentNextSelector {
  constructor({ element }) {
    if(!element) {
      console.error(`Invarid element: ${element}`)
      return
    }
    this.element = element
    this.value = this.element.value
    this.isVarid = this.element.validity.valid
    Object.freeze(this)
  }
}

class CSSGeneratorComponentNextMargin {
  constructor({ element }) {
    if(!element) {
      console.error(`Invarid element: ${element}`)
      return
    }
    this.element = element
    this.value = this.element.value
    this.isVarid = this.element.validity.valid
    Object.freeze(this)
  }
}

export class CSSGeneratorComponentNext {
  constructor({ element }) {
    if(!element) {
      console.error(`Invarid element: ${element}`)
      return
    }
    this.element = element
    this.selector = new CSSGeneratorComponentNextSelector({ element: this.element.querySelector('[data-css-generator-next="selector"]') })
    this.margin = new CSSGeneratorComponentNextMargin({ element: this.element.querySelector('[data-css-generator-next="margin"]') })
    this.isVarid = this.selector.isVarid && this.margin.isVarid
    Object.freeze(this)
  }
}