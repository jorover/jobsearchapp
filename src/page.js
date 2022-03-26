const toggle = document.querySelector('.toggle');
const jobDetails = document.querySelector('.company-site-content');
const jobDescription = document.querySelector('.job-description-content');
const footer = document.querySelector('.job-footer');





const toggler = () => {
    toggle.addEventListener('click', ()=> {
        if(toggle.style.float === 'left'){
            localStorage.setItem('toggle', 'toggled')
            toggle.style.float = 'right';
            document.body.style.background = '#000';
            document.body.style.color = '#fff';
            jobDetails.style.background = 'rgb(0, 33, 82)';
            jobDescription.style.background = 'rgb(0, 33, 82)';
            footer.style.background = 'rgb(0, 33, 82)';
                   
            
        } else {
            localStorage.removeItem('toggle')
            toggle.style.float = 'left';
            document.body.style.background = '#eee';
            document.body.style.color = '#000';
            jobDetails.style.background = '#fff';
            jobDescription.style.background = '#fff';  
            footer.style.background = '#fff';
        }
    })
}

toggler();


const checkForToggle = () => {
    let toggler = localStorage.getItem('toggle');
    if(toggler){
        toggle.style.float = 'right';
        document.body.style.background = '#000';
        document.body.style.color = '#fff';
        jobDetails.style.background = 'rgb(0, 33, 82)';
        jobDescription.style.background = 'rgb(0, 33, 82)';
        footer.style.background = 'rgb(0, 33, 82)'  
    }
}

checkForToggle();
