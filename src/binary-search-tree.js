const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }
  root() {

    return this._root;
  }

  add(data) {
    this._root = helper(this._root, data);

    function helper(node, value) {

      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = helper(node.left, value);
      } else {
        node.right = helper(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return findWithin(this._root, data);

    function findWithin(node, value) {

      if (!node) {
        return null;
      }
      if (node.data === value) {

        return node;
      }
      return value < node.data
        ? findWithin(node.left, value)
        : findWithin(node.right, value);
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
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

        let maxFromLeft = node.left; 
        while (maxFromLeft.right) {

          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data; 
        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if (!this._root) {
      return;
    }

    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this._root) {
      return;
    }

    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};