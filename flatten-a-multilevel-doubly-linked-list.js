class ListNode {
  constructor(val, next = null, prev = null, child = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

// ---- Generate our linked list ----
const createLinkedList = function (array) {
  const listObj = array
    .reverse()
    .reduce((acc, val) => new ListNode(val, acc), null);
  return listObj;
};

const printList = (head) => {
  if (!head) {
    return;
  }
  console.log("Print List -", head.val);
  printList(head.next);
};

let linkedList = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);

var flatten = function (head) {
  if (!head) return null;
  let curNode = head;
  while (curNode != null) {
    if (curNode.child === null) {
      curNode = curNode.next;
    } else {
      let tail = curNode.child;
      while (tail.next != null) {
        tail = tail.next;
      }
      tail.next = curNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      curNode.next = curNode.child;
      curNode.next.prev = curNode;
      curNode.child = null;
    }
  }
  return head;
};
