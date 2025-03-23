class SimpleLinkedList {
  constructor() {
    this.head = null;
    this.lenght = 0;
  }
  append(value) {
    const node = { value, next: null };
    if (!this.head) {
      this.head = node;
    } else {
      let currentItem = this.head;
      while (currentItem.next) {
        currentItem = currentItem.next;
      }
      currentItem.next = node;
    }
    this.lenght++;
  }
  prepend(value) {
    const node = { value, next: this.head };
    this.head = node;
    this.lenght++;
  }
  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let currentItem = this.head;
    while (currentItem.next) {
      if (currentItem.next.value === value) {
        currentItem.next = currentItem.next.next;
        return;
      }
      currentItem = currentItem.next;
    }
  }

  size() {
    return this.lenght;
  }
  find(value) {
    let currentItem = this.head;
    while (currentItem) {
      if (currentItem.value === value) {
        return currentItem;
      }
      currentItem = currentItem.next;
    }
    return null;
  }
}
let a = new SimpleLinkedList();
a.append("1");
a.append("2");
a.append("3");
a.prepend("666");
a.remove("2");
console.log(a.find("666"));
