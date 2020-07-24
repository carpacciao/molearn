export default class Center {

  constructor () {
    this.state = false
  }

  // declare as inline tool
  static get isInline () {
    return true
  }

  // Render the button inside the inline tool menu
  render () {
    const button = document.createElement('button')
    button.type = 'button'
    button.innerHTML = require('./icon.svg?raw')
    button.classList.add('ce-inline-tool')

    return button
  }

  // action when button clicked
  surround (range) {
    if (this.state) {
        // If center is already applied, do nothing for now
        return;
    }
    console.log(range)
    const selectedText = range.extractContents();


    const div = document.createElement('DIV')

    div.setAttribute('style', 'text-align: center !important;')
    div.appendChild(selectedText)
    range.insertNode(div)
  }

  checkState(selection) {
    const text = selection.anchorNode;
    
    if (!text) {
      return;
    }
    
    const anchorElement = text instanceof Element ? text : text.parentElement;
  
    this.state = !!anchorElement.closest('CENTER');
  }

  // Apply center tag on save
  static get sanitize() {
    return {
      // keep attributes (like style generated in surround)
      div: true
    }
  }
}
