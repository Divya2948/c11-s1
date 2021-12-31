var weight=[35,38,40,45]
var sum=0
function weight_average(){
  //var sum=weight[0]+weight[1]+weight[2]+weight[3]
  for(i=0;i<weight.length;i++){
    sum=sum+weight[i]
  }
  var avg=sum/weight.length
  console.log(avg)
}
function setup() 
{
  createCanvas(400,400);
  weight_average()
}

function draw() 
{
background(51);

}

