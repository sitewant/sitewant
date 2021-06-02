/**
 * Header 導覽列向下滾動時隱藏，向上滾動時顯現
 */

 lastScrollY = 0; /* 已經滾動的高度 */
 window.addEventListener('scroll', function () {
     var st = this.scrollY; /* 現在滾動的高度 */
     /* 判斷是向上捲動，而且捲軸超過 200px */
     if (st < lastScrollY) {
         $("body").removeClass('hideUp');
         $(".bread").addClass("breadshow");
     } else {
         $("body").addClass('hideUp');
         $(".bread").removeClass("breadshow");
     }
     lastScrollY = st;
 });
 
 
 $(function () {
     $('.logo').on('mouseenter', function () {
         $('.logo-img').hide();
         $('.logo-text').show();
     })
 
     $('.logo').on('mouseleave', function () {
         $('.logo-img').show();
         $('.logo-text').hide();
     })
 })
 
 
 $(function () {
     $('.menu-item-search').on('mouseenter', function () {
 
         $(this).addClass('test');
 
     })
     $('.menu-item-search').on('mouseleave', function () {
 
         $(this).removeClass('test');
 
     })
 
 
 
     $('.menu-item-search').on('click', function () {
         $(this).addClass('change');
 
     })
 })
 
 
 $(function () {
     $('.dropdown-list1').on('mouseover', function () {
 
         $('.dropdown-list1').css('background', '#FFF ');
         $(this).css('background', '#FFD100 ');
         $('.dropdown-list1').parent().css('height', '+200');
         $('.menu-item-search').addClass('active2');
     })
 })
 
 
 $(function () {
     $('.menu-item-search').click(function () {
 
         $(this).addClass('active');
         $('.modal').addClass('open');
         $('body').addClass('frozen');
 
     })
 
     $(document).mouseup(function (e) {
         var container = $(".header"); // 這邊放你想要排除的區塊
         var menu = $(".menu-item-search");
         if (!container.is(e.target) && container.has(e.target).length === 0) {
             menu.removeClass('active');
             $('.modal').removeClass('open');
             $('body').removeClass('frozen');
             $('.menu-item-search').removeClass('change');
         }
     });
 })
 
 
 
 $(function () {
     $('.menu-dropdown2 ').hide();
     $('.dropdown-list1').on('mouseover', function () {
 
         $('.menu-dropdown2 ').hide();
 
         $(`#dropdownList2-${$(this).attr('id').substr(14)}`).show();
     })
 
 
 })

//  新增header手機
//  header手機
$(function(){
   
    $('.mobile-menuItem').on('click',function()
    {
        $('.mobile-menuItem').css('background','#7362A7');
        $('.mobile-menuItem').css('color','#fff');
        if($(this).children().children().hasClass('long')){
        $('.mobile-menuItem2').removeClass('long');
            
            
           
        }else{
            $('.mobile-menuItem2').removeClass('long');
            $(this).children().children().addClass('long');
            $(this).css('background','#fff');
            $(this).css('color','#000');
        }
          
    })


    $('.mobileIcon-search').on('click',function(){
        $('.mobile-menu').addClass('open');
    })
    $('.mobile-menu-remove').on('click',function(){
        $('.mobile-menu').removeClass('open');
        $('.mobile-menuItem').css('background','#7362A7');
        $('.mobile-menuItem').css('color','#fff');
        $('.mobile-menuItem2').removeClass('long');
    })

    
    $('.mobileIcon-button').on('click',function(){
        $('.mobile-yellow-menu').addClass('open');
                 
    })


  $('.mobile-yellow-menu-remove').on('click',function(){
    $('.mobile-yellow-menu').removeClass('open');
    $('.mobile_index_menuBtn').css('opacity','1');
    $('.mobile-yellow-menuItem').show();
    $('.mobile-contactForm').removeClass('open');
    $('.mobile-yellow-menuItemCont span').css('color','#000');
    $('.mobile-yellow-menuItemCont').css('background','rgb(255, 209, 0)');
  })


  $('.mobile-yellow-menuItemCont').on('click',function(){
      $('.mobile-yellow-menuItem').hide();
      $('.mobile_index_menuBtn').css('opacity','0');
      $('.mobile-contactForm').addClass('open');
      $(this).css('background','rgb(109, 94, 158)');
      $('.mobile-yellow-menuItemCont span').css('color','#fff');

    

  })



})







$(window).resize(function() {
    if($(window).width()>768){
        $('.mobile-yellow-menu').removeClass('open');
        // $('.mobile-contactForm').removeClass('open');
         $('.mobile-menu').removeClass('open');
         $('.mobile-menuItem').css('background','#7362A7');
        $('.mobile-menuItem').css('color','#fff');
        $('.mobile-menuItem2').removeClass('long');

    // 新增0510
        $('.mobile-yellow-menu').removeClass('open');
        $('.mobile_index_menuBtn').css('opacity','1');
        $('.mobile-yellow-menuItem').show();
        $('.mobile-contactForm').removeClass('open');
        $('.mobile-yellow-menuItemCont span').css('color','#000');
        $('.mobile-yellow-menuItemCont').css('background','rgb(255, 209, 0)');
        }

});




 
 // 關於頁面：聯絡我們表單滑動
 $(function () {
     $('.section-move').on('click', function () {
         $(this).addClass('open');
         $(document).click(function (e) {
             var container = $(".section-move"); // 這邊放你想要排除的區塊
             if (!container.is(e.target) && container.has(e.target).length === 0) {
                 $('.section-move').removeClass('open')
             }
         });
     })
 })


//  新增 文章列表

$(window).resize(function(){
    let articleNum = $('.article_Content p').length;

    
    if($(window).width()<1112){

        for(i=0;i<articleNum;i++){
            let articleLength = $('.article_Content p')[i].innerText.length;
            
            if(articleLength>50){

                let articleLengthLimit = $('.article_Content p')[i].innerText.substr(0,30);
                $('.article_Content p')[i].innerText=`${articleLengthLimit}...`;
                
            }

            
            
      
      
        }

    
    }

})

 
 
 // FAQ頁面：點擊展開
 $(function () {
 
     $(".answer-family-q").click(function () {
 
         if ($(this).hasClass("long")) {
             $(".answer-family-q").removeClass("long");
 
         } else {
 
             $(".answer-family-q").removeClass("long");
             $(this).addClass("long");
         }
     })
 })