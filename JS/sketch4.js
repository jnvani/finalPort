let slider
function setup() {
createCanvas(400,400);


  colorMode(RGB);
  sliderR = createSlider(0, 360, 60, 40);
  sliderR.position(300, 350);
  sliderR.style('width', '80px');
  
  colorMode(RGB);
  sliderG = createSlider(0, 360, 60, 40);
  sliderG.position(200, 350);
  sliderG.style('width', '80px');
  
  colorMode(RGB);
  sliderB = createSlider(0, 360, 60, 40);
  sliderB.position(100, 350);
  sliderB.style('width', '80px');
  
  
  sliderW = createSlider(0, 360, 60, 40);
  sliderW.position(130, 300);
  sliderW.style('width', '80px');
  
  sliderH = createSlider(0, 360, 60, 40);
  sliderH.position(220, 300);
  sliderH.style('width', '80px');
  
  sliderX = createSlider(0, 360, 60, 40);
  sliderX.position(220, 250);
  sliderX.style('width', '80px');
 
  sliderY = createSlider(0, 360, 60, 40);
  sliderY.position(130, 250);
  sliderY.style('width', '80px');
 
}

function draw() {
  background(220);
 let valR = sliderR.value();
 let valG = sliderG.value();
let valB = sliderB.value();
  fill(valR,valG,valB);
  let valW = sliderW.value();
  let valH = sliderH.value();
  let valX = sliderX.value();
  let valY = sliderY.value();
  
  rect(valX,valY,valW,valH);
  
  
  
}