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

const linkedList = [1, 2, 3, 4, 5]
  .reverse()
  .reduce((acc, val) => new ListNode(val, acc), null);

const printList = (head) => {
  if (!head) {
    return;
  }
  console.log("Print List -", head.val);
  printList(head.next);
};
const lengthOfLinkedList = function (head) {
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  return length;
};
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
};

var reverseListRecur = function (head) {
  debugger;
  if (head === null || head.next === null) {
    return head;
  }
  let reverseHead = reverseListRecur(head.next);
  head.next.next = head;
  head.next = null;
  return reverseHead;
};

// console.log("rev", reverseList(linkedList));
// printList(reverseList(linkedList));
console.log(lengthOfLinkedList(linkedList));
printList(reverseListRecur(linkedList));
