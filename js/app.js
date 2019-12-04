let rounds=0;
let levels=0;
let timer=0;
let enemyYCoridanate=[0,150,320];//it will be used only to give y coordinate to newly created enemy object.
let levelsElement=document.getElementById('levels');
let roundsElement=document.getElementById('rounds');
let timerElement=document.getElementById('timer');
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // the dt will ensure the game runs at the same speed for all computers.
  this.x+=200*dt*(rounds+1);//multiply by rounds to increase the speed of the enemy and add 1 to rounds to avoid multiply by 0
  if(this.x>=500){
  this.x=-(Math.random()*300);
 }//end o if
checkCollisions();// check the Collisions as the enemy moving

};//end of eneny update method

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y-45);
};

// Now write your own player class
function Player(x,y){
  this.x=x;
  this.y=y;
  this.player ='images/char-boy.png';
}


// to update the player information continuously
Player.prototype.update= function(){
   this.score();
}

//to draw the player image
Player.prototype.render= function (){
  ctx.drawImage(Resources.get(this.player), this.x, this.y-45);
};

// a handleInput() method will recieve the typed buttons and move the player accordingly.
Player.prototype.handleInput= function (direction){
  console.log(direction);
  if(direction==='left'){
    if(this.x>0){//this condition prevent the player from moving out the map in left side
     this.x-=100;}
  }else if(direction==='up'){
    this.y-=85;
  }else if(direction==='right'){
    if(this.x<400){//this condition prevent the player from moving out the map in righ side
     this.x+=100;}
  }else if(direction==='down'){
    if(this.y<405){//this condition prevent the player from moving out the map in bottom side
     this.y+=85;}
}else{
  alert('Use only the arrow buttons to move your hero up ▲, down ▼, left ◄ or right ►.');
}

};

//this method will reset the game by return the player tho start point
// it called when the player whn the round or the level or collides with enemy
Player.prototype.reset=function(){
    this.y=405;
    this.x=200;
};

// this function responsible for the game information (level,roun...)
// it also mannage confirm messages to control the game level
Player.prototype.score=function(){
  if (this.y<=0){// only when player win
    rounds+=1;
   player.reset();}//end of if


  if(rounds===3){//this to check weather the level finished or yet
      levels+=1;
      if (levels==1||levels==2){
        //if the user want to proceed to next leve
          if (confirm(`Congralation !!!\n you complete level ${levels} in ${timer/1000} S \n Do you want to countinue to next level?\n press ok for countinue or cansel to stay in same level`)) {
          this.reset();
          timer=0;
          rounds=0;
          levelsElement.textContent=levels+1;//this is to dispaly the level number
          allEnemies.push(new Enemy(0,enemyYCoridanate[levels]));//new level so new enemy
        } else {
          // if the player want to stay in smae level
          this.reset();
          timer=0;
          rounds=0;
          levels-=1;//keep the same level number
         } //end of else
        } //end of if (levels==1||levels==2)
    else if(levels===3){
    //there are no next level either to stay in same levle or leve the game
      if (confirm(`Congralation !!!\n you complete level ${levels} in ${timer/1000} S \n Do you want to countinue playing?\n press ok for countinue or cansel to close the game`)) {
        console.log('the score 4');
        this.reset();
        timer=0;
        rounds=0;
        levels-=1;
    } else {
    close();
     } //end of else
    }// end of else if(levels===3)
  }//end of if(rounds===3)
   roundsElement.textContent=rounds+1;//this is to dispaly the round number
};//end of score function

// the timer
setInterval(function(){timer+=1000;
timerElement.textContent=timer/1000;//this is to dispaly the timer
},1000);

function checkCollisions(){
  allEnemies.forEach(function(enemy){
    if((player.y===enemy.y)&&(Math.abs(player.x-enemy.x)<=20)) {
      player.reset();}
   } //end of if
 )//end of for each
}//end of checkCollisions func


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies=[new Enemy(0,65),new Enemy(0,235)];
// Place the player object in a variable called player
const player=new Player(200,405);





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);

});
