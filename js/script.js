
// Get countries and their flag

const selectEl = document.querySelector('#country');

const apiUrl = 'https://restcountries.com/v3.1/all';

fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{
        data.sort((a, b) => (a.name.common > b.name.common) ? 1: -1);

        // console.log(data)
        data.forEach(country => {
            const optionEl = document.createElement('option');
            optionEl.value = country.cca3;
            optionEl.textContent = `${country.name.common}`;
            selectEl.appendChild(optionEl);
        });
})

// ${country.flags.png}

//Switching articles and form content

const steps = Array.from(document.querySelectorAll('.step'));
const nextBtn = document.querySelectorAll('.next');
const cancelBtn = document.querySelector('.cancel');
const prevBtn = document.querySelectorAll('.prev');
const form = document.querySelector('form');


const headerBar = Array.from(document.querySelectorAll('.steps__header h6'));


let currentBar = 1;


// console.log(steps, nextBtn, prevBtn);

prevBtn.forEach(button =>{ button.addEventListener('click', (e) => {
    changeStep('prev');

    headerBar[currentBar].classList.remove('active');
    currentBar--;
    })
})

nextBtn.forEach(button =>{ button.addEventListener('click', (e) => {
    changeStep('next');

    headerBar[currentBar].classList.add('active');
    currentBar++;
    })
})




function changeStep(btn){
    let index = 0;
    const show = document.querySelector('.step.show');
    index = steps.indexOf(show);
    steps[index].classList.remove('show');
    if(btn === 'next'){
        index++;
    }else if(btn === 'prev'){
        index--;
    }

    steps[index].classList.add('show');

}


// Upload Files Under Loan Application

let input = document.getElementById( 'file-upload' );
let infoArea = document.getElementById( 'file-upload-filename' );

input.addEventListener( 'change', showFileName );

function showFileName( event ) {
  
  // the change event gives us the input it occurred in 
  let input = event.srcElement;
  
 
  let fileName = input.files[0].name;
  
  infoArea.textContent = 'File name: ' + fileName;
}


// Modal Pop-up

const popCancel = document.querySelector('.remove-pop');
const openModal = document.querySelector('.open-modal');
const Modal = document.querySelector('.modal')
const modalTop = document.querySelector('.modal-top');

openModal.addEventListener('click', (e) =>{
    e.preventDefault;
    Modal.classList.remove('hidden');
    modalTop.classList.add('filter');


} )

popCancel.addEventListener('click', (e) =>{
    e.preventDefault;
    Modal.classList.add('hidden')

} )


// Drag and Drop Functionality


document.addEventListener('DOMContentLoaded', initUpload);

const initUpload = () =>{

    const prevent = (e) => e.preventDefault();

    const dragArea = document.querySelector('.drag-drop');

    const turnActive = () =>{
        dragArea.classList.add('turn-active');
    }

    const turnInActive = () =>{
        dragArea.classList.remove('turn-active');
    }



    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eName) =>{
        eName.addEventListener('eName', prevent);
    })

    ['dragenter', 'dragover'].forEach((eName) => {
        eName.addEventListener('eName', turnActive )
    })

    ['dragleave', 'drop'].forEach((eName) => {
        eName.addEventListener('eName', turnActive )
    })

   



}






// const validationForm = () =>{
//         let valid = true;
//         for(let i = 0; i < formInputs.length; i++ ){
//             if(!formInputs[i].value){
//                 valid = false;
//             }else{
//                 valid = true;
//             }
//         }
    
//         return valid;
// }

// const headerBar = Array.from(document.querySelectorAll('.steps__header h6'));

// // console.log(headerBar)

// const formInputs = document.querySelectorAll('.input');

// const currentStep = 1;
// const currentBar = 0;

// steps.forEach( step =>{

//     const nextBtn = document.querySelector('.next');
//     const cancelBtn = document.querySelector('.cancel');
//     const prevBtn = document.querySelector('.prev');

//     if(prevBtn){
//         prevBtn.addEventListener('click', () =>{
//             document.querySelector(`step-${currentStep}`).style.display = 'none';
//             currentStep--;

//             document.querySelector(`step-${currentStep}`).style.display = 'flex';

//             headerBar[currentBar].classList.remove('active');
//             currentBar++;

//         })

//     }

//     nextBtn.addEventListener('click', () =>{
//         document.querySelector(`step-${currentStep}`).style.display = 'none';
//         if(currentStep < 3 && validation() ){
//             currentStep++;
//             currentBar++;

//         }

//         document.querySelector(`step-${currentStep}`).style.display = 'flex';

//         headerBar[currentBar].classList.add('active');

//     } )
// })

// const validationForm = () =>{
//     let valid = true;
//     for(let i = 0; i < formInputs.length; i++ ){
//         if(!formInputs[i].value){
//             valid = false;
//         }else{
//             valid = true;
//         }
//     }

//     return valid;
// }


