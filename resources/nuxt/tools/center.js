class Center {

  static get isInline() {
      return true;
  }

  constructor() {
      this.button = null;
      this.state = false;
  }

  render() {
      this.button = document.createElement('button');
      this.button.type = 'button';
      this.button.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z" /></svg>';
      this.button.classList.add('ce-inline-tool')

      return this.button;
  }

  surround(range) {
      if (this.state) {
          // If highlights is already applied, do nothing for now
          return;
      }

      const selectedText = range.extractContents();

      // Create MARK element
      const mark = document.createElement('CENTER');

      // Append to the MARK element selected TextNode
      mark.appendChild(selectedText);

      // Insert new element
      range.insertNode(mark);
  }

 
  checkState(selection) {
      const text = selection.anchorNode;

      if (!text) {
          return;
      }

      const anchorElement = text instanceof Element ? text : text.parentElement;
    
      this.state = !!anchorElement.closest('CENTER');
  }

  static get sanitize() {
    return {
      center: {}
    }
  }
}

export default Center