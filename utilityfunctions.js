// This function will create a NavBar on which ever HTML document it is called from
function showNavBar(currentPage) {
    var link = document.querySelector('link[rel="import"]');
    var content = link.import;

    $(".active").removeClass("active");

    var el = content.querySelector('.navbar');

    document.body.appendChild(el.cloneNode(true));
    $("#" + currentPage).addClass("active");
}