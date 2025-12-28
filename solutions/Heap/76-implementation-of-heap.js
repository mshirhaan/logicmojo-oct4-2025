/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}

    for(let num of nums) {
        map[num] = (map[num] || 0) + 1
    }

    let heap = new Maxheap()

    for(let key of Object.keys(map)) {
        heap.add({num: key, priority: map[key]})
    }

    let res = []

    while(k>0) {
        res.push(+heap.remove().num)
        k--;
    }

    return res
};

class Maxheap {
  arr = []

  //O (log n)
  add(item) {
    let arr = this.arr;
    this.arr.push(item);

    //heapify
    let currIdx = arr.length-1
    let parentIdx = Math.floor((currIdx-1)/2)
    while(parentIdx>=0 && arr[currIdx].priority > arr[parentIdx].priority) {
      let temp = arr[currIdx]
      arr[currIdx] = arr[parentIdx]
      arr[parentIdx] = temp
      currIdx = parentIdx
      parentIdx = Math.floor((currIdx-1)/2)
    }
  }

  //O (log n)
  remove() {
    let arr = this.arr;
    let item = arr[0]
    arr[0] = arr.pop()

    //heapify
    let parentIdx = 0
    let leftChildIdx = 1
    let rightChildIdx = 2

    let currIdx = (rightChildIdx>=arr.length ||  arr[leftChildIdx].priority >= arr[rightChildIdx].priority) ? leftChildIdx : rightChildIdx
    while(leftChildIdx<arr.length && arr[parentIdx].priority < arr[currIdx].priority) {
      let temp = arr[currIdx]
      arr[currIdx] = arr[parentIdx]
      arr[parentIdx] = temp

      parentIdx = currIdx
      leftChildIdx = parentIdx*2+1
      rightChildIdx = parentIdx*2+2

      if(leftChildIdx>=arr.length) {
        break;
      }
      currIdx = (rightChildIdx>=arr.length ||  arr[leftChildIdx].priority >= arr[rightChildIdx].priority )? leftChildIdx : rightChildIdx
    }
    return item
  }

  peek() {
    return arr[0]
  }

  print() {
    let queue = []
    queue.push(0)
    let ans = []
    while(queue.length) {
      if(queue[0] >= this.arr.length) break;
      let snapshotSize = queue.length
      let res = []
      for(let i=0; i<snapshotSize; i++) {
        let idx = queue.shift()
        res.push(this.arr[idx])
        queue.push(idx*2+1)
        queue.push(idx*2+2)
      }
      ans.push(res)
    }
    return ans
  }
}