'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);

}
function addProject(e){
	//console.log("cheerios for foolios");
	//console.log(e);

	var html = '<a href=# class="thumbnail">' + 
	 '<img src="' + e['image'] + '"class="detailsImage">' +
	 '<p>' + e['title'] + '</p>' +
	 '<p><small>' + e['date'] + '</small></p>' + 
	 '<p><small>' + e['summary'] + '</small></p></a>';
        
	$("#project"+e.id +" .details").html(html);

}
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	$.get("/project/"+idNumber, addProject);

	console.log("/project/" + idNumber);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */

function addRandomColors(e) {

        var colors = e.colors.hex;

	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);


		
}
function randomizeColors(e) {
	console.log("User clicked on color button");
        e.preventDefault();

	$.get("/palette", addRandomColors); 
}
