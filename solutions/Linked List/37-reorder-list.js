var reorderList = function(head) {
    // let size = 0;

    // let curr = head;

    // while(curr) {
    //     size++;
    //     curr = curr.next
    // }

    // curr = head
    // let mid = Math.ceil(size/2)
    // let i = 1

    // while(i<mid) {
    //     curr = curr.next
    //     i++;
    // }

    // let backup = curr.next
    // curr.next = null

    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next
    }

    let backup = slow.next
    slow.next = null



    //Rest of common code works for both above approaches
    let prev = null;
    curr = backup;
    while(curr) {
      let next = curr.next
      curr.next = prev
      prev = curr;
      curr = next;
    }

    backup = head
    while(prev && head) {
      let temp1 = head.next;
      head.next = prev;
      head = temp1;
      let temp2 = prev.next;
      prev.next = head;
      prev = temp2
    }
    return backup
};