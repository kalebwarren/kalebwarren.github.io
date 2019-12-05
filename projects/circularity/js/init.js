var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
            var circle;
            var circles = [];

        // TODO 2 : Create a function that draws a circle 
            function drawCircle() {
                circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
                physikz.addRandomVelocity(circle, canvas);
                view.addChild(circle);
                circles.push(circle);
            }        

        // TODO 3 / 7 : Call the drawCircle function 

            for (var numCircles = 0; numCircles < 200; numCircles++) {
                drawCircle();
            }

    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            
            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            } 
            // TODO 5a) if the circle has gone past of the LEFT side of the screen then place it on the RIGHT
            else if (circle.x < 0 ) {
                circle.x = canvas.width;
            } 

            // TODO 5b) if the circle has gone past of the TOP side of the screen then place it on the BOTTOM
            if ( circle.y > canvas.height) {
                circle.y = 0;
            }
            // TODO 5c) if the circle has gone past of the BOTTOM side of the screen then place it OFF-SCREEN TOP
            else if ( circle.y < 0) {
                circle.y = canvas.height;
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        }
    
        function update() {
            // TODO 4 : Update the circle's position //
              for(var i = 0; i < circles.length; i++) {
                  physikz.updatePosition(circles[i]);
                  game.checkCirclePosition(circles[i]);
              }
              
              
//              for ( ;; ){}
            // TODO 5 : Call game.checkCirclePosition on your circles.
           

            // TODO 8 : Iterate over the array
           

        }
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
