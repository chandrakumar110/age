//challenge 1: Your age in days
function age()
{
    var birth=prompt("what year are you born in ?");
    var ageindays=(2020-birth)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are '+ageindays+' days old ..!');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset()
{
    document.getElementById('ageindays').remove();
}

//challenge 2:generating images
function generateimg(){
    var image=document.createElement('img');
    var div=document.getElementById('genimg');
    image.src="red.png";
    div.appendChild(image);
}

//challenge 3: rock paper scissor
function generaterps(yourchoice){
    var humanchoice=yourchoice.id;
    var botchoice=numbertochoice(randtorpsint());
    result=decidewinner(humanchoice,botchoice);
    console.log(result);
    message=finalmessage(result);
    console.log(message);
    rpsfrontend(yourchoice.id,botchoice,message);
}
function randtorpsint(){
    return Math.floor(Math.random()*3);
}
function numbertochoice(number){
    return ['rock','paper','scissors'][number];
}
function decidewinner(yourchoice,computerchoice){
    var rpsdatabase={
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    };
    var yourscore=rpsdatabase[yourchoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][yourchoice];
    return [yourscore,computerscore];
}
function finalmessage([yourscore,computerscore]){
    if(yourscore==0){
        return {'message':'you lost','color':'red'};
    }
    else if(yourscore==0.5){
        return {'message':'you tied','color':'yellow'};
    }
    else{
        return {'message':'you won','color':'green'};
    }
}
function rpsfrontend(humanImageChoice,botImageChoice,finalmessage)
{
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    if(humanImageChoice=='scissors'){
        humanDiv.innerHTML= "<img src=scissor.jfif height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    document.getElementById('flex-box').appendChild(humanDiv);
    }
    else if(humanImageChoice=='paper'){
        humanDiv.innerHTML= "<img src=paper.jfif height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    document.getElementById('flex-box').appendChild(humanDiv);
    }
    else if(humanImageChoice=='rock'){
        humanDiv.innerHTML= "<img src=rock.jfif height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    document.getElementById('flex-box').appendChild(humanDiv);
    }
    messageDiv.innerHTML="<h1 style='color: " + finalmessage['color'] + "; font-size: 60px; padding:30px; '>" + finalmessage['message'] + "</h1>"
    document.getElementById('flex-box').appendChild(messageDiv);
    if(botImageChoice=='scissors'){
        botDiv.innerHTML= "<img src=scissor.jfif height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    document.getElementById('flex-box').appendChild(botDiv);
    }
    else if(botImageChoice=='paper'){
        botDiv.innerHTML= "<img src=paper.jfif height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    document.getElementById('flex-box').appendChild(botDiv);
    }
    else if(botImageChoice=='rock'){
        botDiv.innerHTML= "<img src=rock.jfif height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    document.getElementById('flex-box').appendChild(botDiv);
    }
   
}

//chanllenge 4: hange the colour of all buttons
var all_buttons = document.getElementsByTagName('button');
var copyAllButtons=[];
for(let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
function buttonColourChange(buttonThingy){
    if(buttonThingy.value=='red'){
        buttonRed();
    }
    else if(buttonThingy.value=='green'){
        buttonGreen();
    }
    else if(buttonThingy.value=='reset'){
        buttonReset();
    }
    else if(buttonThingy.value=='random'){
        buttonRandom();
    }
    else if(buttonThingy.value=='yellow'){
        buttonYellow();
    }
    else if(buttonThingy.value=='blue'){
        buttonBlue();
    }

}
function buttonRed(){
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');

    }
}
function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');

    }
}
function buttonYellow(){
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');

    }
}
function buttonBlue(){
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');

    }
}
function buttonReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function buttonRandom(){
    var choices=['btn-primary','btn-success','btn-warning','btn-danger']
    for(let i=0;i<all_buttons.length;i++)
    {
        var randomNum=Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNum]);
    }

}

//challenge 5: BlackJack
document.querySelector('hit').addEventListener('click',blackjackHit);
function blackjackHit(){
    alert('ouch');
}