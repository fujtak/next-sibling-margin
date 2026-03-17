import { ComponentNextList } from './ComponentNextList.js';

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
  #onClick() {
    this.#add()
    const latest = ComponentNextList.for().at(-1)
    latest.addEventListener()
  }
  click() {
    this.trigger.click()
  }
  initialize() {
    this.trigger.addEventListener('click', () => this.#onClick())
  }
}

export const componentNextAdd = new ComponentNextAdd()