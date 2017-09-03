// This file is responsible for all of the functionality within the brother's page
// Created by: Kirk Morgan | Time: August 18, 2017 8:32 P.M.

function renderBrotherProfiles() {
    var brothersAddedToRow = 0;
    var totalRows = 0;

    allBrothers.forEach(function(aBrother) {
        // If we've reached max, reset counter
        if (brothersAddedToRow === 4) {
            brothersAddedToRow = 0;
        }

        if (brothersAddedToRow === 0) {
            totalRows++;
            var brotherRow = document.createElement('div');

            brotherRow.className = "brothers-row row row" + totalRows.toString();

            var brother = renderBrother(aBrother);

            brotherRow.appendChild(brother);

            $(".brothers").append(brotherRow);
        } else {
            var brother = renderBrother(aBrother);
            $(".row" + totalRows.toString()).append(brother);
        }

        brothersAddedToRow++;
    });
}

function renderBrother(brother) {
    var brotherWrapper = document.createElement('div');
    var brotherProfile = document.createElement('div');
    var brotherInfo = document.createElement('p');
    var brotherImage = document.createElement('img');

    brotherWrapper.className = "wrapper col-lg-3 col-md-6 col-sm-12";
    brotherProfile.className = "brother-profile hoverbox";
    brotherInfo.className = "brother-desc hoverbox-text";
    brotherImage.className = "brother-img hoverbox-img";

    $.get("siteimages/brotherprofilepictures/" + brother.firstName + brother.lastName + ".jpg")
        .done(function() {
            brotherImage.src = "siteimages/brotherprofilepictures/" + brother.firstName + brother.lastName + ".jpg";
        }).fail(function() {
            brotherImage.src = "siteimages/brotherprofilepictures/blankbrotherprofile.jpg";
        });

    //brotherImage.src = "siteimages/brotherprofilepictures/blankbrotherprofile.jpg";
    brotherInfo.append(brother.firstName + " " + brother.lastName);

    brotherProfile.append(brotherImage);
    brotherProfile.append(brotherInfo);
    brotherWrapper.append(brotherProfile);

    return brotherWrapper;
}