class GeneratorCodeDisplay {
  constructor() {
    this.element = document.querySelector('[data-code-display="wrapper"]')
    Object.freeze(this)
  }
  get #isHover() {
    return this.element.matches(':hover')
  }
  update(code) {
    if(this.#isHover) return
    this.element.textContent = code ?? ''
  }
}

export const generatorCodeDisplay = new GeneratorCodeDisplay()