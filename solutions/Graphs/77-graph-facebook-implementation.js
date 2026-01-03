
class Facebook {
  adjList = {}

  signUp(username) {
    let adjList = this.adjList
    if(adjList.username != undefined) {
      return -1
    }
    adjList[username] = {}
  }

  addFriend(firstUsername, secondUsername, weight) {
    let adjList = this.adjList
    if(adjList[firstUsername] == undefined || adjList[secondUsername] == undefined) {
      return -1
    }

    adjList[firstUsername][secondUsername] = weight
    adjList[secondUsername][firstUsername] = weight

  }

  removeFriend(firstUsername, secondUsername) {
    let adjList = this.adjList
    if(adjList[firstUsername] == undefined || adjList[secondUsername] == undefined) {
      return -1
    }
    delete adjList[firstUsername][secondUsername]
    delete adjList[secondUsername][firstUsername]
  }

  deleteAccount(username) {
    let adjList = this.adjList
    if(adjList[username] == undefined) {
      return -1
    }
    delete adjList[username]

    for(let key in adjList) {
      delete adjList[key][username]
    }
  }
}

let fb = new Facebook()
fb.signUp('a')
fb.signUp('b')
fb.signUp('c')

fb.addFriend('a','b',10)



console.log(fb.adjList)