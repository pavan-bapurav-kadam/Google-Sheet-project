var scriptURL = 'https://script.google.com/macros/s/AKfycbzypF-et24W_xH_grtt9xtEP353NgUgbVeJoEJPS4lZlPpLasGqSdGlSYl4c1W6gYN-/exec'

var form = document.forms['product']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form),mode: 'no-cors'})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})