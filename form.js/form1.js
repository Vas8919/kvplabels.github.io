let h;
let w;
let area;
console.log("hello");
document.getElementById("sub").onclick=function()
{
    h=document.getElementById("hei").value;
    w=document.getElementById("wei").value;
    area=0.5 * h* w ;
    console.log(area);
    document.getElementById("par").innerHTML="Area of triangle is :"+area;
}