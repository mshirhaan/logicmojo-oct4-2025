class BrowserHistory {
    dll = new DoublyLinkedList1();

    constructor(homepage) {
        this.dll.addLast(homepage);
    }
    
    visit( url) {
        this.dll.addLast(url);
    }
    
    back( steps) {
        while(steps > 1) {
          this.dll.moveBack();
          steps--;
        }
    
        return this.dll.moveBack(); 
    }
    
    forward( steps) {
        while(steps > 1) {
          this.dll.moveForward();
          steps--;
        }
        return this.dll.moveForward();
    }
}



class Node {
   val;
   next;
   prev;

  constructor( val) {
    this.val = val;
  }
}

class DoublyLinkedList1 {
   head;
   tail;
   curr;
   size = 0;

   addLast( val) {
    let node = new Node(val);

    if(this.head == null) {
      this.head = node;
      this.tail = node;
      this.curr = node;
    } else {
      this.curr.next = node;
      node.prev = this.curr;
      this.tail = node;
      this.curr = node;
    }
    this.size++;
  }

   moveBack() {
    if(this.curr.prev != null) {
      this.curr = this.curr.prev;
    }
    return this.curr.val;
  }

   moveForward() {
    if(this.curr.next != null) {
      this.curr = this.curr.next;
    }
    return this.curr.val;
  }
}