// ===========================================
// Profile page
// ===========================================



$(document).ready((function () {

    $.ajax({
        url: "https://api.coinmarketcap.com/v2/ticker/?limit=10",
        method: "GET"
    }).then(function (res) {
        let cryptos = res.data;
        console.log(cryptos)



    });
}));
// ===========================================
// ===========================================