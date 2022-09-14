var num = 1234;
console.log(num)
let rev = 0;
let last;

while(num != 0)
{
    last = num % 10;
    rev = rev*10 + last;
    num = Math.floor(num/10);    
}
document.write("reverse "+rev)