/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let seat1 = null, seat2 = null, countSeat1 = 0, countSeat2 = 0

    for (let num of nums) {
        if (seat1 == num) {
            countSeat1++
        } else if (seat2 == num) {
            countSeat2++
        }
        else if (seat1 == null) {
            seat1 = num
        } else if (seat2 == null) {
            seat2 = num
        } else {
            if (countSeat1 > 0) {
                countSeat1--
            } else {
                seat1 = null
            }

            if (countSeat2 > 0) {
                countSeat2--
            } else {
                seat2 = null
            }
        }
    }

    let op = []

    let tempCount1 = 0;
    let tempCount2 = 0;
    for (let num of nums) {
        if (seat1 == num)
            tempCount1++
        if (seat2 == num)
            tempCount2++
    }

    if (tempCount1 > nums.length / 3)
        op.push(seat1)

    if (tempCount2 > nums.length / 3)
        op.push(seat2)

    return op;
};