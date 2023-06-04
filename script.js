function highlight(x)
{
    var flag=true;
x.style.color="#4caf50";
x.style.border="2px green";
x.style.fontSize="20px";
}
function set()
{
    document.getElementById("calculator").reset();
}
function validate()
{
    var a=document.calculator.a.value;
    var b=document.calculator.b.value;

    if(a==null || b==null || a=="" || b=="")
    {
        alert("Enter value of both a and b");
        return false;
    }else if(a<0||b<0)
    {
        alert("Please enter positive integers only");
        return false;
    }
}
function cal()
{
    var a=document.calculator.a.value;
    var b=document.calculator.b.value;
    var A=parseInt(a);
    var B=parseInt(b);
    var r;
    while(r!=0)
    {
        r=B%A;
        if(r==0)
        {
            break;
        }
        B=A;
        A=r;
    }
    result=A;
    document.getElementById("box").value=result;
    document.getElementById("box").placeholder =result;
}