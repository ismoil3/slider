const block1 = document.querySelector(".person1")
const block2 = document.querySelector(".person2")
const block3 = document.querySelector(".person3")
const block4 = document.querySelector(".person4")
const block5 = document.querySelector(".person5")
const block6 = document.querySelector(".person6")
const slide = [block1, block2, block3, block4, block5, block6]
sum = 0
function soon(a){
    sum += a
    if(sum > slide.length-1){
        sum-=1
    }
    slide[sum-1].style.display = "none"
    slide[sum].style.display = "block" 
}
sum = 0
function back(a){
    sum -= a
    if(sum < 0){
        sum+=1
    }
    slide[sum+1].style.display = "none"
    slide[sum].style.display = "block"
}