// ------------------------------------------------------------
//                        buttons
// ------------------------------------------------------------

function showContent(content) {
    const template = document.getElementById(content)
    const view = template.content.cloneNode(true)
    const container = document.getElementById("container")
    container.innerHTML = ""
    container.appendChild(view)
}

// ---------------------------------------------------------------
//                        random fun facts
// ---------------------------------------------------------------

const funFacts = [
    "there is a colony of bunnies that live in my backyard",
    "i like random quote generators",
    "my cat nala is very cute",
    "burger bach has really good french fries, burgers are okay",
    "christmas is my favorite, and my favorite christmas song is 'have yourself a merry little christmas'",
    "I tried to do some more fancy javascript stuff with this, but it didn't work out and I ran out of time :) that's how the cookie crumbles",
]

function randomFact() {
    const fact = document.getElementById("fact") 
    fact.innerText = funFacts[Math.floor(Math.random() * funFacts.length)]
}

// ---------------------------------------------------------------
//                    ******** SPARKLES ********
//  I cannot figure out how to get it to work, maybe someday. For now, cat
// ---------------------------------------------------------------
// const COLORS = [
//     "rgb(225,255,255)",
//     "rgb(225,255,255)",
//     "rgb(225,255,255)",
// ]

// class Sparkle {
//     constructor() {
//         this.x = 0
//         this.y = 0
//         this.size = Math.random() * 2
//         this.color = Math.floor(Math.random() * COLORS.length)
//     }
// }

// let SparkleStack = []

// function createSparkle() {
//     console.log("new sparkle")
//     let sparkle = new Sparkle()
//     SparkleStack.push(sparkle)
// }


// ------------------------------------------------------------
//                       EVENT LISTENER
// ------------------------------------------------------------

window.addEventListener("mousemove", e => {
    const sparkleContainer = document.getElementById("sparkleContainer")
    sparkleContainer.style.top = (e.clientY  + 10 + "px")
    sparkleContainer.style.left = (e.clientX  + 10 + "px")
})