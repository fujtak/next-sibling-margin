class Display {
  constructor() {
    this.element = document.querySelector('[data-display="wrapper"]')
    Object.freeze(this)
  }
  clear() {
    this.element.textContent = ''
  }
  update(text) {
    this.element.textContent = text
  }
}

export const display = new Display()