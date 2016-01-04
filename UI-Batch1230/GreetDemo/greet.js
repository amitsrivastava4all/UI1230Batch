window.addEventListener("load",init);
function init(){
document.getElementsByTagName("button")[0].addEventListener("click",sayWelcome);
}
function sayWelcome(){
    var txt = document.getElementById("txtName").value;
    document.getElementsByTagName("div")[1]
        .children[0].children[0].innerHTML=txt;
}