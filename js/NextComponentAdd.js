import { cssGenerator } from "./CSSGenerator.js";

class NextComponentAdd {
  constructor() {
    this.wrapper = document.querySelector('[data-next-component-add="wrapper"]')
    this.template = document.querySelector('[data-next-component-add="template"]')
    this.trigger = document.querySelector('[data-next-component-add="trigger"]')
    this.cssGenerator = cssGenerator
    Object.freeze(this)
  }
  #add() {
    const clone = this.template.content.cloneNode(true)
    this.wrapper.appendChild(clone)
  }
  initialize() {
    this.cssGenerator.initialize()
    this.trigger.addEventListener('click', () => this.#add())
  }
}

export const nextComponentAdd = new NextComponentAdd()