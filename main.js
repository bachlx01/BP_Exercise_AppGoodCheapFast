function checking(e) {
    let arrayId = ['good', 'cheap', 'fast', 'good', 'cheap', 'fast', 'cheap', 'fast'];
    if (e.checked == true && document.getElementById(arrayId[arrayId.indexOf(e.getAttribute('id')) + 2]).checked == true) {
        document.getElementById(arrayId[arrayId.indexOf(e.getAttribute('id')) + 1]).checked = false;
    }
}
