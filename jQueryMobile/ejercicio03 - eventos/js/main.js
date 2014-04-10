/*$(function() {
	$("footer").load('include/commonFooter.html');
});*/

$("#index, #page2-view1, #page2-view2").bind( "pagebeforecreate", function( event ) {
	console.log("pagebeforecreate");
	var htmlFooter = "<h4>This is my footer 1</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});

$("#index, #page2-view1, #page2-view2").bind( "pageinit", function( event ) {
	console.log("pageinit");
	var htmlFooter = "<h4>This is my footer 2</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
/*
	$("footer").load("include/commonFooter.html", function(){
		$("#footer").trigger("create");
	});
*/
});

$("#index, #page2-view1, #page2-view2").bind( "pagecreate", function( event ) {
	console.log("pagecreate");
	var htmlFooter = "<h4>This is my footer 3</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});

$("#index, #page2-view1, #page2-view2").bind( "pagebeforeshow", function( event ) {
	console.log("pagebeforeshow");
	var htmlFooter = "<h4>This is my footer 4</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});

$("#index, #page2-view1, #page2-view2").bind( "pageshow", function( event ) {
	console.log("pageshow");
	var htmlFooter = "<h4>This is my footer 5</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});

$("#index, #page2-view1, #page2-view2").bind( "pagebeforehide", function( event ) {
	console.log("pagebeforehide");
	var htmlFooter = "<h4>This is my footer 6</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});

$("#index, #page2-view1, #page2-view2").bind( "pagehide", function( event ) {
	console.log("pagehide");
	var htmlFooter = "<h4>This is my footer 7</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});

$("#index, #page2-view1, #page2-view2").bind( "pagebeforechange", function( event ) {
	console.log("pagebeforechange");
	var htmlFooter = "<h4>This is my footer 6</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});

$("#index, #page2-view1, #page2-view2").bind( "pagechange", function( event ) {
	console.log("pagechange");
	var htmlFooter = "<h4>This is my footer 6</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});

$("#index, #page2-view1, #page2-view2").bind( "pagechangefailed", function( event ) {
	console.log("pagechange");
	var htmlFooter = "<h4>This is my footer 6</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);
});
