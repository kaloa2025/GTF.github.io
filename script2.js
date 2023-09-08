function highlight(x)
{
    var flag=true;
x.style.color="#002365";
x.style.border="2px #002365";
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

    if(a==null|| a=="")
    {
        alert("Enter value of n");
        return false;
    }
}
function cal()
{
    var n=document.calculator.n.value;
    var x=parseInt(n);
    let isPrime = true;
    var r;
    if(x==1)
    {
        r=1;
    }
    else
    {
        r = n;
        for (i = 2; i*i <= n; i++) 
        {
            if (n % i == 0) 
            {
                r -= r / i;
                while (n % i == 0) 
                {
                    n /= i;
                }
            }
        }
        r -= r / n;
    }
    document.getElementById("box").value=r;
    document.getElementById("box").placeholder =r;
}
