var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class');

    var el = document.getElementById('scriptResults');
    el.innerHTML = "<p>The first item in the list has the " + attr + " class";
}
