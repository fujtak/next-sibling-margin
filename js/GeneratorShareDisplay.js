
class GeneratorShareDisplay {
  constructor() {
    this.root = document.querySelector('[data-display="root"]')
    this.element = document.querySelector('[data-share-display="wrapper"]')
    Object.freeze(this)
  }
  get #isHover() {
    return this.root.matches(':hover')
  }
  update(url) {
    if(this.#isHover) return
    const text = url ? url : ''
    this.element.textContent = text
  }
}

export const generatorShareDisplay = new GeneratorShareDisplay()