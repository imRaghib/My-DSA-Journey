class Stack {
  constructor() {
    this.array = [];
  }

  peak() {
    return this.array[this.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
  isEmpty() {
    if (this.array.length == 0) return "Stack is empty!";
  }
}

class Queue {
  constructor() {
    this.array = [];
  }
  peek() {
    if (this.array.length == 0) return "Queue is empty!";
    return this.array[0];
  }
  enqueue(value) {}
  dequeue() {}
  isEmpty() {}
}

//not immplemented
