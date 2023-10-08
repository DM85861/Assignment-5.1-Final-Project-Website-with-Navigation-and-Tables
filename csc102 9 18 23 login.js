function CheckInput()
{
  var BeginName = document.getElementById("BeginName").value;
    
    
    var endName = document.getElementById("endname").value;
    
    
    var allName = BeginName + " " + endName;

    var len = allName.length;
    
    
     var PassCode = document.getElementById("PassNum").value;
     
    
    if (len <3)
    {
        document.getElementById("loginStatus").innerHTML = "Name length did not compute";
    }
    else if ((PassCode.length ==5))
    {
        document.getElementById("loginStatus").innerHTML = "Computed Login!";
        location.replace("csc102 (found index).html");  
    }
    else 
    {
        document.getElementById("loginStatus").innerHTML = "Not a Computed Login!";;    
    }
}

function FireIn()
{
    mysound = new sound("csc102 9 25 23 fireplace-fire-crackling-loop.mp3");
    mysound.play();
}

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}

function FireOut()
{
    window.location.reload();
} 




    

