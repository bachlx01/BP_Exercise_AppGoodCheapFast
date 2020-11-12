// document.getElementById('good').checked = true;

    let good = document.getElementById('good');
    let cheap = document.getElementById('cheap');
    let fast = document.getElementById('fast');

function checking1 () {
    if (good.checked == true) {
        document.getElementById('cheap').checked = false;
    }
}

function checking2 () {
    if (cheap.checked == true) {
        document.getElementById('fast').checked = false;
    }
}
function checking3 () {
    if (fast.checked == true) {
        document.getElementById('good').checked = false;
    }
}


    // if (good.checked == true && cheap.checked == true) {
    //     document.getElementById('fast').checked = false;
    // } else if (good.checked == true && fast.checked == true) {
    //     document.getElementById('cheap').checked = false;
    // } else if (cheap.checked == true && fast.checked == true) {
    //     document.getElementById('good').checked = false;
    // }
