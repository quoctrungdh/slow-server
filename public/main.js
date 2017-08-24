$(document).ready(function() {
	$('.console-btn').on('click', function () {
		console.log('log');
	})

	$('.sync').on('click', function() {
		$.ajax({
			url : "/users",
			type : "get",
			async: false
		})
	})

	$('.async').on('click', function() {
		$.ajax({
			url : "/users",
			type : "get",
		})
	})
})