/**
 *  Planning 網站企劃 
 */

$(function()
{   
    
    $('.button button').on('click',function()
    {
        // console.log($(this));
        // console.log($(this).attr("id"));
        // console.log($(this).attr("id").substr(6));
        
        $('.button button').removeClass('active');
        $(this).addClass('active');
        
        $('.button-item ').removeClass('nohover');
        $(`#${$(this).attr("id")}`).addClass('nohover');

        

    
        $('.section').removeClass('active');
        $(`.section-content${$(this).attr("id").substr(6)}`).addClass('active');

        

    })
   
    $('.bottom-button button').on('click',function()
    {
        
        
        $('.section').removeClass('active');
        $(`.section-content${$(this).attr("id").substr(6)}`).addClass('active');

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
        console.log(imgID);
        console.log(imgListLength);
        
        if(imgID < imgListLength){
            var childID = imgID + 1 /* 直接指第幾張圖 跟INDEX不同 */

            $('#'+parent[0].id +' li:nth-child(' + childID + ')'-1).removeClass('pictureShow');
            
            $('#'+parent[0].id +' li:nth-child(' + childID + ')').addClass('pictureShow');

            if(imgID>0)
            {
                $(this).siblings('.arrow-left').removeClass('displayNone');
            }
            
            
            imgID = imgID + 1 /* 下一張圖的index 是前一張 +1 */


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
        
       
        console.log(imgID);
        if(imgID===1)
        {
            $(this).addClass('displayNone');
            
            // $(this).addClass('displayNone');   
        }
        else
        {
            // console.log(imgID);
            imgID=imgID - 1;
            var childID = imgID ;
            // console.log(childID);
            $('#'+parent[0].id +' li').removeClass('pictureShow');
            $('#'+parent[0].id +' li:nth-child(' + childID + ')').addClass('pictureShow');
        }

    })
    

   
   
})

// $(function()
// {
//     var imgID = 0
//     $('.arrow-right').on('click',function()
//     {
//         imgID = imgID + 1
//         console.log($(this).siblings('.picture'))
//         var imgLists = $('.tonglixinMap')
//         $('.tonglixinMap').removeClass('pictureShow')
//         imgLists[imgID].classList.add('pictureShow')

//         return imgID

//     })
// })

        // Wireframe箭頭照片

        

//         $(function()
// {
              
        
//     let page=1;
    
    
//         $('.arrow-right').on('click',function()
//         {                  

//              page=Number($(this).siblings('img').attr('src').substr($(this).siblings('img').attr('src').indexOf(".png")-3,1));
           
//              console.log($(this).siblings('img').attr('src').substr($(this).siblings('img').attr('src').indexOf(".png")-4,2));
//              console.log(page);
             
//              page=page+1;
//              console.log(page);

                           
            
//             console.log(page);

//             let picName = $(this).next().prop('class');
            

//             console.log($(this).siblings('img').attr('src'));
//             console.log($(this).siblings('img').attr('src').indexOf(".png")-2);
//             console.log($(this).siblings('img').attr('src').substr($(this).siblings('img').attr('src').indexOf(".png")-3,1));


//             console.log($(this).prop('class'));
            
//             if(page>1)
//             {   
//                 $(this).siblings('.arrow-left').removeClass('displayNone');
//                 $(this).siblings('.arrow-left').removeClass('displayNone');
//                 $(`img.${picName}`).attr('src',`./images/picture/${picName}/${picName}${page}-1.png`);

//                 if(picName==='wireframe')
//                 {
                    
//                     if(page===12)
//                     {
//                         $(this).addClass('displayNone'); 
                        
//                     }
                    
//                 }
//                 if(picName==='設計規範')
//                 {
//                     if(page===3)
//                     {
//                         $(this).addClass('displayNone'); 
//                     }
//                 }
//                 if(picName==='mockflow')
//                 {
//                     if(page===2)
//                     {
//                         $(this).addClass('displayNone'); 
//                     }
//                 }

//             }else
//             {
//                 $(this).siblings('.arrow-left').addClass('displayNone');
//             }
//         });

              
//         $('.icon-search').on('click',function()
//         {
//             console.log($(page));
//             console.log($('picture>img').prop('class'));
//             console.log($(this).prev().prop('class'));
            
            
            
//             let PicName=$(this).prev().prop('class');

//             $('.bigP').removeClass('displayNone');
//             $('.bigP img').prop('src','./images/picture/wireframe/wireframe1-2.png');
//             $('.bigP img').prop('src',`./images/picture/${PicName}/${PicName}${page}-2.png`);

//             $('body').addClass('frozen');

//             $('.bigPremove').on('click',function()
//              {
        
//                  $('.bigP').addClass('displayNone');
//                  $('body').removeClass('frozen');
//              })
            

            
//         })


//         $('.arrow-left').on('click',function()
//         {
//             page=page-1;
//             let picName = $(this).next().next().prop('class');
            
//             $('.arrow-right').removeClass('displayNone');
//             $('.arrow-right')siblings.removeClass('displayNone');
//             $(`img.${picName}`).attr('src',`./images/picture/${picName}/${picName}${page}-1.png`);
           
//             if(page===1)
//             {
//                 $('.arrow-left').addClass('displayNone');
//             }
            
//         })
        

//         $('.icon-searchP1').on('click',function()
//         {
            
//             let PicName=$(this).prev().prop('class');
//             $('.bigP').removeClass('displayNone');

//             $('.bigP img').prop('src',`./images/picture/${PicName}/${PicName}1-2.png`);

//             $('body').addClass('frozen');

//             $('.bigPremove').on('click',function()
//              {
        
//                  $('.bigP').addClass('displayNone');

//                  $('body').removeClass('frozen');
//              })


//         })
//         $('.icon-searchP1White').on('click',function()
//         {
            
//             let PicName=$(this).prev().prop('class');
//             $('.bigP').removeClass('displayNone');
//             $('.bigP').addClass('white');
//             $('.bigPicture').addClass('white');

//             $('.bigP img').prop('src',`./images/picture/${PicName}/${PicName}1-2.png`);

//             $('body').addClass('frozen');

//             $('.bigPremove').on('click',function()
//              {
        
//                  $('.bigP').addClass('displayNone');
//                  $('.bigP').removeClass('white');
//                  $('.bigPicture').removeClass('white');

//                  $('body').removeClass('frozen');
//              })


//         })

        

    
// })










    //  成功版  
        
// $(function()
// {
//     let page=1;
    
//     $('.arrow-right').on('click',function()
//     {
//        page=page+1;
//        let picName = $(this).next().prop('class');
       
       

                        
//        if(page>1)
//         {   
            
//             // console.log($(this).next().prop('class'));
//             $('.arrow-left').removeClass('displayNone');
            
//             $(`img.${picName}`).attr('src',`./images/picture/${picName}/${picName}${page}-1.png`);
//         }
//         if(picName==='wireframe')
//         {
//                 if(page===12)
//             {
//                 $('.arrow-right').addClass('displayNone');

//             }
//         }
//         if(picName==='設計規範')
//         {
//             if(page===3)
//             {
//                 $('.arrow-right').addClass('displayNone');

//             }
//         }
//         if(picName==='mockflow')
//         {
//             if(page===2)
//             {
//                 $('.arrow-right').addClass('displayNone');

//             }
//         }
        
        
        
        
        
//     })
//     $('.arrow-left').on('click',function()
//     {
//         page=page-1;
//         let picName = $(this).next().next().prop('class');
        

//         $('.arrow-right').removeClass('displayNone');
//         $(`img.${picName}`).attr('src',`./images/picture/${picName}/${picName}${page}-1.png`);
       
//         if(page===1)
//         {
//             $('.arrow-left').addClass('displayNone');
//         }
        
//     })
// })


//  點擊放大鏡照片放大

// $(function()
// {
//     $('.icon-search').on('click',function()
// {
//     // console.log($(this).prev().prop('src'));
//     let picName=$(this).prev().prop('class');
    
//     $('.bigP img').attr('src',`./images/picture/${picName}/${picName}-2.png`)

//     $('.bigP').removeClass('displayNone');
// })
//     $('.bigPremove').on('click',function()
//     {
        
//         $('.bigP').addClass('displayNone');
//     })


// })


// 照片
$(function()
{
    $('.member-profile').on('mouseenter',function()
    {
        $(this).addClass('picHover');
        // console.log($('.member-pictur img').attr("src"));
        // console.log($(this)[0].id);
        let memberId=$(this)[0].id;

        // $("img.tammy").attr('src','./images/members/tammy-2.jpg');
        $(`img.${memberId}`).attr('src',`./images/members/${memberId}-2.jpg`);
    })

    $('.member-profile').on('mouseleave',function()
    {
        $(this).removeClass('picHover');
        // $("img.tammy").attr('src','./images/members/tammy-1.jpg');
        let memberId=$(this)[0].id;
        $(`img.${memberId}`).attr('src',`./images/members/${memberId}-1.jpg`);
    })


})

