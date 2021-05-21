$(document).ready(function() {
    $(".bottom-default").click(function() {
        $("sort-section").show();
    })
    $(".bottom-article").click(function() {
        $(".sort-article").show();
        $(".sort-handouts").hide();
    })

    $(".bottom-handouts").click(function() {
        $(".sort-handouts").show();
        $(".sort-article").hide();

    })
});