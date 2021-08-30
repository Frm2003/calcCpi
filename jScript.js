function load() {
    botoes(document.getElementById("btn"), document.getElementById("btn2"), document.getElementById("btn3"))
    document.getElementById("btnCopy").addEventListener('click', async function () {
        await navigator.clipboard.writeText(document.getElementById("exibir").value);
    })
}
function botoes(bt1, bt2, bt3) {
    let ckb = document.getElementById("ckb")
    let result = document.getElementsByClassName("result")[0]
    let seta = document.getElementsByClassName("seta")[0]
    x = document.getElementById("cont")
    ic = document.getElementById("ic")
    ghz = document.getElementById("ghz")
    bt1.onclick = function () {
        if (x.value == "") {
            x.style.borderColor = "red"
        } else {
            criarInputs(x)
            checkbox(ckb, result, seta)
            x.value = ""
            x.style.borderColor = "rgba(196,31,20,0.5)"
            seta.style.transform = "rotate(360deg)"
            result.style.marginLeft = "0%"
        }
    }
    bt2.onclick = function () {
        if (ic.value == "") {
            ic.style.borderColor = "red"
        } else {
            cpiCalc(seta, ic)
            deletar()
            ic.value = ""
            ic.style.borderColor = "rgba(196,31,20,0.5)"
            seta.style.transform = "rotate(180deg)"
            result.style.marginLeft = "-200%"
        }
    }
    bt3.onclick = function () {
        if (ghz.value == "") {
            ghz.style.borderColor = "red"
        } else {
            tempCalc(ghz, ic)
            ghz.value = ""
            ghz.style.borderColor = "rgba(196,31,20,0.5)"
        }
    }
    menu(document.querySelectorAll(".btMenu"), seta, result)
}
function menu(bt, seta, result) {
    let cpi = document.getElementsByClassName("cpi")[0]
    let tempo = document.getElementsByClassName("tempo")[0]
    for (let a = 0; a < bt.length; a++) {
        bt[0].onclick = function () {
            cpi.style.marginLeft = "0%"
            tempo.style.marginLeft = "-200%"
        }
        bt[1].onclick = function () {
            seta.style.opacity = "0"
            result.style.marginLeft = "-200%"
            cpi.style.marginLeft = "-200%"
            tempo.style.marginLeft = "0%"
        }
    }
}
function cpiCalc(seta, ic, soma = 0, cpi = 0) {
    let exibir = document.getElementById("exibir")
    let a = document.querySelectorAll(".a")
    let b = document.querySelectorAll(".b")
    for (let z = 0; z < a.length; z++) {
        soma = soma + (ic.value * (parseFloat(a[z].value) / 100) * parseFloat(b[z].value))
        cpi = soma / ic.value
    }
    seta.style.opacity = "0"
    exibir.value = cpi
}
function tempCalc(ghz, ic, t = 0) {
    let cpi = document.getElementById("cpi")
    let ic2 = document.getElementById("ic2")
    let exibir = document.getElementById("exibir2")
    t = (ic2.value * parseFloat(cpi.value)) / ghz.value
    exibir.value = t.toFixed(6)
}
function criarInputs(x, instA, instB) {
    for (let a = 0; a < x.value; a++) {
        instA = document.body.appendChild(document.createElement("input"))
        instA.setAttribute("class", "a field")
        document.getElementsByClassName("ia")[0].insertAdjacentElement("beforeend", instA)
    }
    for (let a = 0; a < x.value; a++) {
        instB = document.body.appendChild(document.createElement("input"))
        instB.setAttribute("class", "b field")
        document.getElementsByClassName("ib")[0].insertAdjacentElement("beforeend", instB)
    }
}
function deletar(x) {
    x = document.querySelectorAll(".field")
    for (let a = 0; a < x.length; a++) {
        x[a].remove()
    }
}
function checkbox(ckb, result, seta) {
    ckb.hidden = true
    seta.style.opacity = "1"
    ckb.onchange = function () {
        if (ckb.checked) {
            seta.style.transform = "rotate(180deg)"
            result.style.marginLeft = "-200%"
        } else {
            seta.style.transform = "rotate(360deg)"
            result.style.marginLeft = "0%"
        }
    }
}