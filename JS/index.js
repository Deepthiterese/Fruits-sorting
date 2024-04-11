
   
function sortFruit(){
    let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

    let appleBasket=document.getElementById("apple-shelf")
    let orangeBasket=document.getElementById("orange-shelf")
    
for(let i=0;i<fruit.length;i++){
console.log(fruit[i])
        
        if(fruit[i]=="🍎"){
            appleBasket.push("🍎")
        }

       else{
        orangeBasket.push("🍊")
    }
}
document.getElementById("apple-shelf").innerHTML= appleBasket[i]
document.getElementById("orange-shelf").innerHTML= orangeBasket[i]

}