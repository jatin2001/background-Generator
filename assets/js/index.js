var inp1 = document.getElementsByTagName("input")[0];
var inp2 = document.getElementsByTagName("input")[1];
var body = document.getElementsByTagName("body")[0]
var colorinfo = document.getElementsByTagName("h2")[1];

var setBackground = function()
{
    body.style.background="linear-gradient(to right,"+inp1.value+","+inp2.value+")";
    colorinfo.textContent = "The gradient is the Mixture of " +inp1.value + " or " +inp2.value;
}
inp1.addEventListener("input",setBackground);
inp2.addEventListener("input",setBackground);