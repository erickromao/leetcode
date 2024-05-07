/**
     * @param {string} val
     * @return {Object}
     */
var expect = function (val) {
    return {
        toBe: (expect) => {
            if (expect === val) return true
            throw new Error("Not Equal")
        },
        notToBe: (expect) => {
            if (expect !== val) return true
            throw new Error("Equal")
        }
    }
};

//Test Local
try{
    console.log(expect(5).toBe(5))
    console.log(expect(5).toBe(null))
    console.log(expect(5).notToBe(null))
}catch(erro){
    console.log(erro.message)
}