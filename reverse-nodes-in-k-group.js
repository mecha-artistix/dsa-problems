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

const printList = (head) => {
  if (!head) {
    return;
  }
  console.log("Print List -", head.val);
  printList(head.next);
};

let linkedList = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);

var reverseKGroup = function (head, k) {
  debugger;

  let it = head;
  let count = 0;
  while (it) {
    count++;
    if (count === k) {
      break;
    }
    it = it.next;
  }
  if (count < k) return head;
  let post = reverseKGroup(it.next, k);
  let prev = null,
    cur = head,
    next = null;
  for (let i = 0; i < k; i++) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  head.next = post;
  return prev;
};

console.log(printList(reverseKGroup(linkedList, 3)));
