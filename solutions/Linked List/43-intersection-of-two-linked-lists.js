var getIntersectionNode = function(headA, headB) {
    let count1= 0,count2 = 0
    let curr1 = headA, curr2 = headB

    while(curr1) {
        count1++
        curr1 = curr1.next
    }
    while(curr2) {
        count2++
        curr2 = curr2.next
    }

    let diffCount = Math.abs(count1-count2)

    curr1 = headA, curr2 = headB

    if(count1 > count2) {
        while(diffCount>0) {
            curr1 = curr1.next
            diffCount--
        }
    } else {
        while(diffCount>0) {
            curr2 = curr2.next
            diffCount--
        }
    }

    while(curr1 && curr2) {
        if(curr1 == curr2) {
            return curr1
        }
        curr1 = curr1.next
        curr2 = curr2.next
    }

    return null
};



// Optimal approach
var getIntersectionNode = function(headA, headB) {
    let curr1 = headA, curr2 = headB

    while(curr1 && curr2) {
        if(curr1 == curr2) {
            return curr1
        }
        curr1 = curr1.next
        curr2 = curr2.next

        if(curr1 == null) {
            curr1 = headB
            break
        }
        if(curr2 == null) {
            curr2 = headA
            break
        }
    }

    while(curr1 && curr2) {
        curr1 = curr1.next
        curr2 = curr2.next

        if(curr1 == null) {
            curr1 = headB
            break
        }
        if(curr2 == null) {
            curr2 = headA
            break
        }
    }

     while(curr1 && curr2) {
        if(curr1 == curr2) {
            return curr1
        }
        curr1 = curr1.next
        curr2 = curr2.next
     }
     return null
};

