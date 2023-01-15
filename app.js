// const pieza = document.getElementById('A1');
// console.log(pieza.innerHTML);
// const pieza2 = document.getElementById('B1');
// console.log(pieza2.innerHTML);
// const pieza3 = document.getElementById('E3');

// pieza3.innerHTML = pieza.innerHTML;
// console.log('Perra1');


// console.log('Perra2');


// const F4 = document.getElementById('F4');

// F4.innerHTML =  pieza2.innerHTML;

const pieza = document.getElementById('A1');
const evento = document.getElementById('evento');
console.log('se creó la piesa', pieza.innerHTML);

pieza.innerHTML.addEventListener('click', () => {
    alert('¿Qué quieres hacer?')
});
console.log('aquí entra al otro evento');
evento.addEventListener('click', () => {
    alert('¿Qué quieres hacer?')
});


