class Node {
  int key;
  int val;
  Node next;
  Node prev;

  Node(int key, int val) {
    this.key = key;
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

  Node addLast(int key, int val) {
    Node node = new Node(key, val);

    if(head == null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    size++;
    return node;
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
 
  void removeNode(Node node) {
    if(node == null) {
      return;
    }
    if(node == head) {
      removeFirst();
      return;
    }
    if(node == tail) {
      removeLast();
      return;
    }
    Node prev = node.prev;
    Node next = node.next;
    node.prev = null;
    node.next = null;
    if(prev!=null) {
      prev.next = next;
    }
    if(next!=null) {
      next.prev = prev;
    }
    size--;
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

class LRUCache {
    int capacity = 0;
    Map<Integer, Node> map = new HashMap<>();

    DoublyLinkedList dll = new DoublyLinkedList();

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {
      if(!map.containsKey(key)) {
        return -1;
      }
      Node node = map.get(key);
      dll.removeNode(node);
      map.remove(key);

      put(node.key, node.val);
      return node.val;
    }
    
    public void put(int key, int value) {
      if(!map.containsKey(key)) {
        if(dll.size == capacity) {
          Node node = dll.removeFirst();
          map.remove(node.key);
        }
        Node node = dll.addLast(key, value);
        map.put(key, node);
      } else {
        Node node1 = map.get(key);
        dll.removeNode(node1);
        Node node = dll.addLast(key, value);
        map.put(key, node);
      }
    }
}