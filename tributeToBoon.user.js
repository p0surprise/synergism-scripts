// ==UserScript==
// @name         Tribute to Boon
// @namespace    AlienC4
// @version      1.2
// @description  Renames the tributes to boons
// @author       AlienC4
// @match        https://pseudonian.github.io/SynergismOfficial/
// @grant        none
// ==/UserScript==

const capitalize = (s = "") => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function replaceTribute(byStr = "boon") {
    let cubes = document.getElementById("cubes")
    let tds = cubes.getElementsByTagName("td")
    for (let td of tds) {
        td.innerHTML = td.innerHTML.replace("Tribute", capitalize(byStr))
    }
    let statisticsSubtab = document.getElementById("statisticsSubTab")
    for (let p of statisticsSubtab.getElementsByTagName("p")) {
        p.innerHTML = p.innerHTML.replace("Tribute", capitalize(byStr))
    }
    let chalDisplay = challengeDisplay
    challengeDisplay = function (i, changefocus, automated) {
        chalDisplay(i, changefocus, automated)
        if (i === 12 && challengefocus === 12) {
            let g = document.getElementById("challengePer3").childNodes[0];
            g.textContent = g.textContent.replace("Tribute", capitalize(byStr))
            let n = document.getElementById("challengeCurrent3");
            n.textContent = "+" + format(CalcECC('ascension', player.challengecompletions[12])) + " additional Cube Tributes".replace("Tribute", capitalize(byStr))
        }
    }
    for (let i = 1; i < cubeUpgradeName.length; i++) {
        let name = cubeUpgradeName[i]()
        cubeUpgradeName[i] = () => name.replace("tribute", byStr).replace("Tribute", capitalize(byStr))
    }
    for (let i = 1; i < cubeUpgradeDescriptions.length; i++) {
        let desc = cubeUpgradeDescriptions[i]()
        cubeUpgradeDescriptions[i] = () => desc.replace("tribute", byStr)
    }
    for (let i = 1; i < resdesc; i++) {
        resdesc[i] = resdesc[i].replace("tribute", byStr)
    }
    let statOff = document.getElementById("offeringMultiplierStats")
    for (let s of statOff.children) {
        s.childNodes[0].textContent = s.childNodes[0].textContent.replace("Tribute", capitalize(byStr));
    }
    document.getElementById("tesseractExpository1").textContent = document.getElementById("tesseractExpository1").textContent.replace("tribute", byStr)
    document.getElementById("cubeBlessingsTotal").childNodes[2].textContent = document.getElementById("cubeBlessingsTotal").childNodes[2].textContent.replace("tribute", byStr)
    document.getElementById("switchCubeSubTab1").innerHTML = document.getElementById("switchCubeSubTab1").textContent.replace("Tribute", capitalize(byStr))
}

window.replaceTribute = replaceTribute
replaceTribute()