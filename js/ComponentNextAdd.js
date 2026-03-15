
class ComponentNextAdd {
  constructor() {
    this.wrapper = document.querySelector('[data-next-component-add="wrapper"]')
    this.template = document.querySelector('[data-next-component-add="template"]')
    this.trigger = document.querySelector('[data-next-component-add="trigger"]')
    Object.freeze(this)
  }
  #add() {
    const clone = this.template.content.cloneNode(true)
    this.wrapper.appendChild(clone)
  }
  initialize() {
    this.trigger.addEventListener('click', () => this.#add())
  }
}

export const componentNextAdd = new ComponentNextAdd()