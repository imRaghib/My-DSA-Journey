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

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    const currentNode = this.root;
    const parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left == null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            } else {
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while (leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;

              if (parentNode === null) {
                this.root = leftmost;
              } else {
                if (currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if (currentNode.value > parentNode.right) {
                  parentNode.right = leftmost;
                }
              }
            }
          }
        }
      }
    }
  }
}

//need to learn how to code REMOVE function

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(170));
const response = JSON.stringify(tranverse(tree.root));
console.log(response);

function tranverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : tranverse(node.left);
  tree.right = node.right === null ? null : tranverse(node.right);
  return tree;
}
