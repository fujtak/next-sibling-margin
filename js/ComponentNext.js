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
    return stale.set(element, data)
  }
}

class ComponentNextMarginPc {
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
    return new ComponentNextMarginPc(element)
  }
  static forLoad(element, data) {
    const stale = new ComponentNextMarginPc(element)
    return stale.set(element, data)
  }
}

class ComponentNextMarginSp {
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
    return new ComponentNextMarginSp(element)
  }
  static forLoad(element, data) {
    const stale = new ComponentNextMarginSp(element)
    return stale.set(element, data)
  }
}

export class ComponentNext {
  constructor(element, selector, marginPc, marginSp) {
    if(!element) {
      console.error(`Invarid element: ${element}`)
      return
    }
    this.element = element
    this.selector = selector ?? new ComponentNextSelector(this.element.querySelector('[data-next="selector"]'))
    this.marginPc = marginPc ?? new ComponentNextMarginPc(this.element.querySelector('[data-next="marginPc"]'))
    this.marginSp = marginSp ?? new ComponentNextMarginSp(this.element.querySelector('[data-next="marginSp"]'))
    this.isVarid = this.selector.isVarid && this.marginPc.isVarid && this.marginSp.isVarid
    Object.freeze(this)
  }
  static forLoad(element, data) {
    const selector = ComponentNextSelector.forLoad(element.querySelector('[data-next="selector"]'), data.selector)
    const marginPc = ComponentNextMarginPc.forLoad(element.querySelector('[data-next="marginPc"]'), data.marginPc)
    const marginSp = ComponentNextMarginSp.forLoad(element.querySelector('[data-next="marginSp"]'), data.marginSp)
    return new ComponentNext(element, selector, marginPc, marginSp)
  }
}