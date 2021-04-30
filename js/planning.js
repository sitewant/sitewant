/**
 *  Planning 網站企劃 
 */

$(function () {
    $('#button1 p').css('color', 'rgb(116, 116, 116)');

    $('.button-item svg').hide();
    $('#button-svg1').show();
    $('.button button').on('click', function () {

        $('.button-item svg').hide();

        $(`#button-svg${$(this).attr("id").substr(6)}`).show();
        $('.button-item ').removeClass('nohover');
        $(`#${$(this).attr("id")}`).addClass('nohover');
        $('.button-text').css('color', '#000');
        $(`#${$(this).attr("id")} p`).css('color', 'rgb(116, 116, 116)');



        $('.section').removeClass('active');
        $(`.section-content${$(this).attr("id").substr(6)}`).addClass('active');



    })

    $('.bottom-button button').on('click', function () {

        $("html, body").scrollTop(0);
        $('.section').removeClass('active');
        $(`.section-content${$(this).attr("id").substr(6)}`).addClass('active');
        $('.button-item svg').hide();

        $(`#button-svg${$(this).attr("id").substr(6)}`).show();
        $('.button-text').css('color', '#000');
        $(`#${$(this).attr("id")} p`).css('color', 'rgb(116, 116, 116)');
        // console.log($(this).attr("id").substr(6));
        $('.button button').removeClass('active');
        $(`#button${$(this).attr("id").substr(6)}`).addClass('active');

        $('.button-item ').removeClass('nohover');
        $(`#${$(this).attr("id")}`).addClass('nohover');


    })


})


$(function () {
    var imgID = 1
    var targetID = '';
    $('.arrow-right').on('click', function () {
        
        var parent = $(this).parent()
        var parentID = parent[0].id 
         
        if (targetID == parentID || targetID == '') {
            targetID = parentID;
        } else {
            imgID = 1;
            $('#' + targetID).children('.arrow-left').addClass('displayNone');
            $('#' + targetID).children('.arrow-right').removeClass('displayNone');

            $('.' + targetID).removeClass('pictureShow');
            $('.' + targetID + ':nth-child(' + 1 + ')').addClass('pictureShow');
            targetID = parentID;

            
        }

        var imgListLength = $("#" + parentID).children('li').length;
        
        if (imgID < imgListLength) {

            var childID = imgID + 1

            $('.' + parentID).removeClass('pictureShow');
            $('.' + parentID + ':nth-child(' + childID + ')').addClass('pictureShow');

            if (imgID > 0) {
                $(this).siblings('.arrow-left').removeClass('displayNone');
            }


            imgID = imgID + 1
            if (imgID == imgListLength) {

                $(this).addClass('displayNone');
            }

        }


    })



    $('.arrow-left').on('click', function () {
        var parent = $(this).parent()
        var parentID = parent[0].id 

        if (targetID == parentID || targetID == '') {
            targetID = parentID;
        } else {
            imgID = 1;
            $('#' + targetID).children('.arrow-left').addClass('displayNone');
            $('#' + targetID).children('.arrow-right').removeClass('displayNone');

            $('.' + targetID).removeClass('pictureShow');
            $('.' + targetID + ':nth-child(' + 1 + ')').addClass('pictureShow');
            targetID = parentID;
        }

        var imgListLength = $("#" + parentID).children('li').length;

        if (imgID <= imgListLength) {

            var childID = imgID - 1

            $('.' + parentID).removeClass('pictureShow');
            $('.' + parentID + ':nth-child(' + childID + ')').addClass('pictureShow');

            
            
            if (imgID == imgListLength) {

                $(this).siblings('.arrow-right').removeClass('displayNone');
            }

            imgID = imgID - 1
            if (imgID == 1) {
                $(this).addClass('displayNone');
            }

        }



    })


    // 放大鏡-單張

    $('.icon-search').on('click', function () {

        let PicName = $(this).parent().children('.pictureShow').children()[0].src;

        $('.bigP').removeClass('displayNone');

        $('.bigP img').prop('src', PicName);
        $('body').addClass('planningFrozen');

    })

    $('.bigPremove').on('click', function () {
        $('.bigP').addClass('displayNone');
        $('body').removeClass('planningFrozen');
    })




})

