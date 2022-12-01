let Hslider, Vslider, sldWidth, sldHeight, SldCorner, RdShape, CpShape1, CpShape2  ;

// string variables

let param1 ="Width"
let param2 ="Height"

function setup()
{
  createCanvas(400, 400);
  Hslider = createSlider(1 , 9, 8)
  Hslider.position(410, 25)
  Hslider.style('width', '160px')
 
 
  Vslider = createSlider(1 , 9, 8)
  Vslider.position(410, 50)
  Vslider.style('width', '160px')
 
  sldWidth = createSlider(1 , 100, 25)
  sldWidth.position(410, 80)
  sldWidth.style('width', '160px')
 
 
  sldHeight = createSlider(1 , 100, 25)
  sldHeight.position(410, 110)
  sldHeight.style('width', '160px')
 
  RdShape = createRadio();
  RdShape.option("Rect")
  RdShape.option("RoundRect")
  RdShape.option("Circle")
  RdShape.selected("Rect")
  RdShape.position(410, 160)
 
  CpShape1 = createColorPicker('#FFC107')
  CpShape1.position(410, 190)
  CpShape1.style("height", "25px")
 
  CpShape2 = createColorPicker('#FFA88C')
  CpShape2.position(490, 190)
  CpShape2.style("height", "25px")
 
 
 
}

function draw()
{
  background(220);
 
  text ("dummy", 550, 40)
  text ("dummy", 550, 60)
  text (param1, 550, 95)
  text (param2, 550, 120)
 
  for(m=0 ; m < Vslider.value() ; m++)
    {
    for (i=0; i < Hslider.value() ; i++)
      {
        if(i%2==1 && m%2==1 )
          {
            fill(CpShape1.color())
          }
        else if(i%2==0 && m%2==0 )
          {
            fill(CpShape1.color())
          }
        else
          {
            fill(CpShape2.color())
          }

        if (RdShape.value() == "Rect")
          {  param1 = "Width"
            param2 = "Height"
            sldHeight.show()
            rect( 40*i+5, 40*m, sldWidth.value() , sldHeight.value() )
          }
        else if (RdShape.value() == "RoundRect")
          { param1 = "Width"
            param2 = "Height"
            sldHeight.show()
            rect( 40*i+20, 40*m, sldWidth.value() , sldHeight.value() , 10 )
          }
        else
          {
            param1 = "Radius"
            param2 = ""
            sldHeight.hide()
            circle ( 60*i+20, 60*m, sldWidth.value() )
          }    
      }
    }
}