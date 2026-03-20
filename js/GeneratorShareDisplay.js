
class GeneratorShareDisplay {
  constructor() {
    this.element = document.querySelector('[data-share-display="wrapper"]')
    Object.freeze(this)
  }
  update(url) {
    if(url === this.element.textContent) return
    this.element.textContent = url ?? ''
  }
}

export const generatorShareDisplay = new GeneratorShareDisplay()