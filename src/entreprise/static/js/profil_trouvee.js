const desc = document.querySelector("#descrip");
const etude = document.querySelector("#etude");
const salaire = document.querySelector("#salaire");
const evol = document.querySelector("#evolution");
const profil = document.querySelector("#profils");

const DES = document.querySelector("#D");
const ETU = document.querySelector("#E");
const SAL = document.querySelector("#S");
const EVO = document.querySelector("#EV");
const PRO = document.querySelector("#PF");

desc.style.display = 'block';
DES.style.backgroundColor = "#deddddcb"


DES.addEventListener('click', () => {
    clear_all()
    if (desc.style.display == 'block') {
        desc.style.display = 'none';
    } else {
        desc.style.display = 'block';
    }
    DES.style.backgroundColor = "#deddddcb"
});

ETU.addEventListener('click', () => {
    clear_all()

    if (etude.style.display == 'block') {
        etude.style.display = 'none';
    } else {
        etude.style.display = 'block';
    }
    ETU.style.backgroundColor = "#deddddcb"

});

SAL.addEventListener('click', () => {
    clear_all()

    if (salaire.style.display == 'block') {
        salaire.style.display = 'none';
    } else {
        salaire.style.display = 'block';
    }
    SAL.style.backgroundColor = "#deddddcb"

});

EVO.addEventListener('click', () => {
    clear_all()

    if (evol.style.display == 'block') {
        evol.style.display = 'none';
    } else {
        evol.style.display = 'block';
    }
    EVO.style.backgroundColor = "#deddddcb"

});

PRO.addEventListener('click', () => {
    clear_all()

    if (profil.style.display == 'block') {
        profil.style.display = 'none';
    } else {
        profil.style.display = 'block';
    }
    PRO.style.backgroundColor = "#deddddcb"
});

function clear_all() {
    desc.style.display = 'none'
    etude.style.display = 'none'
    salaire.style.display = 'none'
    evol.style.display = 'none'
    profil.style.display = 'none'
    DES.style.backgroundColor = "#f7f7f7"
    ETU.style.backgroundColor = "#f7f7f7"
    SAL.style.backgroundColor = "#f7f7f7"
    EVO.style.backgroundColor = "#f7f7f7"
    PRO.style.backgroundColor = "#f7f7f7"

}
