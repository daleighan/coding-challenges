const chai = require('chai');
const assert = chai.assert;

/*                                      
                       _   _             
                      | | (_)            
  __ _ _   _  ___  ___| |_ _  ___  _ __  
 / _` | | | |/ _ \/ __| __| |/ _ \| '_ \ 
| (_| | |_| |  __/\__ \ |_| | (_) | | | |
 \__, |\__,_|\___||___/\__|_|\___/|_| |_|
    | |                                  
    |_|       
 
Perform a breadth-first traversal on a binary tree.

Definition for binary tree:

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

    1
  /   \
 2     4
  \   /
   3 5

output => [1,2,4,3,5]

*/


const traverseTree = function(t) {
  let ret = [];
  let queue = [t];

  while (queue.length) {
    current = queue.shift();
    ret.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return ret;
};


/*
 _            _   
| |          | |  
| |_ ___  ___| |_ 
| __/ _ \/ __| __|
| ||  __/\__ \ |_ 
 \__\___||___/\__|
                  
*/

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
