/*

Level: 2^Level
Level 0: 2^0 = 0
Level 1: 2^1 = 1

Number of nodes  = 2^h - 1
or
log node = height



*/

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  lookup(value) {}
  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(170);
tree.insert(15);
tree.insert(1);
const response = JSON.stringify(tranverse(tree.root));
console.log(response);

function tranverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : tranverse(node.left);
  tree.right = node.right === null ? null : tranverse(node.right);
  return tree;
}
