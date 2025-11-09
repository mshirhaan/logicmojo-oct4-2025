public class Main {
  public static void main(String[] args) {
    DoublyLinkedList dll = new DoublyLinkedList();

    dll.addLast(1);
    dll.addLast(2);
    dll.addFirst(3);
    dll.add(1, 0);
    dll.remove(2);

    System.out.print(dll);
  }
}

class Node {
  int val;
  Node next;
  Node prev;

  Node(int val) {
    this.val = val;
  }

  public String toString() {
    return val+"";
  }
}

class DoublyLinkedList {
  Node head;
  Node tail;
  int size;

  void addFirst(int val) {
    Node node = new Node(val);
    if(head == null) {
      head = node;
      tail = node;
    } else {
      node.next = head;
      head.prev = node;
      head = node;
    }
    size++;
  }

  void addLast(int val) {
    Node node = new Node(val);

    if(head == null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    size++;
  }

  Node removeFirst() {
    if(size == 0) {
      return null;
    }
    if(size == 1) {
      Node first = head;
      head = null;
      tail = null;
      size = 0;
      return first;
    }
    Node next = head.next;
    head.next = null;
    next.prev = null;
    Node first = head;
    head = next;
    size--;
    return first;
  }

  Node removeLast() {
    if(size < 2) {
      return removeFirst();
    }
    Node last = tail;
    tail = last.prev;
    tail.next = null;
    last.prev = null;
    size--;
    return last;
  }

  void add(int i, int val) {
    if(i == 0) {
      addFirst(val);
      return;
    }
    if(i == size) {
      addLast(val);
      return;
    }
    int currIdx = 0;
    Node curr = head;

    while(currIdx < i-1) {
      curr = curr.next;
      currIdx++;
    }
    Node node = new Node(val);
    node.next = curr.next;
    curr.next.prev = node;
    curr.next = node;
    node.prev = curr;
    size++;
  }

  Node remove(int i) {
    if(i >= size) {
      return null;
    }
    if(i == 0) {
      return removeFirst();
    }
    if(i == size) {
      return removeLast();
    }
    int currIdx = 0;
    Node curr = head;

    while(currIdx < i-1) {
      curr = curr.next;
      currIdx++;
    }
    Node node = curr.next;
    curr.next = curr.next.next;
    curr.next.prev = curr;
    node.next = null;
    node.prev = null;
    size--;
    return node;
  }

  public String toString() {
    if(size == 0) {
      return "null";
    }
    Node curr = head;
    String str = "null<-";
    while(curr.next != null) {
      str = str + curr.val+"<->";
      curr = curr.next;
    }
    str = str + curr.val+"<->null";
    return str;
  }
}