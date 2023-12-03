class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.length == 0) return "Queue is empty!";
    return this.first;
  }
  enqueue(value) {
    const newNode = Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  isEmpty() {
    if (this.length == 0) return "Queue is empty!";
  }
}

const myQueue = new Queue();
myQueue.enqueue(12);
myQueue.enqueue(16);
myQueue.enqueue(19);
