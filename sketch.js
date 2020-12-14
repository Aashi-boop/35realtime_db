var ball;
var mydatabase,position;   //1
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    mydatabase=firebase.database();   //2
    var node=mydatabase.ref("ball/pos")  //3
    node.on("value",readOp, showerror)  //4
}

function draw(){
    background("white");
   if(position!==undefined)
    {
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    }
    drawSprites();
    }


function changePosition(a,b){

    mydatabase.ref("ball/pos").set({   //10

    x : ball.x + a,    //12
    y : ball.y + b    //12

    }) 


  // ball.x = ball.x + a; 
  // ball.y = ball.y + b;
}
function readOp(data) //5
{
position= data.val(); //6
ball.x=position.x   //7 
ball.y=position.y   //7


}

function showerror()  //8
{
    console.log("error")    //9
}