import { ComponentNext } from './ComponentNext.js';

export class ComponentNextList {
  static for() {
    return Array.from(document.querySelectorAll('[data-next="root"]')).map(element => new ComponentNext({ element }))
  }
}