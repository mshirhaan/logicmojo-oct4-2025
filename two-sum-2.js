// Time complexity: O(n)
// Space complexity: O(1)
function twoSum(numbers, target) {
    let i = 0, j = numbers.length;

    while(i<j) {
        let sum = numbers[i] + numbers[j]
        if(sum == target) {
            return [i+1, j+1]
        }
        else if(sum<target) {
            i++;
        } else {
            j--;
        }
    }
};