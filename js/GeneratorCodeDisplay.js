class GeneratorCodeDisplay {
  constructor() {
    this.element = document.querySelector('[data-code-display="wrapper"]')
    Object.freeze(this)
  }
  update(code) {
    if(code === this.element.textContent) return
    this.element.textContent = code ?? ''
  }
}

export const generatorCodeDisplay = new GeneratorCodeDisplay()