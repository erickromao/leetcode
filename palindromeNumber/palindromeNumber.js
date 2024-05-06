/** 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x && x>0){
        const NumInvertido = x.toString().split("").reverse().join()
        const Num = x.toString().split("").join()
        return Num === NumInvertido ? true : false
    }else if(x==0){
        return true
    }
    return false

};
//Test local
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(123))
