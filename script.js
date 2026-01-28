let add = document.querySelector("#add")
let del = document.querySelector("#delete")
let reset = document.querySelector("#reset")
let output = document.querySelector("#para")
let prime = document.querySelector("#prime")
let palindrome = document.querySelector("#palindrome")
let primePalindrome = document.querySelector("#pandp")
let count = 0
add.addEventListener('click',function(){
    count++
    output.innerHTML = count
})
del.addEventListener('click',function(){
    if(count>0){
        count--
        output.innerHTML = count
    }
})
reset.addEventListener('click',function(){
    count = 0
    output.innerHTML = count
})
function isPrime(n){
    if(n<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
prime.addEventListener("click",function(){
    count++
    while(!isPrime(count)){
        count++
    }
    output.innerHTML = count
})
function isPalindrome(n){
    let str = n.toString()
    let rev = ""
    for(let i =str.length-1;i>=0;i--){
        rev += str[i]
    }
    return str === rev
}
palindrome.addEventListener('click',function(){
    count++
    while(!isPalindrome(count)){
        count++
    }
    output.innerHTML = count
})
primePalindrome.addEventListener("click",function(){
    count++
    while(!(isPrime(count) && isPalindrome(count))){
        count ++
    }
    output.innerHTML = count
})
