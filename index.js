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



uploadImg.addEventListener("change", function () {

    const files = uploadImg.files
    for (let i = 0; i < files.length; i++) {
        imgArr.push(files[i]);
    }
})

function displayImg() {

    let dImages = '';
    for (let i = 0; i < imgArr.length; i++) {
        dImages += ` <div class="image">
    <img src="${URL.createObjectURL(imgArr[i])}" alt="image" style="display: none;" >
    </div> `
        output.innerHTML = dImages;
    }

    if (up == 0 && pre == 0) {
        let images = `<div class="image">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image" style="display: block;">
    </div>`
        output.innerHTML = images;


    }
    else if (pre != 0) {

        let images = ''
        if (no + 1 >= imgArr.length) {

            // let new = imgArr.length - 1
            images += `<div class="still-image">
    <img src="${URL.createObjectURL(imgArr[0])}" alt="image" style="display: block;">
    </div>`
            output.innerHTML = images;
        }
        else {
            images += `<div class="still-image">
    <img src="${URL.createObjectURL(imgArr[no + 1])}" alt="image" style="display: block;">
    </div>`
            output.innerHTML = images;
        }

        images += `<div class="l-image">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image" style="display: block;">
    </div>`
        output.innerHTML = images;



    }
    else {
        let images = ''
        if (no - 1 < 0) {

            // let new = imgArr.length - 1
            images += `<div class="still-image">
    <img src="${URL.createObjectURL(imgArr[imgArr.length - 1])}" alt="image" style="display: block;">
    </div>`
            output.innerHTML = images;
        }
        else {
            images += `<div class="still-image">
    <img src="${URL.createObjectURL(imgArr[no - 1])}" alt="image" style="display: block;">
    </div>`
            output.innerHTML = images;
        }

        images += `<div class="image">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image" style="display: block;">
    </div>`
        output.innerHTML = images;
    }



}
function showImg() {
    let dots=''
    displayImg();
    for (let i = 0; i < imgArr.length; i++) {
        dots+=`<span class="dot${i} dots" id="dot${i}" onclick="jump(${i})"></span>`
        
    }
    document.getElementById("dot").innerHTML=dots
}
function next() {
    let button= document.getElementById("button2")
    button.style.animation="none"
    no += 1;
    up = 1;
    pre = 0;
    if (no < imgArr.length) {

        displayImg();
    }
    else {
        no = 0;
        displayImg();
    }
//                 displayImg.setAttribute('src',e.target.result)
button.style.animation="zoomm 1s linear"

    // setTimeout(()=>{
    //     button.style.transform='translatex(10px)'
    // },500)
    // setTimeout(()=>{
    //     button.style.transform='translatex(0px)'
    // },500)
}
function previous() {
    no -= 1
    up = 0;
    pre = 1;
    if (no >= 0) {
        displayImg();
    }
    else {
        no = imgArr.length - 1;
        displayImg();
    }

}
function jump(index){
    let images = `<div class="image">
    <img src="${URL.createObjectURL(imgArr[index])}" alt="image" style="display: block;">
    </div>`
    output.innerHTML = images;


}




