function skillsMember() {
    // Get the modal
    var modal = document.getElementById('skillsMember');

    // Get the button that opens the modal
    var btn = document.getElementById("skillsMemberBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeSkillsMember")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
        modal.style.animation = "fadeIn 1s";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.animation = "fadeOut 1s";
        setTimeout(function () {
            modal.style.display = "none";
        }, 1000);
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == skillsMember) {
            modal.style.animation = "fadeOut 1s";
            setTimeout(function () {
                modal.style.display = "none";
            }, 1000);
        }
    }
}