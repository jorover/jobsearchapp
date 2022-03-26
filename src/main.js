const jobList = document.querySelector('.job-listing');
const toggle = document.querySelector('.toggle');
let eachJobList = document.querySelector('.job-listing');
const searchBar = document.querySelector('.job-search-bar');
const searchInput = document.querySelectorAll('#search-bar');
const formControl = document.querySelectorAll('.form-control');
const searchBtn = document.querySelector('.search-btn');
const jobSearchBar = document.querySelector('.job-search-bar');
let eachElement = eachJobList.children;
const only = document.querySelector('.only');
const lister = document.querySelector('.lister');





const toggler = () => {
    toggle.addEventListener('click', ()=> {
        if(toggle.style.float === 'left'){
            localStorage.setItem('toggle', 'toggled')
            toggle.style.float = 'right';
            document.body.style.background = '#000';
            document.body.style.color = '#fff';
            only.style.color = '#fff'
            searchBar.style.background = 'rgb(0, 33, 82)';
            eachJobList.querySelectorAll('.each-job-list').forEach(item => {
                item.style.background = 'rgb(0, 33, 82)';
            })
            eachJobList.querySelectorAll('.title').forEach(item => {
                item.style.color = '#fff';
            })
            eachJobList.querySelectorAll('.day').forEach(item => {
                item.style.color = '#fff'
            })
            eachJobList.querySelectorAll('.comp').forEach(item => {
                item.style.color = '#fff'
            })
            searchInput.forEach(items => {
                items.style.background = 'rgb(0, 33, 82)';
                items.style.color = '#eee'
            })

            formControl.forEach(item => {
                item.style.border = 'none';
                item.style.background = 'rgb(0, 33, 82)'
            })

            if(window.innerWidth <= 555){
                jobSearchBar.style.background = 'none'
            }

            
        } else {
            toggle.style.float = 'left';
            document.body.style.background = '#eee';
            localStorage.removeItem('toggle')
            document.body.style.color = '#000';
            searchBar.style.background = '#fff';
            only.style.color = '#000'
            eachJobList.querySelectorAll('.each-job-list').forEach(item => {
                item.style.background = '#fff'
            })
            eachJobList.querySelectorAll('.title').forEach(item => {
                item.style.color = '#000'
            })

            eachJobList.querySelectorAll('.day').forEach(item => {
                item.style.color = '#000'
            })

            eachJobList.querySelectorAll('.comp').forEach(item => {
                item.style.color = '#000'
            })

            searchInput.forEach(items => {
                items.style.background = '#fff';
                items.style.color = '#000'
            })

            formControl.forEach(item => {
                item.style.border = '1px solid #eee';
                item.style.background = '#fff'
            })

            if(window.innerWidth <= 555){
                jobSearchBar.style.background = 'none'
            }

            if(localStorage.getItem('toggle') === undefined){
                eachJobList.querySelectorAll('.day').forEach(item => {
                    item.style.color = '#000'
                })
            }
        }
    })
}

toggler();


const loadData = async () => {
    const data = await (await fetch('./data.json')).json();
    jobList.innerHTML = '';
    const eachData = data.map(eachItem => {
        const {id, cssclass, title, timepost, time, companyname, companylogo, country, link} = eachItem;
        return jobList.innerHTML += `<article key="${id}" class=${cssclass}> 
        <img src=${companylogo} alt="companylogo" />
        <p class="day">${timepost} <a class="time"> ${time}</a></p>
        <a href=${link}>
            <h4 class="title">${title}</h4>
        </a>
        <p class="comp">${companyname} </p>
        <p class="country"><span> ${country} </span></p>    
        </article>`
    })

    checkForToggle();
    return eachData;
    
}

loadData();






const filterTitle = async (inputVal) => {
    const data = await (await fetch('./data.json')).json();
    let toggleCheck = localStorage.getItem('toggle');
    jobList.innerHTML = ''
    const filtered = data.filter(eachItem => {
        if(eachItem.title === inputVal || eachItem.title.includes(inputVal)){
          const {id, title, cssclass, timepost, time, companyname, companylogo, country, link} = eachItem;
          return jobList.innerHTML +=`<article key="${id}" class=${cssclass}> 
          <img src=${companylogo} alt="companylogo" />
          <p>${timepost} <a class="time"> ${time}</a></p>
          <a href=${link}>
              <h4 class="title">${title}</h4>
          </a>
          <p class="comp">${companyname} </p>
          <p class="country"><span> ${country} </span></p>    
          </article>`
        }
    })

    if(toggleCheck){
        eachJobListBg(eachElement)
    }

    return filtered;
}

