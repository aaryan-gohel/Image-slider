// function showImg(){
//     let img=document.getElementById("selected-img").value;
//     document.getElementById("show-img-path").setAttribute('src', img);
// }

// const uploadImg = document.getElementById("uploadImg")
// let imgage = ''
// let allImages="";

// uploadImg.addEventListener("change", function () {
//     const read = new FileReader();
//     read.addEventListener("load", () => {
//         imgage = read.result;
//         document.getElementById("displayImg").style.backgroundImage = `url(${imgage})`
//     });
//     read.readAsDataURL(this.files[no])
//     allImages=read.readAsArrayBuffer(this.files);
// })

// function next() {
//     console.log(allImages);
// }



// let uploadImg=document.getElementById("loadImg")
// let displayImg= document.getElementById("displayImg")
// let arr=[];

// uploadImg.addEventListener("change",function(){
//     changeImg(this);
// })
// function changeImg(input){
//     let reader;
//     if(input.files && input.files[0])
//         {
//             reader=new FileReader();
//             reader.onload=function(e){
//                 displayImg.setAttribute('src',e.target.result)

//             }
//     reader.readAsDataURL(input.files[no])
//     arr[1]=reader.readAsDataURL(input.files[no])
//     console.log(arr[1]);

//         }

// }




const output = document.querySelector("output");
let uploadImg = document.getElementById("loadImg");
// let displayImg= document.getElementById("displayImg")
let imgArr = [];
let up = 0;
let pre = 0;
let no = 0;
let lastIndex;
let previousImg;
// console.log("current Index = "+no);
// console.log("last index= "+previousImg);

uploadImg.addEventListener("change", function () {

    const files = uploadImg.files
    for (let i = 0; i < files.length; i++) {
        imgArr.push(files[i]);
    }
})

let dImages = [];
function displayImg() {
    if (displayImg.length != 0) {
        for (let i = 0; i < imgArr.length; i++) {
            dImages[i] = ` <div class="image">
            <img src="${URL.createObjectURL(imgArr[i])}" alt="image"  >
            </div> `
            lastIndex = i;
            output.innerHTML = dImages;
        }
    }
    else {
        for (let i = 0; i < imgArr.length; i++) {
            if (i == no || i == previousImg) {
                dImages[i] = ` <div class="image" style="opacity:1;">
                                    <img src="${URL.createObjectURL(imgArr[i])}" alt="image"  >
                                </div> `
                lastIndex = i;
            }
            else {
                dImages[i] = ` <div class="image">
                                    <img src="${URL.createObjectURL(imgArr[i])}" alt="image"  >
                                </div> `
                lastIndex = i;
            }
        }
        output.innerHTML = dImages;
    }



    if (up == 0 && pre == 0) {
        dImages[no] = `<div class="image" style="opacity:1">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image">
    </div>`
        lastIndex = no;
        output.innerHTML = dImages;
    }
    else if (pre != 0) {


        if (no + 1 >= imgArr.length) {

            // let new = imgArr.length - 1
            dImages[0] = `<div class="still-image" style="opacity:1">
    <img src="${URL.createObjectURL(imgArr[0])}" alt="image" >
    </div>`
            lastIndex = 0;
            output.innerHTML = dImages;
        }
        else {
            dImages[no + 1] = `<div class="still-image" style="opacity:1">
    <img src="${URL.createObjectURL(imgArr[no + 1])}" alt="image" >
    </div>`
            lastIndex = no + 1;
            output.innerHTML = dImages;
        }
        dImages[no] = `<div class="l-image" style="opacity:1">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image">
    </div>`
        lastIndex = no;
        output.innerHTML = dImages;
    }
    else {
        if (no - 1 < 0) {

            // let new = imgArr.length - 1
            dImages[imgArr.length - 1] = `<div class="still-image" style="opacity:1">
    <img src="${URL.createObjectURL(imgArr[imgArr.length - 1])}" alt="image">
    </div>`
            output.innerHTML = dImages;
        }
        else {
            dImages[no - 1] = `<div class="still-image" style="opacity:1">
    <img src="${URL.createObjectURL(imgArr[no - 1])}" alt="image">
    </div>`
            output.innerHTML = dImages;
        }

        dImages[no] = `<div class="image" style="opacity:1">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image">
    </div>`
        lastIndex = no
        output.innerHTML = dImages;
    }
}
function showImg() {
    let dots = ''
    displayImg();
    for (let i = 0; i < imgArr.length; i++) {
        dots += `<span class="dot${i} dots" id="${i}" onclick="jump(${i})"></span>`

    }
    document.getElementById("dot").innerHTML = dots
    document.getElementById(lastIndex).className = "hoverd-dot"
}
function next() {
    let button = document.getElementById("button2")
    button.style.animation = "none"
    previousImg = no;
    no += 1;
    lastIndex += 1;
    if (lastIndex >= imgArr.length) {
        lastIndex = 0;
        document.getElementById(imgArr.length - 1).className = "dots"
        document.getElementById(lastIndex).className = "hoverd-dot"
    }
    else {
        document.getElementById(lastIndex).className = "hoverd-dot"
        document.getElementById(lastIndex - 1).className = "dots"
    }

    up = 1;
    pre = 0;
    if (no < imgArr.length) {

        displayImg();
    }
    else {
        no = 0;
        displayImg();
    }
    button.style.animation = "zoomm 1s linear"
}
function previous() {
    previousImg = no;
    no -= 1
    up = 0;
    pre = 1;
    document.getElementById(lastIndex).className = "dots"
    lastIndex -= 1;
    if (lastIndex < 0) {
        lastIndex = imgArr.length - 1;
        document.getElementById(lastIndex).className = "hoverd-dot"
        document.getElementById(0).className = "dots"
    }
    else {
        document.getElementById(lastIndex).className = "hoverd-dot"
        document.getElementById(lastIndex + 1).className = "dots"
    }
    if (no >= 0) {
        displayImg();
    }
    else {
        no = imgArr.length - 1;
        displayImg();
    }
}
function jump(index) {
    let images = `<div class="still-image">
    <img src="${URL.createObjectURL(imgArr[lastIndex])}" alt="image" style="display: block;">
    </div>`
    document.getElementById(lastIndex).className = "dots"
    images += `<div class="image">
    <img src="${URL.createObjectURL(imgArr[index])}" alt="image" style="display: block;">
    </div>`
    no = index;
    lastIndex = index;
    output.innerHTML = images;

    document.getElementById(index).className = "hoverd-dot"

}




