class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.count = 1
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList1 {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  addLast(node) {
    if(this.size == 0) {
      this.head = node
      this.tail = node
      this.size++
      return
    }
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
    this.size++
  }

  removeFirst() {
    if(this.size == 0) {
      return null
    }
    if(this.size == 1) {
      let node = this.head
      this.head = null
      this.tail = null
      this.size = 0
      return node
    }
    let node = this.head
    this.head = this.head.next
    node.next = null
    this.head.prev = null
    this.size--
    return node
  }

  removeNode(node) {
    if(this.size == 1) {
      this.head = null
      this.tail = null
      this.size = 0
      return
    }
    if(this.head == node) {
      let node = this.head
      this.head = this.head.next
      node.next = null
      this.head.prev = null
      this.size--
      return
    }
    if(this.tail == node) {
      let node = this.tail
      this.tail = this.tail.prev
      node.prev = null
      this.tail.next = null
      this.size--
      return
    }
    let prev = node.prev
    let next = node.next
    prev.next = next
    next.prev = prev
    node.next = null
    node.prev = null
    this.size--
  }
}


class LFUCache {

  constructor(capacity) {
    this.capacity = capacity
    this.size = 0;
    this.valueMap = new Map()
    this.frequencyMap = new Map()
    this.lowestFrequency = 1
  }

  
  get(key) {
    let node = this.valueMap.get(key)
    if(node == undefined) {
      return -1;
    }
    let dll = this.frequencyMap.get(node.count)
    dll.removeNode(node)
    if(dll.size == 0 && this.lowestFrequency == node.count) {
        this.lowestFrequency++
    }
    node.count++
    if(!this.frequencyMap.has(node.count)) {
      let dll = new DoublyLinkedList1()
      this.frequencyMap.set(node.count, dll)
    }
    this.frequencyMap.get(node.count).addLast(node)
    return node.val
  }

  put(key, value) {
    // if key exists
    if(this.valueMap.has(key)) {
      let node = this.valueMap.get(key)
      node.val = value
      let dll = this.frequencyMap.get(node.count)
      dll.removeNode(node)

      if(dll.size == 0 && this.lowestFrequency == node.count) {
        this.lowestFrequency++
      }
      node.count++

      if(!this.frequencyMap.has(node.count)) {
        let dll = new DoublyLinkedList1()
        this.frequencyMap.set(node.count, dll)
      }
      this.frequencyMap.get(node.count).addLast(node)
      return
    }

    // if key doesn't exist, check for cache full
    if(this.size == this.capacity) {
      //evict LFU
      let dll = this.frequencyMap.get(this.lowestFrequency)
      let node = dll.removeFirst()
      this.valueMap.delete(node.key)
      this.size--
    }
    
    let node = new Node(key, value)
    this.valueMap.set(key, node)
    if(this.lowestFrequency > 1) {
      this.lowestFrequency = 1
    }
    if(!this.frequencyMap.has(1)) {
      let dll = new DoublyLinkedList1()
      this.frequencyMap.set(1, dll)
    }
    this.frequencyMap.get(1).addLast(node)
    this.size++
  }
}