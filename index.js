
//grab the emoji container element
const emojisContained = document.getElementById("emojiContainer");
// console.log(emojisContained)

//add your emojis in an array
const myEmojis = ["A", "B", "C"]
// //loop through emojis array
for (let i = 0; i < myEmojis.length; i++) {
     var renderEmojis = document.createElement("span")
     renderEmojis.textContent = myEmojis[i]
     emojiContainer.append(renderEmojis)

//     const pushEmojiButton = document.getElementById("push-btn")

// pushEmojiButton.addEventListener("click", function () {
//     const emojiInput = document.getElementById("emoji-input")
//     console.log(emojiInput)
// })