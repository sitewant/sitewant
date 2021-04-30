/**
 *  Planning 網站企劃 
 */

 $(function()
 {   
     $('#button1 p').css('color','rgb(116, 116, 116)');
     
     $('.button-item svg').hide();
     $('#button-svg1').show();
     $('.button button').on('click',function()
     {

         $('.button-item svg').hide();
         
         $(`#button-svg${$(this).attr("id").substr(6)}`).show();
         $('.button-item ').removeClass('nohover');
         $(`#${$(this).attr("id")}`).addClass('nohover');
         $('.button-text').css('color','#000');
         $(`#${$(this).attr("id")} p`).css('color','rgb(116, 116, 116)');
         
 
     
         $('.section').removeClass('active');
         $(`.section-content${$(this).attr("id").substr(6)}`).addClass('active');
 
         
 
     })
    
     $('.bottom-button button').on('click',function()
     {
         
         $("html, body").scrollTop(0);
         $('.section').removeClass('active');
         $(`.section-content${$(this).attr("id").substr(6)}`).addClass('active');
         $('.button-item svg').hide();
         
         $(`#button-svg${$(this).attr("id").substr(6)}`).show();
         $('.button-text').css('color','#000');
         $(`#${$(this).attr("id")} p`).css('color','rgb(116, 116, 116)');
         // console.log($(this).attr("id").substr(6));
         $('.button button').removeClass('active');
         $(`#button${$(this).attr("id").substr(6)}`).addClass('active');
         
         $('.button-item ').removeClass('nohover');
         $(`#${$(this).attr("id")}`).addClass('nohover');
         
 
     })
 
 
 })
 
 
 $(function()
 {
     var imgID = 0 /* 第一張圖的index */
     $('.arrow-right').on('click',function()
     {
         var parent = $(this).parent()
         var parentID = parent[0].id /* ul id */
         var imgLists = $(this).siblings().children();
         var imgListLength = $(imgLists).length;

         
 
         if(imgID < imgListLength){
 
             
             var childID = imgID + 1 /* 直接指第幾張圖 跟INDEX不同 */
 
             $('#'+parentID+' li').removeClass('pictureShow');
 
 
             $('#'+parent[0].id +' li:nth-child(' + childID + ')').addClass('pictureShow');
 
             if(imgID>0)
             {
                 $(this).siblings('.arrow-left').removeClass('displayNone');
             }
             
             
             imgID = imgID + 1 /* 下一張圖的index 是前一張 +1 */
             console.log(imgID);
 
         }else if(imgID===imgListLength){
             
             $(this).addClass('displayNone');
         }    
     })
     
     
 
 
     $('.arrow-left').on('click',function()
     {
         var parent = $(this).parent();
         var parentID = parent[0].id;
         var imgLists = $(this).siblings().children();
         var imgListLength = $(imgLists).length;
         
         
        
         if(imgID===1)
         {
             $(this).addClass('displayNone');
             
         }
         else
         {
             imgID=imgID - 1;
             var childID = imgID ;
             $('#'+parent[0].id +' li').removeClass('pictureShow');
             $('#'+parent[0].id +' li:nth-child(' + childID + ')').addClass('pictureShow');
         }
        
     })
 

    
     
 
     
     
         // 放大鏡-單張
 
     $('.icon-searchP1').on('click',function()
     {
        
         console.log($(this).prev().children()[0].id);
         let PicName = $(this).prev().children()[0].id;
 
         
         $('.bigP').removeClass('displayNone');
         
         
         $('.bigP img').prop('src',`/assets/planning/${PicName}/${PicName}1-2.png`);
         $('body').addClass('planningFrozen');
        
     })
     $('.bigPremove').on('click',function()
     {
         $('.bigP').addClass('displayNone');
          $('body').removeClass('planningFrozen');
     })
 
     $('.icon-searchP1White').on('click',function()
     {
        
         console.log($(this).prev().children()[0].id);
         let PicName = $(this).prev().children()[0].id;
 
         
         $('.bigP').removeClass('displayNone');
         $('.bigP').addClass('white');
         $('.bigPicture').addClass('white');
         
         $('.bigP img').prop('src',`/assets/planning/${PicName}/${PicName}1-2.png`);
         $('body').addClass('planningFrozen');
        
     })
     $('.bigPremove').on('click',function()
     {
         $('.bigP').addClass('displayNone');
          $('body').removeClass('planningFrozen');
          $('.bigP').removeClass('white');
         $('.bigPicture').removeClass('white');
     })
 
 
    
    
 })
 
 
 // 照片
 $(function()
 {
     $('.member-profile').on('mouseenter',function()
     {
         $(this).addClass('picHover');

         let memberId=$(this)[0].id;
 
         $(`img.${memberId}`).attr('src',`./assets/planning/members/${memberId}-2.jpg`);
     })
 
     $('.member-profile').on('mouseleave',function()
     {
         $(this).removeClass('picHover');
         let memberId=$(this)[0].id;
         $(`img.${memberId}`).attr('src',`./assets/planning/members/${memberId}-1.jpg`);
     })
 
 
 })
 
 