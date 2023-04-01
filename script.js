let textstr = document.getElementById('area');
const containEmptyString = (element) => element === '';

window.onload = function(){
    document.getElementById('area').value=''
}

textstr.focus()
textstr.addEventListener('keyup',function(e){
  
let tags = e.target.value

let testarr = createtag(tags)
displaytags(testarr)

if (e.code=='Enter'){
    // textstr.disabled=true
    randompick()
    e.target.value=''

}

})


function createtag(inputstr){
let newtext = inputstr.split(',')
console.log(newtext);
console.log(newtext.length);
return newtext
}


function displaytags(wordsarr){

    var test = ``

    for (let i = 0 ; i < wordsarr.length;i++){

      
if (wordsarr[i] !=''){
    test+=

    `
    <div class="choice">
    <span class="tags">${wordsarr[i]}</span>
    </div>
    
    `
}

    }
  
    document.getElementById('choices').innerHTML=test
}


function randompick(){
    



const interval = setInterval(() => {

    const randomTag = startpicking()
    addcolor(randomTag)

    setTimeout(() => {
        removecolor(randomTag)
    }, 50)

}, 50);


setTimeout(() => {
    clearInterval(interval)

   
        const randomTag = startpicking()

        addcolor(randomTag)
  

}, 2000)

// var retryornew = `
// <button>Retry</button></br>
// <button>New</button>
// `

// document.getElementById("buttons").innerHTML=retryornew

}


function startpicking(){
console.log('enter pressed');

const all = document.querySelectorAll('.choice')
var pickedwordindex = Math.floor(Math.random() * all.length)

// all[pickedwordindex].style.backgroundColor = 'rgb(206, 88, 41)'
return all[pickedwordindex]


}



function addcolor(tag){
tag.style.backgroundColor = 'rgb(206, 88, 41)'

}

function removecolor(tag){
    tag.style.backgroundColor = 'rgb(252, 183, 156)'

}


