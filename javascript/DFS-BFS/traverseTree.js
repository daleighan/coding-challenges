const chai = require('chai');
const assert = chai.assert;

// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// 
// Perform a breadth-first traversal on a binary tree without using recursion.
//
// Ex: for the following tree:
// 
//     1
//   /   \
//  2     4
//   \   /
//    3 5
// 
// output => [1,2,4,3,5]

const traverseTree = function(t) {

  const queue = [];
  const results = [];

  let currentNode = t;
  
  while (currentNode) {
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    results.push(currentNode.value);
    currentNode = queue.shift();
  }

  return results;

};

// tests
t = {
  'value': 1,
  'left': {
    'value': 2,
    'left': null,
    'right': {
      'value': 3,
      'left': null,
      'right': null
    }
  },
  'right': {
    'value': 4,
    'left': {
      'value': 5,
      'left': null,
      'right': null
    },
    'right': null
  }
};

it('should perform a BFS', function() {
  assert.deepEqual(traverseTree(t), [1, 2, 4, 3, 5]);
});
