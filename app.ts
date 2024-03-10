let personname :string = '';

personname = prompt('what is your name?') || '';

if (personname !== null && personname !== ''){
    alert(`hello ${personname}, would you like to leran some python today?`)
}
else{
    alert('you have to fil your name!')
}