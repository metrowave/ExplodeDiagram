$(document).on("click", ".boomButton", function () {
	$(this).css("display", "none");
	$(".resetButton").css("display", "block");
	$(".enhance").css("display", "block");
	$(".explodingFrame").addClass("boom");
});

$(document).on("click", ".resetButton", function () {
	$(this).css("display", "none");
	$(".enhance").css("display", "none");
	$(".boomButton").css("display", "block");
	$(".explodingFrame").removeClass("boom");
	$(".explodingFrame").removeClass("enhanced");
});

$(document).on("click", ".enhance", function () {
	$(this).css("display", "none");
	$(".explodingFrame").addClass("enhanced");
});
