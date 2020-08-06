window.onload = function () {

    /**********轮播图开始**********/
    let lunboImg = document.querySelector("#lunbo-img");
    let leftButton = document.querySelector("#lunboBtnLeft");
    let rightButton = document.querySelector("#lunboBtnRight");
    let ulSpot = document.querySelector("#lunboUlSpot");
    let arrLbButton = ulSpot.querySelectorAll("button");
    //console.log(arrLbButton.length);
    let index = 1;
    rightButton.onclick = function () {
        index++;
        if (index === (arrLbButton.length + 1)){
            index = 1;
            arrLbButton[0].className = "spot";
        }
        if (index === 1){
            arrLbButton[arrLbButton.length - 1].className = "";
        }else{
            arrLbButton[index - 1].className = "spot";
            arrLbButton[index - 2].className = "";
        }
        lunboImg.src = "./image/轮播" + index + ".webp";
    };
    leftButton.onclick = function () {
        index--;
        if (index === 0){
            index = arrLbButton.length;
            arrLbButton[arrLbButton.length - 1].className = "spot";
        }
        if (index === arrLbButton.length){
            arrLbButton[0].className = "";
        }else {
            arrLbButton[index - 1].className = "spot";
            arrLbButton[index].className = "";
        }
        lunboImg.src = "./image/轮播" + index + ".webp";
    };
    for (let i = 0;i < arrLbButton.length;i++){
        arrLbButton[i].onmouseenter = function () {
            lunboImg.src = "./image/轮播" + (i + 1) + ".webp";
            for (let i = 0;i < arrLbButton.length;i++){
                arrLbButton[i].className = "";
                this.className="spot";
            }
        };
    };
    /**********轮播图结束**********/

    /**********图片切换开始**********/
    let npBottom = document.querySelector(".np-bottom");
    let xpsfImg = document.querySelectorAll(".img-text");
    let queryImg = document.querySelectorAll(".query-img");
    console.log(queryImg.length);
    console.log(xpsfImg.length);
    for (let i = 0;i < queryImg.length;i++){
        xpsfImg[i].onmouseover = function () {
            console.log(i);
            queryImg[i].src = "image/img-text" + (i+1) + "-" + (i+1) +".webp";
            console.log(queryImg[i].src);
        };
        xpsfImg[i].onmouseleave = function () {
            queryImg[i].src = "image/img-text" + (i+1) +".webp";
            console.log(queryImg[i].src);
        }
    }
    /**********图片切换结束**********/
};