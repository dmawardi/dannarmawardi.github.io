var detailTextArea = $('#detailText');

// Function to clear text area and replace with input job's details
function clearAndDisplayJobDetails(jobID) {
    detailTextArea.empty();
    // Declare variables
    var article = $('<article>');
    var p = $('<p>');

    // Place details of job into p
    p.html(resumeDetails[jobID]);

    // Append to aritcle and display
    article.append(p);
    detailTextArea.append(article);


}

// Removes all higlighting from resume buttons
function resetHighlightOnResumeButtons() {
    // Select resume buttons and assign
    let selectionButtons = $('.detailSelection');

    // For each result
    selectionButtons.each(function(){
        // Declare this for use
        let currentButton = $(this);
        // Remove the highlight class from the item
        currentButton.removeClass('detailSelected');
    })
}

// Upon clicking a table row
$('tr').on('click', function () {
    let jobID = $(this).attr('data-jobDetail');

    // Clear the text area and display the details of the clicked job
    clearAndDisplayJobDetails(jobID);
    console.log($('.detailSelection'));

    
    // Remove all styles for current higlighting
    resetHighlightOnResumeButtons();
    // Apply a style to the selected item
    $(this).addClass('detailSelected');

});



$(document).ready(function () {
    console.log('connected to resume!');

});