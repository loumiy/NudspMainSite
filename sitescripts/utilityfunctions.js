// This function will create a NavBar on which ever HTML document it is called from
function showNavBar(currentPage) {
    var link = document.querySelector('link[href="templates/navbar.html"]');
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

// This function will create a page footer on which ever HTML document it is called from
function showFooter() {
    var link = document.querySelector('link[href="templates/footer.html"]');
    var content = link.import;

    var el = content.querySelector('.footer');
    document.body.appendChild(el.cloneNode(true));
}

// This function will set the size of the title region to fit the initial window exactly
function setTitleRegionSize() {
    var titleRegion = document.getElementById("title-region");
    var windowHeight = $(window).height();

    titleRegion.style.height = windowHeight.toString() + "px";
    titleRegion.style.width = "100%";
}

// This function will scroll to the next section of the homepage smoothly
function scrollHomePage(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $('.about-region').offset().top}, 500, 'linear');
}