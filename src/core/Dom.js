class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if(typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.innerHTML.trim()
  }

  text(string) {
    if(typeof string === 'string') {
      this.$el.textContent = string
      return this
    }
    return this.$el.textContent.trim()
  }

  attr(name, string) {
    if(typeof string === 'string') {
      this.$el.setAttribute(name, string)
      return this
    }
    return this.$el.getAttribute(name)
  }

  clear() {
    this.html('')
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if(Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if(classes) {
    el.classList.add(classes)
  }
  return $(el)
}