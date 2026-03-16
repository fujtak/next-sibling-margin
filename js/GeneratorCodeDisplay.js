class GeneratorCodeDisplay {
  constructor() {
    this.root = document.querySelector('[data-display="root"]')
    this.element = document.querySelector('[data-code-display="wrapper"]')
    Object.freeze(this)
  }
  get #isHover() {
    return this.root.matches(':hover')
  }
  update(code) {
    if(this.#isHover) return
    const text = code ? code : ''
    this.element.textContent = text
  }
}

export const generatorCodeDisplay = new GeneratorCodeDisplay()