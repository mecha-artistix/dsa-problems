class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ---- Generate our linked list ----
const createLinkedList = function (array) {
  const listObj = array
    .reverse()
    .reduce((acc, val) => new ListNode(val, acc), null);
  return listObj;
};
let linkedList = createLinkedList([1, 2, 3, 4, 5]);
const printList = (head) => {
  if (!head) {
    return;
  }
  console.log("Print List -", head.val);
  printList(head.next);
};

arr1 = [1, 2, 3, 4, 5];
arr2 = [5, 10, 15, 20, 25];
left = 2;
right = 4;
// Input: head = [1,2,3,4,5], left = 2, right = 4   Output: [1,4,3,2,5]

var reverseBetween = function (head, left, right) {
  let current = head,
    start = head,
    position = 1;
  while (position < left) {
    start = current;
    current = current.next;
    position++;
  }
  let reversed = null,
    tail = current;
  while (position >= left && position <= right) {
    let tempNext = current.next;
    current.next = reversed;
    reversed = current;
    current = tempNext;
    position++;
  }
  start.next = reversed;
  tail.next = current;
  return left > 1 ? head : reversed;
};
console.log(reverseBetween(linkedList, left, right));
reverseBetween(linkedList, left, right);

// Output: [1,4,3,2,5]
// printList(createLinkedList(arr2));
// printList(reverseList(createLinkedList(arr2)));
