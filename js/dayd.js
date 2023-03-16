const dayd = document.querySelector('.h2-dayd');

function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var week = new Array('일','월','화','수','목','금','토');


    dayd.innerHTML = year + "년 " + month + "월 " + day + "일 " + week[date.getDay()] + "요일";
}
function init2(){
    setInterval(getToday, 1000);
}


init2();
