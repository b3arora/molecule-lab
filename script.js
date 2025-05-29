const molly = document.getElementById("molly")
molly.style.display = 'none';

const cylinder1 = document.querySelector("#cylinder-1")
const cylinder2 = document.querySelector("#cylinder-2")
const double1 = document.querySelector("#double-1")
const double2 = document.querySelector("#double-2")
double1.setAttribute("visible", false);
double2.setAttribute("visible", false);

const checking = document.querySelector("#marking")
const moleculeRotation = document.querySelector("#bondGroup")
let atomHeight = 0.5
let angleIncrease = -45
let bondHeight = 0.7
let clickNo = 0
let level = 0
let levels = [{
    name: "water",
    bondType: "single",
    bondAngle: 104.5,
    help: ["stuck? don't worry, i'm here to help!", "hi, i'm molly^300", "to work out bond angles, we need to know how many bp and lp are present", "bp being bonded pairs, lp being lone pairs", "as you can see, O is the central atom, surrounded by 2 H's", "we will use the number of electrons the central atom has", ".^200.^200.and the number of electrons the surrounding atoms need", "adding them together: 6 from the oxygen, 2 from the hydrogen x 2", "8 electrons in total, therefore 4 pairs", "4 pairs give the molecule a tet^200ra^150hedral orbital shape", "2 bonds and therefore bonded pairs can be seen", "so there must be 2 lone pairs to account for the 4 pairs in total", "each lone pair decreases the bond angle by 2.5°", "since the bond angle of a tetrahedral shape with no lone pairs is usually 109.5.^300.^300.", "try it now!"]
}, {
    name: "carbon dioxide",
    bondType: "double",
    bondAngle: 180,
    radiusCentral: 0.2,
    colourCentral: "black",
    radiusExtra: 0.2,
    colourExtra: "#851b11",
    help: ["here we have carbon as the central atom, and 2 surrounding oxygens", "carbon has 4 electrons, oxygen need 2 electrons", "so.^300.^300.the total number of electrons is 4 + (2 x 2)", "giving us 8 electrons, and therefore 4 pairs", "as you can see, the double bonds mean there are 4 bonds in total", "so no electrons are left over for lone pairs", "and the linear shape is therefore not distorted!", "so enter the bond angle for a linear molecule^300.^300.^300can you remember it?"]

}]
const angles = [180, 180, 120, 109.5, 107, 104.5, 90]
    

document.addEventListener("keydown", (event) => {
    if (event.key === "w") {
        if (clickNo < 7) {
            document.querySelector("#bondAngle").setAttribute("value",`angle: ${angles[clickNo]}`)
            clickNo = clickNo + 1
            newBondAngle(clickNo);
        }
    } else if (event.key === "s") {
        if (clickNo > 0) {
            document.querySelector("#bondAngle").setAttribute("value",`angle: ${angles[clickNo]}`)
            clickNo = clickNo - 1;
            newBondAngle(clickNo);
        }
    } else if (event.key === "Enter") {
        if ((clickNo != 0 && angles[clickNo] === levels[level].bondAngle) || (clickNo === 0 && levels[level].bondAngle === 180)) {
            checking.setAttribute("value", "correct!")
            setTimeout(() => {
                checking.setAttribute("value", "press enter to submit bond angle")
            },3000)
            level++
            newLevel(level)
        } else {
            checking.setAttribute("value", "wrong! try again or press ? for some help")
            setTimeout(() => {
                checking.setAttribute("value", "press enter to submit bond angle")
            },3000)
        }
    } else if (event.key === "?") {
        const typed = new Typed('.element', {
            strings: levels[level].help,
            typeSpeed: 50
        })
        molly.style.display = 'block';
    }
})

function newBondAngle(clickNo) {
    if (clickNo < 7) {
        moleculeRotation.setAttribute("rotation", `0 0 ${-15*clickNo}`)
    }
}

function newLevel(difficulty) {
    if (level < 3) {
        if (levels[level].bondType === "double") {
            cylinder1.setAttribute("visible", false);
            cylinder2.setAttribute("visible", false);
            double1.setAttribute("visible", true);
            double2.setAttribute("visible", true);
        }

        document.querySelector("#atomName").setAttribute("value",`name: ${levels[level].name}`)
        document.querySelector("#atom-2").setAttribute("radius", levels[level].radiusExtra)
        document.querySelector("#atom-3").setAttribute("radius", levels[level].radiusExtra)
        document.querySelector("#center").setAttribute("color", levels[level].colourCentral)
        document.querySelector("#atom-2").setAttribute("color", levels[level].colourExtra)
        document.querySelector("#atom-3").setAttribute("color", levels[level].colourExtra)
    }

}