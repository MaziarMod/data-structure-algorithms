// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let last = this.getLast();
    const node = new Node(data);

    if (!last) {
      this.head = node;
      return;
    }
    last.next = node;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    // this line helps use to get rid of size() because if someone provide an index which is greater than the size of list, we are not going to hit to that if statement (counter === index) because node will be null earlier than counter === index. So, we can simply return null
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    // this is the edge case for when we are trying to delete the first node in the list
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);
    // this is another edge case that either previous node of the node that we are going to delete is null, or there is no node after previous node that we are trying to remove. In both cases, it means the index is greater that the list size
    if (!previousNode || !previousNode.next) {
      return;
    }
    const nextNode = previousNode.next.next;
    previousNode.next = nextNode;
  }

  insertAt(data, index) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    const previousNode = this.getAt(index - 1) || this.getLast();
    node.next = previousNode.next;
    previousNode.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
