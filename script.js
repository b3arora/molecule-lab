const atom3 = document.querySelector("#atom-3")
const cylinder2 = document.querySelector("#cylinder-2")
let atomHeight = 0.5
let angleIncrease = -45
let bondHeight = 0.7
let clickNo = 0
const levels = []
const atoms = []
const angles = [90, 104.5, 107, 109.5, 120, 180]
let level = "water"

atom3.addEventListener("click", () => {
    if (clickNo < 7) {
        clickNo++;
        
        if (clickNo > 6) {
            cylinder2.setAttribute("position", `-0.3 ${bondHeight + (0.1*clickNo)} -3`)
            atom3.setAttribute("position", `-0.62 ${atomHeight + (0.2*clickNo)} -3`)
            cylinder2.setAttribute("rotation", `0 0 ${angleIncrease + (-15*clickNo)}`)
        } else if (clickNo <= 6) {
            cylinder2.setAttribute("position", `-0.4 ${bondHeight + (0.08*clickNo)} -3`)
            atom3.setAttribute("position", `-0.7 ${atomHeight + (0.15*clickNo)} -3`)
            cylinder2.setAttribute("rotation", `0 0 ${angleIncrease + (-15*clickNo)}`)
        }
    }
}); 