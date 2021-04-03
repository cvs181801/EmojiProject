
//grab the emoji container element
const emojisContained = document.getElementById("emojiContainer");
// console.log(emojisContained)

//add your emojis in an array
const myEmojis = ["⏳", "🖤", "💀"]
// loop through emojis array
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
//add button to remove an emoji from the end of the array
const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myEmojis.pop();
    renderEmojis()
})

//add button to remove emoji from ebeginning of array
const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    myEmojis.shift();
    renderEmojis()
})