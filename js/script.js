
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

const steps = document.querySelectorAll('.step');
const headerBar = document.querySelectorAll('.steps__header h6');

console.log(headerBar)

const formInputs = document.querySelectorAll('.input');

const currentStep = 1;
const currentBar = 0;

steps.forEach( step =>{

    const nextBtn = document.querySelector('.next');
    const backBtn = document.querySelector('.back');

    if(backBtn){
        backBtn.addEventListener('click', () =>{
            document.querySelector(`step-${currentStep}`).style.display = 'none';
            currentStep--;

            document.querySelector(`step-${currentStep}`).style.display = 'flex';

            headerBar[currentBar].classList.remove('active');
            currentBar++;

        })

    }

    nextBtn.addEventListener('click', () =>{
        document.querySelector(`step-${currentStep}`).style.display = 'none';
        if(currentStep < 3 && validation() ){
            currentStep++;
            currentBar++;

        }

        document.querySelector(`step-${currentStep}`).style.display = 'flex';

        headerBar[currentBar].classList.add('active');

    } )
})

const validationForm = () =>{
    let valid = true;
    for(let i = 0; i < formInputs.length; i++ ){
        if(!formInputs[i].value){
            valid = false;
        }else{
            valid = true;
        }
    }

    return valid;
}


