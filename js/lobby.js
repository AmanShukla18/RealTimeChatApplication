let form = document.getElementById('lobby__form')

const displayName = sessionStorage.getItem('display_name')

// console.log(displayName)
if(displayName){
    form.name.value = displayName
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // if(!inviteCode){
    //     inviteCode = String(Math.floor(Math.random() * 10000))
    // }
    let inviteCode = e.target.room.value
    if(isNaN(inviteCode))
    {
        alert("Please Enter room number in digits.");
    }
    // else if(typeof displayName !== 'string')
    // {
    //     alert("PLease enter a valid name. The Name should not be any number or punctuation mark !!");
    // }
    else
    {
    sessionStorage.setItem('display_name', e.target.name.value)
    window.location = `room.html?room=${inviteCode}`
    }
})