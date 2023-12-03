//Stacks

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.buttom = null;
    this.length = 0;
  }

  peak() {
    if (this.length == 0) return "Stack is empty!";
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.buttom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) return "Stack is empty!";
    if (!this.top) {
      return null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty() {
    if (this.length == 0) return "Stack is empty!";
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(12);
myStack.push(15);
myStack.pop();

const response = myStack.peak();
console.log(response);
