class GeneratorCodeDisplay {
  constructor() {
    this.element = document.querySelector('[data-display="wrapper"]')
    Object.freeze(this)
  }
  update(code) {
    const text = code ? code : ''
    this.element.textContent = text
  }
}

export const generatorCodeDisplay = new GeneratorCodeDisplay()