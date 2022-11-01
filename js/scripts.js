const botonSubmit = document.querySelector('#buttonSubmit');
const textoRating = document.querySelector('.val-select');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');

const obtenerValor = (e) => {
    e.preventDefault();
    const radios = document.getElementsByName('valoration');
    let value = null;

    for (let radio of radios) {
        if (radio.checked) {
            value = radio.value;
        }
    }
    
    textoRating.textContent = `You selected ${value} out of 5`;

    card1.style.display = 'none';
    card2.style.display = 'flex';
}

botonSubmit.addEventListener('click', obtenerValor);