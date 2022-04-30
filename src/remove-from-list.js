const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.value == k) {
    // проверка на случай, если начинается с искомого k
    l = l.next;
  }
  let current = l;
  let help = l;
  let prev = null;
  let count = 0;
  while (help.next) {
    help = help.next;
    count++;
  }

  for (let i = 0; i < count; i++) {
    prev = current;
    current = current.next;
    if (current.value == k) {
      if (i + 1 != count) {
        if (current.next.value == k) {
          prev.next = current.next.next;
        } else {
          prev.next = current.next;
        }
      } else {
        prev.next = current.next;
      }
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
