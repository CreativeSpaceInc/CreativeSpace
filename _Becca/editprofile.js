$(document).ready(function() {
    // declare array of creations
    var creations = [];
    // declare ingredientCount
    var creationsCount = 0;
    var creationIndex = 0;

    // when save featured creation url button is clicked
    $("#save-featured-creation-url").on("click", function(event) {
        event.preventDefault();
        // clear featured creation url displayed (if any)
        $("#featured-creation-url").empty();
        // create variable to hold featured creation url input
        var featuredCreationUrlInput = $("#input-featured-creation-url").val().trim();
        // validate that user has entered at least one character
        if (featuredCreationUrlInput !== "") {
            $("#featured-creation-url").attr("src", featuredCreationUrlInput);
        } else $("#featured-creation-url-error").html("* Please enter at least one character to save changes");
    });
    // when save featured creation title button is clicked
    $("#save-featured-creation-title").on("click", function(event) {
        event.preventDefault();
        // clear featured creation title displayed (if any)
        $("#featured-creation-title").empty();
        // create variable to hold featured creation title input
        var featuredCreationTitleInput = $("#input-featured-creation-title").val().trim();
        // validate that user has entered at least one character
        if (featuredCreationTitleInput !== "") {
            $("#featured-creation-title").html(featuredCreationTitleInput);
        } else $("#featured-creation-title-error").html("* Please enter at least one character to save changes");
    });
    // when save featured creation description button is clicked
    $("#save-featured-creation-description").on("click", function(event) {
        event.preventDefault();
        // clear featured creation url displayed (if any)
        $("#featured-creation-url").empty();
        // create variable to hold featured creation description input
        var featuredCreationDescriptionInput = $("#input-featured-creation-description").val().trim();
        // validate that user has entered at least one character
        if (featuredCreationDescriptionInput !== "") {
            $("#featured-creation-description").attr("src", featuredCreationDescriptionInput);
        } else $("#featured-creation-description-error").html("* Please enter at least one character to save changes");
    });
    // when save creation url button is clicked
    $("#save-creation-url").on("click", function(event) {
        event.preventDefault();
        // create variable to hold creation url input
        var creationUrlInput = $("#input-creation-url").val().trim();
        // push creation url to creations array
        creations.push(creationUrlInput);
        // updates creationsCount
        creationsCount = creations.length;
        // determine index of this newly-added creation
        creationIndex++;
        if (creationUrlInput !== "") {
            $("name", creationIndex).("a").attr("href", creationUrlInput);
            $("name", creationIndex).("img").attr("src", creationUrlInput);
        } else $("#creation-url-error").html("* Please enter at least one character to save changes").attr(
            style: "color:red");
    });
    // when save creation title button is clicked
    $("#save-creation-title").on("click", function(event) {
        event.preventDefault();
        // create variable to hold creation title input
        var creationTitleInput = $("#input-creation-title").val().trim();
        // push creation title to creations array
        creations.push(creationTitleInput);
        // updates creationsCount
        creationsCount = creations.length;
        // determine index of this newly-added creation
        creationIndex++;
        if (creationTitleInput !== "") {
            $("name", creationIndex).("p").html(creationTitleInput);
        } else $("#creation-title-error").html("* Please enter at least one character to save changes").attr(
            style: "color:red");
    });
    // when save creation description button is clicked
    $("#save-creation-description").on("click", function(event) {
        event.preventDefault();
        // create variable to hold creation description input
        var creationDescriptionInput = $("#input-creation-description to save changes").val().trim();
        // push creation url to creations array
        creations.push(creationDescriptionInput);
        // updates creationsCount
        creationsCount = creations.length;
        // determine index of this newly-added creation
        creationIndex++;
        if (creationDescriptionInput !== "") {
            $("name", creationIndex).("p").html(creationDescriptionInput);
        } else $("#creation-description-error").html("* Please enter at least one character to save changes").attr(
            style: "color:red");
    });    
    // when save display name button is clicked
    $("#save-display-name").on("click", function(event) {
        event.preventDefault();
        // clear display name currently displayed (if any)
        $("#display-name").empty();
        // create variable to hold display name
        var displayNameInput = $("#input-display-name").val().trim();
        // validate that user has entered at least one character
        if (displayNameInput !== "") {
            $("#display-name").html(displayNameInput);
        } else $("#display-name-error").html("* Please enter at least one character to save changes");
    });
    // when save avatar button is clicked
    $("#save-avatar").on("click", function(event) {
        event.preventDefault();
        // clear avatar currently displayed (if any)
        $("#avatar").empty();
        // create variable to hold avatar
        var avatarInput = $("#input-avatar").val().trim();
        // validate that user has entered at least one character
        if (avatarInput !== "") {
            $("#avatar").attr("href", avatarInput);
        } else $("#avatar-error").html("* Please enter at least one character to save changes");
    });
    // when save bio button is clicked
    $("#save-bio").on("click", function(event) {
        event.preventDefault();
        // clear bio currently displayed (if any)
        $("#bio").empty();
        // create variable to hold bio
        var bioInput = $("#input-bio").val().trim();
        // validate that user has entered at least one character
        if (bioInput !== "") {
            $("#bio").html(bioInput);
        } else $("#bio-error").html("* Please enter at least one character to save changes");
    });
    // when save username button is clicked
    $("#save-username").on("click", function(event) {
        event.preventDefault();
        // clear username currently displayed (if any)
        $("#username").empty();
        // create variable to hold username
        var usernameInput = $("#input-username").val().trim();
        // validate that user has entered at least one character
        if (usernameInput !== "") {
            $("#username").html(usernameInput);
        } else $("#username-error").html("* Please enter at least one character to save changes");
    });
    // when save email button is clicked
    $("#save-email").on("click", function(event) {
        event.preventDefault();
        // clear email currently displayed (if any)
        $("#email").empty();
        // create variable to hold email
        var emailInput = $("#input-email").val().trim();
        // validate that user has entered at least one character
        if (emailInput !== "") {
            $("#email").html(emailInput);
        } else $("#email-error").html("* Please enter at least one character to save changes");
    });
    // when save title button is clicked
    $("#save-title").on("click", function(event) {
        event.preventDefault();
        // clear title currently displayed (if any)
        $("#title").empty();
        // create variable to hold title
        var titleInput = $("#input-title").val().trim();
        // validate that user has entered at least one character
        if (titleInput !== "") {
            $("#title").html(titleInput);
        } else $("#title-error").html("* Please enter at least one character to save changes");
    });
    // when save location button is clicked
    $("#save-location").on("click", function(event) {
        event.preventDefault();
        // clear location currently displayed (if any)
        $("#location").empty();
        // create variable to hold location
        var locationInput = $("#input-location").val().trim();
        // validate that user has entered at least one character
        if (locationInput !== "") {
            $("#location").html(locationInput);
        } else $("#location-error").html("* Please enter at least one character to save changes");
    });
    /* from recipeFinder repo
    // when Delete title button is clicked
    $(document).on("click", "#delete-title", function() {
        event.preventDefault();
        // clear content currently displayed
        $("#display-title").empty();
    });
    // when Save recipe button is clicked, do the following
    $(document).on("click", "#save-recipe", function() {
        //event.preventDefault();
        // clear recipes currently displayed (if any)
        // $("#recipe-panel").empty();
        if (($("#display-title").html() !== "") && ($("#display-ingredient").html() !== "") && ($("#display-preparation").html() !== "")) {
            $("#save-div").remove();
            $(".btn-danger").remove();
            $("#success-div").append("h1").attr({
                style: "color:green; bolded",
                class: "text-center"
            }).html("Your recipe has been saved!");
        } else $("#save-error").html("* All fields must be completed before saving");
        // direct to another page that features saved recipe and nutrients facts

        // passes final url to the runQuery function
        runQuery(url);
    });*/
});