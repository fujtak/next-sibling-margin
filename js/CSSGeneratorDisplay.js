class CSSGeneratorDisplay {
  constructor() {
    this.element = document.querySelector('[data-css-generator="display"]')
    Object.freeze(this)
  }
  clear() {
    this.element.textContent = ''
  }
  update(text) {
    this.element.textContent = text
  }
}

export const cssGeneratorDisplay = new CSSGeneratorDisplay()