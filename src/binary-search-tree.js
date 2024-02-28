const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinarySearchTree {
  constructor() {
    this.root_node = null;
  }
  root() {
    if (this.root_node === null) {
      return null;
    } else {
      return this.root_node;
    }
  }

  add(data) {
    const newNode = new Node(data);
    if (this.root_node === null) {
      this.root_node = newNode;
    } else {
      this.addNode(this.root_node, newNode);
    }
  }
  addNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.addNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.addNode(root.right, newNode);
      }
    }
  }

  has(data) {
    if (this.root_node === null) {
      return false;
    } else {
      if (this.find(data) !== null) {
        return true;
      } else return false;
    }
  }

  find(data) {
    if (this.root_node === null) {
      return null;
    } else {
      if (data === this.root_node.data) {
        return this.root_node;
      } else if (data < this.root_node.data) {
        return this.search(this.root_node.left, data);
      } else {
        return this.search(this.root_node.right, data);
      }
    }
  }

  search(root, data) {
    if (root === null) {
      return null;
    } else {
      if (data === root.data) {
        return root;
      } else if (data < root.data) {
        return this.search(root.left, data);
      } else {
        return this.search(root.right, data);
      }
    }
  }

  remove(data) {
    this.root_node = this.deleteNode(this.root_node, data);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    console.log(root);
    console.log(root.data);
    if (value < root.data) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.data) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.data = this.minRoot(root.right);
      root.right = this.deleteNode(root.right, root.data);
    }
    return root;
  }

  min() {
    if (this.root_node === null) {
      return null;
    } else {
      if (!this.root_node.left) {
        return this.root_node.data;
      } else {
        return this.minRoot(this.root_node.left);
      }
    }
  }
  minRoot(root) {
    if (!root.left) {
      return root.data;
    } else {
      return this.minRoot(root.left);
    }
  }

  max() {
    if (this.root_node === null) {
      return null;
    } else {
      if (!this.root_node.right) {
        return this.root_node.data;
      } else {
        return this.maxRoot(this.root_node.right);
      }
    }
  }

  maxRoot(root) {
    if (!root.right) {
      return root.data;
    } else {
      return this.maxRoot(root.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
