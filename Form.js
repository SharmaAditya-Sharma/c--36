 class Form {

    constructor (){}

    display(){
    var title = createElement('h2');
    title.html("car racing game");
    title.position(450,0);

    var input = createInput("name");
    var button = createButton("play");
    
    input.position(450,160);
    button.position(510,200);
    
    button.mousePressed(function(){
        input.hide();
        button.hide();

       var name = input.value();
       
       playerCount+=1;
       player.update(name);
       player.updateCount(playerCount);
       var greeting = createElement('h3');
       greeting.html("Hello" + name);
       greeting.position(450,160);
       
    })
        
    
    
    
    }

 }