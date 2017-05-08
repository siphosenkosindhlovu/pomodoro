$(document).ready(function(){
  var startButt = document.querySelector('.start'),
      pauseButt = document.querySelector('.pause'),
      resetButt = document.querySelector('.reset'),
      clockHand = document.querySelector('.clock_hand'),
      clockInner = document.querySelector('.clock_inner');
    $('.start').css('bottom', '50px');
  $('#minus').on('click',function(){
    var inputValue = Number(document.getElementById('value').innerHTML);
    inputValue--;
    document.getElementById('value').innerHTML = inputValue;
  })
  $('#plus').on('click',function(){
    var inputValue = Number(document.getElementById('value').innerHTML);
    inputValue++;
    document.getElementById('value').innerHTML = inputValue;
  })
  function start(){
    var inputValue = Number(document.getElementById('value').innerHTML);
    console.log(inputValue)
    var time = inputValue * 60;
    clockHand.classList.toggle('animator');
    clockHand.style.animationDuration = time + 's';
    $('.clock_buttons').slideToggle('fast');
    $('.start').slideToggle('fast');
    if(clockInner.classList.contains('ended')){
      clockInner.classList.remove('ended');
      $('.clock').removeClass('ended');
    }
  }
  function end(){
    clockHand.classList.remove('animator');
    $('.clock_buttons').slideToggle('slow');
    $('.start').slideToggle('slow');
    $('.clock_inner').addClass('ended');
      $('.clock').addClass('ended');
  }
  function reset(){
    clockHand.classList.remove('animator');
    $('.clock_buttons').slideToggle('slow');
    $('.start').slideToggle('slow');
    $('.start').css('bottom', '50px');
  }
  startButt.addEventListener('click', function(event){
    console.log("Sipho");
    start();
  })
  clockHand.addEventListener('animationend',function(event){
    end();
  })
  pauseButt.addEventListener('click',function(event){
    clockHand.classList.toggle('pause');
  })
  resetButt.addEventListener('click',function(event){
    reset();
  })
})
