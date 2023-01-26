let symmetry = 11;
let angle = 100 / symmetry;
let saveButton;
let clearButton;
let slider;
let xoff = 0.1;

function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES);
  background('#222222');
  saveButton = createButton('save');
  saveButton.mousePressed(saveSnowflake);
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  slider = createSlider(3, 40, 4, 0.1);
  //colorMode(RGB, 255, 255, 255, 1);

}

function saveSnowflake() {
  save('snowflake.png');
}

function clearCanvas() {
  background('#222222');
}


function draw() {
  translate(width / 2, height / 2);


  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      let hu = map(sin(xoff), -1,1,3,255);
      xoff += 8;
      stroke(hu, 100);
      let angle = 360 / symmetry;
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        //let d = dist(mx, my, pmx, pmy);
        //let sw = map(d, 0, 16, 16, 2);
        let sw = slider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}



