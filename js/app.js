/*** TODOS ***/
//test webgazer.js
//attempt to get a constant stream of x,y coordinates of my gaze
//try to visualize where my gaze is pointing at

//introduce p5.js
//draw a bunch of shapes
//highlight a shape when i look at it

//build polygon class with:
//random side count, random color, same size
//put a bunch of polygons in an array

webgazer.setGazeListener((data, elapsedTime) => {

  console.log("hello?");
  console.log(data.x, data.y);
}).begin();