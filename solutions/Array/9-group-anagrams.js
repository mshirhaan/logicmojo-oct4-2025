
function isAna(str1, str2) {
  if(str1.length != str2.length) {
    return false;
  }

  //Frequency counter pattern
  let map = {}

  for(let char of str1) {
    if(map[char] == undefined) {
      map[char] = 0;
    }
    map[char] = map[char]+1;
  }

  for(let char of str2) {
    if(map[char] == undefined || map[char] == 0) {
      return false
    }
    map[char]--;
  }

  return true
}

function groupAnagrams(strs) {
  let map = {}

  //create buckets
  for(let i = 0; i<strs.length; i++) {
    let leaderKey = strs[i].split('').sort().join('')
    if(map[leaderKey] == undefined) {
      map[leaderKey] = [strs[i]]
    } else {
        map[leaderKey].push(strs[i])
    }
  }


  return Object.values(map)
}



function groupAnagrams(strs) {
  let map = {}

//   //create buckets
//   for(let i = 0; i<strs.length; i++) {
//     let leaderKey = strs[i].split('').sort().join('')
//     if(map[leaderKey] == undefined) {
//       map[leaderKey] = [strs[i]]
//     } else {
//         map[leaderKey].push(strs[i])
//     }
//   }

    //create buckets
  for(let i = 0; i<strs.length; i++) {
    let bucket = Array(26).fill(0);
    for(let j = 0; j<strs[i].length; j++) {
        let bucketIndex = strs[i].charCodeAt(j) - 'a'.charCodeAt()
        bucket[bucketIndex]++;
    }
    let leaderKey = bucket.join(',')

    
    if(map[leaderKey] == undefined) {
      map[leaderKey] = [strs[i]]
    } else {
        map[leaderKey].push(strs[i])
    }
  }


  return Object.values(map)
}


