var oTxt = document.getElementById('txt');
var oBtn = document.getElementById('btn');
var oList = document.getElementById('list');

var fruits = ["孔子", "老子", "庄子", "孟子", "荀子", "月光", "日光", "日月为明", "简单"];
//按键抬起事件
oTxt.addEventListener('keyup', function () {

    var keyWord = oTxt.value;  
    if (keyWord) {
        var fruitList = searchByRegExp(keyWord, fruits);
        renderFruits(fruitList);
    }
    else {
        var oList = document.getElementsByTagName("li");
        clearUl(oList);
        return;
    }

}, false);


function checkCharacter(keyWord) {
    // var etest = oTxt.value;
    if (keyWord == "" || keyWord == " " || keyWord == 'null' || keyWord == undefined) {
        oList.style.display = "none";
        return false;
    } else {
        oList.style.display = "block";
    }
}

function renderFruits(list) {
    if (!(list instanceof Array)) {
        return; //判断不是数组就return出去
    }
    oList.innerHTML = '';
    var len = list.length;
    var item = null;
    for (var i = 0; i < len; i++) {
        item = document.createElement('li'); //创建一个li标签
        item.innerHTML = list[i]; //在li标签里面添加内容
        oList.appendChild(item); //把li标签添加到ul中

    }
    //选中后处理数据
    showClickTextFunction();
}


//正则匹配
//keyword是输入的值,list是存储数据的数组
function searchByRegExp(keyWord, list) {
    if (!(list instanceof Array)) {
        return;
    }
    var len = list.length;
    var arr = [];
    var reg = new RegExp(keyWord);
    for (var i = 0; i < len; i++) {
        //如果字符串中不包含目标字符会返回-1
        if (reg && list[i].match(reg)) {
            //通过math方法判断数组内是否存在和输入的值一样的数据
            arr.push(list[i]);
        }
    }
    return arr;
}


//选中后处理数据
var showClickTextFunction = function () {
    //alert(this.innerText + "---" + this.getAttribute("code"));  
    //当鼠标点击li标签的时候，li里的内容就被存入到input标签里面
    var liS = oList.getElementsByTagName("li");

    for (var i = 0; i < liS.length; i++) {
        liS[i].onclick = function () {
            oTxt.value = this.innerHTML;
            clearUl(liS);
        }
    }

   
}
 function clearUl(liS) {
        for (var j = liS.length - 1; j >= 0; j--) {
            oList.removeChild(liS[j]);
        }
    }
