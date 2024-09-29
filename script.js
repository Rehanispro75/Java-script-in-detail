var var1 ="What is name ? ";
document.write(var1);
var var2 =var1.replace("what is" , "what is your" );

document.write(var2);
var var3 =var2.search("name");
document.write(var3);

try {

     alert("hello world" );
}
catch(err) {
    document.write("this is error");
}

function multiply(a,b,c) {
return a*b*c

}
var multiplication = multiply(5,5,5);
document.write(multiplication)