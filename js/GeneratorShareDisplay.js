
class GeneratorShareDisplay {
  constructor() {
    this.element = document.querySelector('[data-share-display="wrapper"]')
    Object.freeze(this)
  }
  update(url) {
    const text = url ? url : ''
    this.element.textContent = text
  }
}

export const generatorShareDisplay = new GeneratorShareDisplay()