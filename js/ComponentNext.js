class ComponentNextSelector {
  constructor(element) {
    if(!element) {
      console.error(`Invarid element: ${element}`)
      return
    }
    this.element = element
    this.value = this.element.value
    this.isVarid = this.element.validity.valid
    Object.freeze(this)
  }
  set(element, value) {
    if(value) this.element.value = value
    return new ComponentNextSelector(element)
  }
  static forLoad(element, data) {
    const stale = new ComponentNextSelector(element)
    return stale.set(element, data.selector)
  }
}

class ComponentNextMargin {
  constructor(element) {
    if(!element) {
      console.error(`Invarid element: ${element}`)
      return
    }
    this.element = element
    this.value = this.element.value
    this.isVarid = this.element.validity.valid
    Object.freeze(this)
  }
  set(element, value) {
    if(value) this.element.value = value
    return new ComponentNextMargin(element)
  }
  static forLoad(element, data) {
    const stale = new ComponentNextMargin(element)
    return stale.set(element, data.margin)
  }
}

export class ComponentNext {
  constructor(element, selector, margin) {
    if(!element) {
      console.error(`Invarid element: ${element}`)
      return
    }
    this.element = element
    this.selector = selector ?? new ComponentNextSelector(this.element.querySelector('[data-next="selector"]'))
    this.margin = margin ?? new ComponentNextMargin(this.element.querySelector('[data-next="margin"]'))
    this.isVarid = this.selector.isVarid && this.margin.isVarid
    Object.freeze(this)
  }
  static forLoad(element, data) {
    const selector = ComponentNextSelector.forLoad(element.querySelector('[data-next="selector"]'), data)
    const margin = ComponentNextMargin.forLoad(element.querySelector('[data-next="margin"]'), data)
    return new ComponentNext(element, selector, margin)
  }
}