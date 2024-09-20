//get input by id 
function getNumberInputById(id){
    const number=document.getElementById(id);
    const numbertype=parseFloat(number.value)
    return numbertype;
}
//login 

const login=document.getElementById('loginButon');
login.addEventListener('click',function(event){
    event.preventDefault();
  const numberdigit=getNumberInputById('phonenumber');
  const loginpin=getNumberInputById('loginpin');
if(loginpin==1111){
    window.location.href='home.html'
}
})