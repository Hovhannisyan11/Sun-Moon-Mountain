let moondiv = document.getElementById('moondiv')
let sundiv = document.getElementById('sundiv');
let mountaindiv = document.getElementById('mountaindiv')

let chench = function (){
sundiv.style.transition = '10s';
sundiv.style.marginTop = '50px';
sundiv.style.backgroundColor = 'rgb(236,220,76)';
moondiv.style.marginLeft  = '-160px';
moondiv.style.transition = '13s';
document.body.style.backgroundColor = '#E4E4FF';
document.body.style.transition = '15s';



}


setTimeout(()=>{
  chench()
},1000)
