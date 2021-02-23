import {$} from '@/core/Dom'

export class Components {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    this.components.forEach(Component => {
      const component = new Component()
      console.log(component.toHTML())
      this.$el.append(component.toHTML())
    })
  }

  render() {
    this.getRoot()
  }
}
