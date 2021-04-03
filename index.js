
//grab the emoji container element
const emojiContainer = document.getElementById("emojiContainer");
// console.log(emojisContained)

//add your emojis in an array
let myEmojis = ["⏳", "🖤", "💀"]


//create a function to loop through emojis array
function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
       }
    }
    
    renderEmojis()
    
    //add push button (add emoji to end of array)
    const pushBtn = document.getElementById("push-btn")
    pushBtn.addEventListener("click", function(){
        const emojiInput = document.getElementById("emoji-input")
        if (emojiInput.value) {
            myEmojis.push(emojiInput.value)
            emojiInput.value = "" 
            emojiContainer.innerHTML = ""
            renderEmojis()
        }
    })
    //add the unshift button function (add emoji to beginning of array)
    const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
})
// // create a copy of the original array
// const myEmojisCopy = [...myEmojis];

// // create a function using the non-mutated copy of the array
// function clearThenRenderEmojis() {
//     let myEmojis = []; 
//     for (let i = 0; i < myEmojisCopy.length; i++) {
//         const emojiRemove = document.createElement('span')
//         emojiContainer.append(emojiRemove)
//     }
//  }
    

//add button to remove an emoji from the end of the array
const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myEmojis.pop();
    renderEmojis()
})

//add button to remove emoji from beginning of array
const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    myEmojis.shift();
    renderEmojis()
})
