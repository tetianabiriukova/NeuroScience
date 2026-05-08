function openModal(){

    document.getElementById("infoModal").style.display = "flex";

}

function closeModal(){

    document.getElementById("infoModal").style.display = "none";

}

window.onclick = function(event){

    const modal = document.getElementById("infoModal");

    if(event.target == modal){

        modal.style.display = "none";

    }

}