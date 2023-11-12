"use strict";


document.addEventListener("DOMContentLoaded", function(){
    const search = document.querySelector("button");
    const searchField = document.getElementById("searchField");
    const resultDiv = document.getElementById("result");    

    search.addEventListener("click", function(){
        const searchTerm = encodeURIComponent(searchField.value.trim());
        const url = "http://localhost/info2180-lab4/superheroes.php" + (searchTerm ? `?query=${searchTerm}` : "");

        fetch(url)
        .then(response => response.text())
        .then(data => {
            // Assuming the PHP returns HTML formatted according to the requirements
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = "Error loading the superhero data.";
        });
    });
})