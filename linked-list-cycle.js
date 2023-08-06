var hasCycle = function (head) {
  if (!head || head.next === null) return false;

  let tortoise = head,
    hare = head;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (hare === tortoise) return true;
  }
  return false;
};
