/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----

const l1 = [9, 9].reverse().reduce((acc, val) => new ListNode(val, acc), null);

const l2 = [9, 9, 9]
  .reverse()
  .reduce((acc, val) => new ListNode(val, acc), null);

const printList = (head) => {
  if (!head) {
    return;
  }
  console.log(head.val);
  printList(head.next);
};
// console.log(l1, l2, printList(l1, l2));

// Solution
var addTwoNumbers = function (l1, l2, carry = 0) {
  debugger;
  if (!l1 && !l2 && !carry) return null;
  var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
  carry = parseInt(sum / 10);
  return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};
console.log(addTwoNumbers(l1, l2));
