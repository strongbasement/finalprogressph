
function sizechange(){
    var sw=window.innerWidth;
    var sh=window.innerHeight;
    for(var i=0;i<=4;i++)
{
    if(sw<900)
    {
        document.querySelectorAll("img")[i].setAttribute("width",sw/2);
        document.querySelectorAll("img")[i].setAttribute("height",sh/2); 
    }else{
        document.querySelectorAll("img")[i].setAttribute("width",sw);
        document.querySelectorAll("img")[i].setAttribute("height","720px");
    }
;
}
}
sizechange();
window.onresize=sizechange;