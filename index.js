console.log('hello all')


document.addEventListener('DOMContentLoaded', () => {
    
    
    let form = document.querySelector('#NGO-form')
    let keyword = document.querySelector('#keyword')
    let appendHere = document.querySelector('#org-append')
    let card
    let data
    let shell
    let orgs


   form.addEventListener('submit', function(event){
       event.preventDefault()
       console.log('hello all over the world')
       pushApi(keyword)
   })
  
    function pushApi(keyword){
    // axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://projects.propublica.org/nonprofits/api/v2/search.json?q=${keyword}`)
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://projects.propublica.org/nonprofits/api/v2/search.json?q=oakland`)
    .then(function (result) {
        
        data = result.data.organizations
        console.log(data)

        for (let i=0; i<data.length; i++) {
            orgs = data[i]
            shell = document.createElement('div')
            shell.classList.add('card')

            shell.innerHTML = 
            `<div class="content">
            <div class="header">${orgs.name}</div>
            <div class="description">${orgs.city}, ${orgs.state}</div>
            <div class="description">EIN#${orgs.ein}</div>
            </div>`

            appendHere.appendChild(shell)
        }
    
    }) //axios function
    
} // push API

}) //submit EventListener

}) //form EventListener


