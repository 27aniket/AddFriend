
var a= document.querySelector("h5")

var btn = document.querySelector("#add")
//var removeFriend = document.querySelector("#remove")
var check=0
    btn.addEventListener("click",function(){
    if (check==0){
    a.innerHTML="Friends"
    a.style.color="green"
    btn.innerHTML="Remove Friends"

    check=1
}else{
    a.innerHTML="Stranger"
    a.style.color="red"
    btn.innerHTML="Add Friends"

    check=0

}
})

//removeFriend.addEventListener("click",function(){
    //a.innerHTML="Stranger"
    //a.style.color="red"
//})


