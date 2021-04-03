
//grab the emoji container element
const emojisContained = document.getElementById("emojiContainer");
// console.log(emojisContained)

//add your emojis in an array
const myEmojis = ["⏳", "🖤", "💀"]
// //loop through emojis array
function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
       }
    }
    
    renderEmojis()
    
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