const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.correct = null
  }

  root() {
    return this.correct;
  }

  add(data) {
    this.correct = addNode(this.correct, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }  

      if (data > node.data) {
        node.right = addNode(node.right, data);
      } else{
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.correct, data);

    function searchNode(node, data){
      if(!node) {
        return false;
      }
      if (node.data === data){
        return true;
      }
      if(data > node.data){
        return searchNode(node.right, data);
      } else return searchNode(node.left, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.correct = removeNode(this.correct, data);

    function removeNode(node, data){
      if (!node) {
        return null;
      }

      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left; 
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
  }
}

  min() {
    if (!this.correct){
      return;
    }
    let node = this.correct;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}