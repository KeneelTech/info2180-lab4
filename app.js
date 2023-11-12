"use strict";



document.addEventListener("DOMContentLoaded", function(){
    const search = document.querySelector("button");
    const http = new XMLHttpRequest();
    let url = "http://localhost/info2180-lab4/superheroes.php";
    /*http.onreadystatechange = doSomething;
    http.open('GET', url);
    http.send();*/
    
    search.addEventListener("click", function(){
        fetch("http://localhost/info2180-lab4/superheroes.php")
        .then(response => response.text())
        .then(data => {
            alert(data)
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    });
})