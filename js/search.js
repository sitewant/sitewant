
// 全部 文章 講義 區塊切換
$(document).ready(function() {
    $(".bottom-default").click(function() {
        $(".sort-section").show();
        
        
    })
    $(".bottom-article").click(function() {
        $("html, body").scrollTop(0);
        $('.sort-item a').removeClass('sort-itemShow');
        $('.bottom-article').addClass('sort-itemShow');
        $(".sort-article").show();
        $(".sort-handouts").hide();
    })

    $(".bottom-handouts").click(function() {
        $("html, body").scrollTop(0);
        $('.sort-item a').removeClass('sort-itemShow');
        $('.bottom-handouts').addClass('sort-itemShow');
        $(".sort-handouts").show();
        $(".sort-article").hide();

    })
});

// 全部 文章 講義 按鈕變色
// $(function(){
    
//     $('.sort-item a').on('click',function(){
//        console.log(this);
//        $("html, body").scrollTop(0);
//     })
// })

// $(function(){
//     let lii=$('ul.sort li');
//     $(lii. eq(0) .addClass('active').find('a').attr('href')).siblings('.sort-section').hide();

//     lii.click(function(){

//     })

// })


// 新增 索引結果-文章
$(function(){
    
    let array=[];
    $('.articleContent').each(function(index, value){
        array.push(value.innerText);
        
    })
    
    function showMore(len){
        $('.articleContent').each(function(index,value){
            $(this).html(array[index]);
            // console.log($(this).html().length);
            if($(this).html().length > len){
                let str = $(this).html().substring(0,len) + '......';
                $(this).html(str);
            }
            
        })
    }


    function render(){
        if($(window).width() > 1112){
            showMore(200);
        }else{
            showMore(50);
        }
    }
    
    
        $(window).resize(function(){
            render();
        })
        render();
    

})