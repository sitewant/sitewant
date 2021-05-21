$(function() {
    $("#activityList").autobrowse({
        url: function(offset) {
            //請求伺服器端地址
        },
        template: function(data) {
            //非同步組裝伺服器端返回的資料
        },
        itemsReturned: function(data) {
            //返回服務端資料的長度
        },
        offset: 1,
        max: 10000,
        loader: '../assets/cover/role.png', //載入的圖示,
        useCache: false, //使用快取
        expiration: 1, //過期時間
        sensitivity: 2000, //觸發下一頁的差值
        finished: function() { $(this).append('<p style="text-align:center">載入完成，沒有更多活動了</p>') } //沒有資料時的提示
    })
})