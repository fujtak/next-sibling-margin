
class Params {
  constructor() {
    this.params = new URL(document.location).searchParams
    Object.freeze(this)
  }
  get #data() {
    const array = []
    for(const [key, value] of this.params.entries()) {
      const id =  key.split('-')[0]
      const variety =  key.split('-')[1]
      const already = array.find(item => item.id === id)
      if(already) {
        already[variety] = value
        continue
      }
      const object = {}
      object.id = id
      object[variety] = value
      array.push(object)
    }
    return array
  }
  get main() {
    return this.#data.find(item => item.id === 'main')
  }
  get nextList() {
    return this.#data.filter(item => item.id.startsWith('next'))
  }
}

export const params = new Params