public class Main {
  public static void main(String[] args) {
    LinkedList ll = new LinkedList();
    ll.addFirst(0);
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);
    ll.addFirst(4);
    ll.add(0, 100);
    ll.remove(20);
    System.out.print(ll);
  }
}

class Node {
  int val;
  Node next;

  Node(int val) {
    this.val = val;
  }

  public String toString() {
    return val+"";
  }
}

class LinkedList {
  Node head;
  Node tail;
  int size;

  void addFirst(int val) {
    Node node = new Node(val);
    node.next = head;
    head = node;
    tail = node;
    size++;
  }

  void addLast(int val) {
    Node node = new Node(val);

    if(head == null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
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
    Node first = head;
    head = next;
    size--;
    return first;
  }

  Node removeLast() {
    if(size < 2) {
      return removeFirst();
    }
    Node curr = head;
    while(curr.next.next != null) {
      curr = curr.next;
    }
    Node last = tail;
    tail = curr;
    tail.next = null;
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
    curr.next = node;
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
    node.next = null;
    size--;
    return node;
  }

  public String toString() {
    if(size == 0) {
      return "null";
    }
    Node curr = head;
    String str = "";
    while(curr.next != null) {
      str = str + curr.val+"->";
      curr = curr.next;
    }
    str = str + curr.val+"->null";
    return str;
  }
}