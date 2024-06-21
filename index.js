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
let dImages = [];
let up = 0;
let pre = 0;
let no = 0;
let lastIndex;
let previousIndex = 0;




uploadImg.addEventListener("change", function () {

    const files = uploadImg.files
    for (let i = 0; i < files.length; i++) {
        imgArr.push(files[i]);
    }

    for (let i = 0; i < imgArr.length; i++) {
        dImages[i] = ` <div class="image">
    <img src="${URL.createObjectURL(imgArr[i])}" alt="image">
    </div> `
        lastIndex = i;
    }
    output.innerHTML = dImages;
    console.log(dImages);
})

function displayImg() {



    if (up == 0 && pre == 0) {
        dImages[0] = `<div class="image active">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image">
    </div>`
        lastIndex = no;
        output.innerHTML = dImages;
    }



    else if (pre != 0) {

        if (no < 0) {
            no = imgArr.length - 1;
            // let new = imgArr.length - 1
            dImages[no] = `<div class="l-image active l-animation">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image" style="display: block;">
    </div>`
            setTimeout(() => {
                dImages[previousIndex] = `<div class="still-image active">
    <img src="${URL.createObjectURL(imgArr[previousIndex])}" alt="image" style="display: block;">
    </div>`
            }, "1000")
            // lastIndex = 0;
            output.innerHTML = dImages;
        }
        else {
            setTimeout(()=>{
                dImages[previousIndex] = `<div class="still-image active">
    <img src="${URL.createObjectURL(imgArr[previousIndex])}" alt="image" style="display: block;">
    </div>`
            },"1000")
            dImages[no] = `<div class="l-image active l-animation">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image" style="display: block;">
    </div>`
            // lastIndex = no + 1;
            output.innerHTML = dImages;
        }


        lastIndex = no;
        // output.innerHTML = dImages;



    }
    else {
        let images = ''
        if (no >= imgArr.length-1) {
            no = 0;

            
            dImages[no] = `<div class="image active animation">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image">
    </div>`
    setTimeout(()=>{
        dImages[previousIndex] = `<div class="still-image active">
<img src="${URL.createObjectURL(imgArr[previousIndex])}" alt="image">
</div>`
console.log("set time out called");
    },"1000")
            output.innerHTML = dImages;
        }
        else {

            setTimeout(()=>{
                dImages[previousIndex] = `<div class="still-image active">
    <img src="${URL.createObjectURL(imgArr[previousIndex])}" alt="image" style="display: block;">
    </div>`
console.log("set time out called");
},"1000")
        
            dImages[no] = `<div class="image active animation">
    <img src="${URL.createObjectURL(imgArr[no])}" alt="image" style="display: block;">
    </div>`
            // lastIndex = no - 1
            output.innerHTML = dImages;
        }
    }



}
function showImg() {
    let dots = ''
    displayImg();
    for (let i = 0; i < imgArr.length; i++) {
        dots += `<span class="dot${i} dots" id="${i}" onclick="jump(${i})"></span>`
    }
    document.getElementById("dot").innerHTML = dots
    document.getElementById(no).className = "hoverd-dot"
}
function hidePrevious(idx) {
    dImages[idx] = `<div class="image">
    <img src="${URL.createObjectURL(imgArr[idx])}" alt="image">
    </div>`
}
function next() {
    let button = document.getElementById("button2")
    hidePrevious(previousIndex)
    button.style.animation = "none"
    previousIndex = no;
    no += 1;
    if (no > imgArr.length-1) {
        lastIndex = 0;
        document.getElementById(imgArr.length-1).className = "dots"
        document.getElementById(0).className = "hoverd-dot"
    }
    else {
        document.getElementById(no).className = "hoverd-dot"
        document.getElementById(previousIndex).className = "dots"
    }

    up = 1;
    pre = 0;
    if (no <= imgArr.length-1) {

        displayImg();
    }
    else {
        no = 0;
        displayImg();
    }
    //                 displayImg.setAttribute('src',e.target.result)
    button.style.animation = "zoomm 1s linear"

}
function previous() {
    hidePrevious(previousIndex)
    previousIndex = no
    no -= 1
    up = 0;
    pre = 1;
    document.getElementById(lastIndex).className = "dots"
    lastIndex -= 1;
    if (no < 0) {
        lastIndex = imgArr.length - 1;
        document.getElementById(0).className = "dots"
        document.getElementById(imgArr.length - 1).className = "hoverd-dot"
    }
    if (no >= 0) {
        displayImg();
    }
    else {
        no = imgArr.length - 1;
        displayImg();
    }
    document.getElementById(lastIndex).className = "hoverd-dot"
    document.getElementById(lastIndex + 1).className = "dots"


}




function jump(index) {

    hidePrevious(previousIndex);
    dImages[previousIndex] = `<div class="still-image active">
    <img src="${URL.createObjectURL(imgArr[previousIndex])}" alt="image">
    </div>`
    document.getElementById(previousIndex).className = "dots"
    dImages[index] = `<div class="image active">
    <img src="${URL.createObjectURL(imgArr[index])}" alt="image">
    </div>`
    no = index;
    previousIndex = no
    // lastIndex = index;
    output.innerHTML = dImages;
    document.getElementById(no).className = "hoverd-dot"

}




