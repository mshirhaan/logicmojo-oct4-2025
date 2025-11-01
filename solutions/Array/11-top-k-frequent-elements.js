
var topKFrequent = function(nums, k) {
    let map = {}

    for(let num of nums) {
        if(map[num]== undefined) {
            map[num] = 0;
        }
        map[num]++
    }

    let res = new Set();

    while(k>0) {
        let max = 0;
        let num = -1;
        for(let key in map) {
           if(map[key]> max && !res.has(+key)) {
            max = map[key]
            num = +key
           }
        }
        res.add(num)
        k--;
    }
    return [...res];
};

var topKFrequent = function(nums, k) {
    let map = {}

    for(let num of nums) {
        if(map[num]== undefined) {
            map[num] = 0;
        }
        map[num]++
    }

    let flippedMap = {}

    for(let key in map) {
        let value = map[key];
        if(flippedMap[value]== undefined) {
            flippedMap[value] = []
        }
        flippedMap[value].push(key)
    }

    let res = [];

    console.log(flippedMap)

    for(let i = nums.length; i>=0; i--) {
      let values = flippedMap[i]
      if(!values) continue;
      
      for(let num of values) {
        res.push(+num)
        if(res.length == k) {
          return res;
        }
      }
    }
  return res
};