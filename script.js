//Challenge 1

function ageindays(){
var birthyear = prompt('what year where you born good friend?')
var age = (2023 - birthyear) * 365
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('you are ' + age + ' days old')
h1.setAttribute('id', 'ageindays');
h1.appendChild(textAnswer)
document.getElementById('flex-box-result').appendChild(h1);

  }  

  function reset(){
    document.getElementById('ageindays').remove()
  }


  //challenge2

  function generatecat(){
    var image = document.createElement('img');
    var div = document.getElementById('catgen');
    image.src = "Assets/girl.jpg"
    div.appendChild(image)
  }


  //challenge3
  function rpsgame(yourChoice) {
    console.log(yourChoice)
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randomTorpsInt());
  console.log('computer Choice', botChoice)

  result = decidewinner(humanChoice,botChoice); //{0,1}
  console.log(result);

  message = finalMessage(result); //{} message:'you won', color: green}
  console.log(message)

  rpsfrontend(yourChoice.id, botChoice, message);
  }

  function randomTorpsInt(){
    return Math.floor(Math.random() * 3);
  }


  function numberToChoice(number){ 
    return ['rock', 'paper', 'scissors'][number]
  }


  function decidewinner(yourChoice, computerChoice){
    var rpsDatabase = {
      'rock': {'scissors':1, 'rock':0.5, 'paper':0},
      'paper': {'rock':1, 'paper':0.5, 'scissors':0},
      'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
  }

  function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
      return {'message':'You lost!', 'color':'red'}
    }
      else if (yourScore === 0.5){
      return {'message':'You tide!', 'color':'yellow'}
    }
      else{
      return {'message':'You won!', 'color':'green'}
    }
    
  }

  
  function rpsfrontend(humanimagechoice, botimagechoice, finalMessage){
    var imagedatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src
    }

    //removing all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(28,32,233,1);'>"
    messagediv.innerHTML = "<h1 style=' color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src='" + imagedatabase[botimagechoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"


    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    
    document.getElementById('flex-box-rps-div').appendChild(messagediv);

    document.getElementById('flex-box-rps-div').appendChild(botdiv);
  }


  //challenge4
  var all_buttons = document.getElementsByTagName('button')



  var copyallButtons = [];
  for (let i = 0; i<all_buttons.length; i++){
    copyallButtons.push(all_buttons[i].classList[1]);
  }



  function buttonColorChange(buttonThingy){
   if (buttonThingy.value === 'red'){
    buttonred();
   }
   else if (buttonThingy.value ==='green'){
    buttongreen();
   }
   else if (buttonThingy.value === 'reset'){
    buttonColorreset()
   }
   else if (buttonThingy.value === 'random'){
    randomcolors()
   }
  }


  function buttonred(){
    for (let i=0; i<all_buttons.length; i++){
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add('btn-danger');
    }
  }

  function buttongreen(){
    for (let i=0; i<all_buttons.length; i++){
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add('btn-success');
    }
  }

    function buttonColorreset() {
      for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyallButtons[i]);
      }
   }

   function randomcolors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
     
    for(let i =0; i<all_buttons.length; i++){
      let randomnumber = Math.floor(Math.random()*4);
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(choices[randomnumber]);
    }
   }


   //Blackjack
   let BlackjackGame = {
    'you':{'scoreSpan':'#your-blackjack-result', 'div':'#your-box', 'score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score':0}
   }

   const You = BlackjackGame['you']
   const Dealer = BlackjackGame['dealer']

   const hitSound = new Audio('Assets/swish.m4a');

   document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit)

   document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal)

   function blackjackhit(){
    showCard(Dealer)
   }


function showCard(activeplayer) {
  let cardImage = document.createElement('img');
  cardImage.src = 'Assets/Q.png';
  document.querySelector(activeplayer['div']).appendChild(cardImage);
  hitSound.play();
}

function blackjackDeal(){
  let yourImage = document.querySelector('#your-box').querySelectorAll[img]
 console.log(yourImage);
 yourImage[0].remmove()
 
 
}
   