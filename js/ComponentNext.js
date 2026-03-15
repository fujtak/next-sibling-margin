class ComponentNextSelector {
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

class ComponentNextMargin {
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

export class ComponentNext {
  constructor({ element }) {
    if(!element) {
      console.error(`Invarid element: ${element}`)
      return
    }
    this.element = element
    this.selector = new ComponentNextSelector({ element: this.element.querySelector('[data-next="selector"]') })
    this.margin = new ComponentNextMargin({ element: this.element.querySelector('[data-next="margin"]') })
    this.isVarid = this.selector.isVarid && this.margin.isVarid
    Object.freeze(this)
  }
}