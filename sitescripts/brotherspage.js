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
    var brotherProfile = document.createElement('div');
    var brotherInfo = document.createElement('div');
    var brotherImage = document.createElement('img');

    brotherProfile.className = "brother-profile hoverbox col-3";
    brotherInfo.className = "brother-image";
    brotherImage.src = "siteimages/brotherprofilepictures/blankbrotherprofile.jpg";

    brotherInfo.append(brotherImage);
    brotherProfile.appendChild(brotherInfo);

    return brotherProfile;
}