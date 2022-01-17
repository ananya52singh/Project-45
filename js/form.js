class Form{
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
  }
  setElementsPosition() {
    this.input.position(width / 2 - 900, height / 2 - 1000);
  }
  display() {
    this.setElementsPosition();
  }
}