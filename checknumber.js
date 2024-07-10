
function c()
{
    var a=document.getElementById("number").value;

    if(a<0)
        {
            document.getElementById("ans").innerText="negative";
        }
    else if(a==0)
        {
            document.getElementById("ans").innerText="neutral";;
    
        }
    else{
        document.getElementById("ans").innerText="possitive";
    
    }
}