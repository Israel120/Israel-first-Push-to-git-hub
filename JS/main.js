const collapsibles = document.querySelectorAll(".collapsible")
collapsibles.forEach(function(item){
    item.addEventListener("click",function(){
        item.classList.toggle("collapsible__expanded")
    })
})