const filterLocation = async (inputVal) => {
    const data = await (await fetch('./data.json')).json();
    let toggleCheck = localStorage.getItem('toggle');
    jobList.innerHTML = ''
    const filtered = data.filter(eachItem => {
        if(eachItem.country === inputVal || eachItem.country.includes(inputVal)){
            const {id, cssclass, title, timepost, time, companyname, companylogo, link, country} = eachItem;
            jobList.innerHTML += `<article key="${id}" class=${cssclass}> 
            <img src=${companylogo} alt="companylogo" />
            <p>${timepost} <a class="time"> ${time}</a></p>
            <a href=${link}>
                <h4 class="title">${title}</h4>
            </a>
            <p class="comp">${companyname} </p>
            <p class="country"><span> ${country} </span></p>    
            </article>`
        }
    })

    if(toggleCheck){
        eachJobListBg(eachElement)
    }

    return filtered;
}


const fullTime = async () => {
    const data = await (await fetch('./data.json')).json();
    let toggleCheck = localStorage.getItem('toggle');
    jobList.innerHTML = '';
    const filtered = data.filter(item => {
        if(item.time === 'Full Time'){
            const {id, cssclass, title, timepost, time, companyname, companylogo, country, link} = item;
            jobList.innerHTML += `<article key="${id}" class=${cssclass}> 
            <img src=${companylogo} alt="companylogo" />
            <p>${timepost} <a class="time"> ${time}</a></p>
            <a href=${link}>
                <h4 class="title">${title}</h4>
            </a>
            <p class="comp">${companyname} </p>
            <p class="country"><span> ${country} </span></p>    
            </article>`
        }
    })

    if(toggleCheck){
        eachJobListBg(eachElement)
    }

    return filtered;
    
}

const filterTitleLocation = async(firstVal, secondVal) => {
    const data = await (await fetch('./data.json')).json();
    let toggleCheck = localStorage.getItem('toggle');
    jobList.innerHTML = '';
    const filtered = data.filter(eachItem => {
        if((eachItem.title === firstVal || eachItem.title.includes(firstVal)) && (eachItem.country === secondVal || eachItem.country.includes(secondVal))){
            const {id, cssclass, title, timepost, time, companyname, companylogo, country, link} = eachItem;
            jobList.innerHTML += `<article key="${id}" class=${cssclass}> 
            <img src=${companylogo} alt="companylogo" />
            <p>${timepost} <a class="time"> ${time}</a></p>
            <a href=${link}>
                <h4 class="title">${title}</h4>
            </a>
            <p class="comp">${companyname} </p>
            <p class="country"><span> ${country} </span></p>    
            </article>`
        }
    })

    if(toggleCheck){
        eachJobListBg(eachElement)
    }

    return filtered;
}


const submitSearch = () => {
    searchBtn.addEventListener('click', ()=> {
        let firstValue = searchInput[0].value;
        let firstLetterValue = firstValue.charAt(0);
        let capsFirstValue = firstLetterValue.toUpperCase();
        let finalFirstValue = firstValue.replace(firstLetterValue, capsFirstValue);
        let secondValue = searchInput[1].value;
        let secondLetterValue = secondValue.charAt(0);
        let secondcapsFirstValue = secondLetterValue.toUpperCase();
        let secondfinalFirstValue = firstValue.replace(secondLetterValue, secondcapsFirstValue);
        let checkBox = document.querySelector('#checkbox');
        let toggler = localStorage.getItem('toggle');

        if(firstValue){
            filterTitle(finalFirstValue);
        } 

        if(secondValue){
            filterLocation(secondfinalFirstValue);
        }

        if(firstValue && secondValue){
            filterTitleLocation(finalFirstValue, secondfinalFirstValue);
        }

        if(checkBox.checked){
            fullTime();
        }
    })
}

submitSearch();



const checkForToggle = () => {
    let toggler = localStorage.getItem('toggle');
    let eachElement = eachJobList.children;
    if(toggler){
            toggle.style.float = 'right';
            document.body.style.background = '#000';
            document.body.style.color = '#fff';
            only.style.color = '#fff'
            searchBar.style.background = 'rgb(0, 33, 82)';          
            searchInput.forEach(items => {
                items.style.background = 'rgb(0, 33, 82)';
                items.style.color = '#eee'
            })

            formControl.forEach(item => {
                item.style.border = 'none';
                item.style.background = 'rgb(0, 33, 82)'
            })

            if(window.innerWidth <= 555){
                jobSearchBar.style.background = 'none'
            }

            eachJobListBg(eachElement)

    }
}


const eachJobListBg = (list) => {

    let newElement = Array.from(list, eachItem => {
        eachItem.style.background = 'rgb(0, 33, 82)';
        eachItem.style.color = '#fff';
        eachItem.querySelector('.title').style.color = '#fff';
        eachItem.querySelector('.comp').style.color = '#fff';
    });

    return newElement;
}

