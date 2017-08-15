// This function will create a NavBar on which ever HTML document it is called from
function showNavBar(currentPage) {
    var link = document.querySelector('link[rel="import"]');
    var content = link.import;

    // Locate the element with the class "active". Remove the active and disabled classes so the link will once again
    // work.
    // NOTE: This works only because only one link can be active at a time
    $(".active").removeClass("active disabled");

    var el = content.querySelector('.navbar');

    document.body.appendChild(el.cloneNode(true));

    // Locate the element for the current page and add the active and disabled classes
    $("#" + currentPage).addClass("active disabled");
}