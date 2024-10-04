function createNewNode(data) {
    return {
        data: data,
        next: null,
    };
}
function addAtHead(head, data) {
    var newNode = createNewNode(data);
    newNode.next = head;
    return newNode;
}
function printLL(head) {
    var temp = head;
    var str = "";
    while (temp !== null) {
        str += temp.data + "->";
        temp = temp.next;
    }
    str += "x";
    console.log(str);
}
function addAtTail(head, data) {
    if (head === null) {
        return addAtHead(head, data);
    }
    var temp = head;
    while ((temp === null || temp === void 0 ? void 0 : temp.next) !== null) {
        temp = temp === null || temp === void 0 ? void 0 : temp.next;
    }
    var newNode = createNewNode(data);
    temp.next = newNode;
    return head;
}
function removeAtHead(head) {
    if (head === null)
        return null;
    var temp = head;
    head = head.next;
    temp.next = null;
    return head;
}
function removeAtTail(head) {
    if (head === null || head.next === null)
        return null;
    var temp = head;
    while (temp.next && temp.next.next !== null) {
        temp = temp.next;
    }
    temp.next = null;
    return head;
}
var head = null;
head = addAtHead(head, 30);
head = addAtHead(head, 20);
head = addAtHead(head, 10);
head = addAtTail(head, 40);
head = removeAtHead(head);
head = removeAtTail(head);
printLL(head);
// console.log(head);
