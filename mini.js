


function c()
{
    var a=document.getElementById("n1").value;
    var b=document.getElementById("n2").value;
    var c=document.getElementById("n3").value;
    
    if(a<b && a<c)
        {
           console.log("Minimum : " +a);
           document.getElementById("ans").innerText="negative";

        }
    else if(b<a && b<c)
       {
           console.log("Minimun : " +b);
       }
    else
       {
            console.log("Minimun : " +c);
       }
    
       
    
    if(a>b && a>c)
        {
            console.log("Maximun : " +a);
        }
    else if(b>a && b>c)
        {
            console.log("Maximun : " +b);
        }
    else
        {
            console.log("Maximun : " +c);
        }
}

