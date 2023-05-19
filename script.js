function highlight() {
    //Write your code here
    document.querySelectorAll("strong").forEach((element) => {
        element.classList.add("highlight")
    })

}


function return_normal() {
    //Write your code here
    document.querySelectorAll("strong").forEach((element) => {
        element.classList.remove("highlight")
    })    
}