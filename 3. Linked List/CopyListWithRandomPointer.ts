// https://leetcode.com/problems/copy-list-with-random-pointer/description/
function copyRandomList(head: _Node | null): _Node | null {
  let temp: _Node | null = head;
  let _temp: _Node | null = null;
  let newHead: _Node | null = null;

  while (temp) {
    let newNode: _Node | null = new _Node(temp.val);
    let nextOfTemp = temp.next;
    temp.next = newNode;
    newNode.next = nextOfTemp;
    temp = nextOfTemp;
  }

  temp = head;
  while (temp) {
    temp.next.random = temp.random ? temp.random.next : null;
    temp = temp.next ? temp.next.next : null;
  }

  temp = head;
  _temp = head ? head.next : null;
  newHead = _temp;
  while (temp) {
    temp.next = _temp.next;
    _temp.next = _temp.next ? _temp.next.next : null;
    temp = temp.next;
    _temp = _temp.next;
  }

  return newHead;
}
