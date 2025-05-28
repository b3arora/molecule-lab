const atom3 = document.querySelector("#atom-3")
const cylinder2 = document.querySelector("#cylinder-2")
const checking = document.querySelector("#marking")
const moleculeRotation = document.querySelector("#bondGroup")
let atomHeight = 0.5
let angleIncrease = -45
let bondHeight = 0.7
let clickNo = 0
let level = 0
const atom = [104.5, 180]
const angles = [180, 120, 109.5, 107, 104.5, 90]
    

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (angles[clickNo] === atom[level]) {
            checking.setAttribute("value", "correct!")
            level++
        } else {
            checking.setAttribute("value", "wrong! try again or press ? for some help")
            setTimeout(() => {
                checking.setAttribute("value", "press enter to submit bond angle")
            },3000)
        }
    } else if (event.key === "i") {
        if (clickNo < 7) {
            clickNo++;
            newBondAngle(clickNo);
        }
    } else if (event.key === "d") {
        if (clickNo > 0) {
            clickNo--;
            newBondAngle(clickNo);
        }
    }
})

function newBondAngle(clickNo) {
    if (clickNo < 7) {
        moleculeRotation.setAttribute("rotation", `0 0 ${-15*clickNo}`)
    }
}

