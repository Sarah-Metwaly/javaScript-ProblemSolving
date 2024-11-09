// Question 1

// var num=window.prompt('Enter a number:');
// console.log( typeof(num) );

//Question 2

// var num=window.prompt('Enter a number');
// if(num%3==0 && num%4==0)
// {
//     console.log('Yes');
// }
// else{
//     console.log("No");
// }

// Question 3

// var num1=window.prompt('Enter the first number :');
// var num2=window.prompt('Enter the second number :');
// if(num1>=num2){
//     console.log(num1);
// }
// else
// {
//     console.log(num2);
// }

// Question 4

// var num=window.prompt('Enter an integer: ');
// if(num<0){
//     console.log('Negative');
// }
// else{
//     console.log('Positive');
// }

// Question 5

// var num1=parseInt(window.prompt('Enter the first number: '));
// var num2=parseInt(window.prompt('Enter the second number: '));
// var num3=parseInt(window.prompt('Enter the third number: '));
// if(num1>=num2 && num1>=num3){
//     console.log('max : ' + num1);
//     if(num2<num3){
//         console.log('min : '+num2);
//     }
//     else{
//         console.log('min : '+num3);
//     }
// }
// else if(num2>=num1 && num2>=num3){
//     console.log('max : '+num2);
//     if(num1<num3){
//         console.log('min : '+num1);
//     }
//     else{
//         console.log('min : '+num3);
//     }
// }
// else{
//     console.log('max : '+num3);
//     if(num2<num1){
//         console.log('min : '+num2);
//     }
//     else{
//         console.log('min : '+num1);
//     }
// }

//  Question 6

// var num=parseInt(window.prompt('Enter a number: '));
// if(num%2==0){
//     console.log("This number is even");
// }
// else{
//     console.log("This number is odd");
// }

// Question 8

// var char=window.prompt('Enter a letter: ');
// if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
//     console.log("Vowel")
// }
// else
// {
//     console.log("Consonant");
// }

// Question 9

// var num=window.prompt('Enter a number: ');
// for(var i=1;i<=num;i++){
//     console.log(i);
// }

// Question 10

// var num=window.prompt('Enter a number: ');
// for(var i=1;i<=12;i++){
//     console.log(i*num);
// }

// Question 11

// var num=window.prompt('Enter a number: ');
// for(var i=1;i<=num;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Question 12

// var num1=window.prompt('Enter a number: ');
// var num2=window.prompt('Enter a number: ');
// console.log(num1**num2);

// Question 12

// var num1=parseInt(window.prompt('Enter a number: '));
// var num2=parseInt(window.prompt('Enter a number: '));
// var num3=parseInt(window.prompt('Enter a number: '));
// var num4=parseInt(window.prompt('Enter a number: '));
// var num5=parseInt(window.prompt('Enter a number: '));
// var sum=num1+num2+num3+num4+num5;
// console.log(sum);
// console.log(sum/5);
// console.log((sum/500)*100);

// Question 13

// var num=parseInt(window.prompt('Enter the month number: '));
// if(num==1 || num==3 || num==5 || num==7 || num==8 || num==10 || num==12){
//     console.log(31);
// }
// else if(num==2){
//     console.log(28);
// }
// else if(num==4 || num==6 ||num==9 || num==11){
//     console.log(30);
// }

// Question 14

// var num1=parseInt(window.prompt('Enter a number: '));
// var num2=parseInt(window.prompt('Enter a number: '));
// var num3=parseInt(window.prompt('Enter a number: '));
// var num4=parseInt(window.prompt('Enter a number: '));
// var num5=parseInt(window.prompt('Enter a number: '));
// var sum=num1+num2+num3+num4+num5;
// var percentage=(sum/500)*100;
// if(percentage>=90){
//     console.log('Grad A');
// }
// else if(percentage>=80){
//     console.log('Grad B');
// }
// else if(percentage>=70){
//     console.log('Grad C');
// }
// else if(percentage>=60){
//     console.log('Grad D');
// }
// else if(percentage>=40){
//     console.log('Grad E');
// }
// else if(percentage<40){
//     console.log('Grad F');
// }

// Question 15

// var num=parseInt(window.prompt('Enter a number: '));
// switch(num){
//     case 1:
//         console.log(31);
//         break;
//     case 2:
//         console.log(28);
//         break;
//     case 3:
//         console.log(31);
//         break;
//     case 4:
//         console.log(30);
//         break;
//     case 5:
//         console.log(31);
//         break;
//     case 6:
//         console.log(30);
//         break;
//     case 7:
//         console.log(31);
//         break;
//     case 8:
//         console.log(30);
//         break;
//     case 9:
//         console.log(30);
//         break;
//     case 10:
//         console.log(31);
//         break;
//     case 11:
//         console.log(30);
//         break;
//     case 12:
//         console.log(31);
//         break;
//     default:
//         console.log('error');
// }

// Question 16

// var char=window.prompt('Enter a number: ');
// switch(char){
//     case 'a':
//         console.log('vowel');
//         break;
//     case 'e':
//         console.log('vowel');
//         break;
//     case 'i':
//         console.log('vowel');
//         break;
//     case 'o':
//         console.log('vowel');
//         break;
//     case 'u':
//         console.log('vowel');
//         break;
//     default:
//         console.log('consonant');
// }

// Question 17

// var num1=parseInt(window.prompt('Enter a number: '));
// var num2=parseInt(window.prompt('Enter a number: '));
// switch (true){
//     case(num1>num2):
//         console.log('max : '+num1);
//         break;
//     default:
//         console.log('max : '+num2);
//         break;
// }

// Question 18

// var num1=parseInt(window.prompt('Enter a number: '));

// switch (true){
//     case(num1%2==0):
//         console.log('even');
//         break;
//     default:
//         console.log('odd');
//         break;
// }

// Question 19

// var num1=parseInt(window.prompt('Enter a number: '));

// switch (true){
//     case(num1>0):
//         console.log('positive');
//         break;
//     case(num1<0):
//         console.log('negative');
//         break;
//     default:
//         console.log('zero');
//         break;
// }

// Question 20

var num1=parseInt(window.prompt('Enter a number: '));
var num2=parseInt(window.prompt('Enter a number: '));
var op=window.prompt('Enter an operator (+/-/*/ / /**)');

switch(op){
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        console.log(num1/num2);
        break;
    case '**':
        console.log(num1**num2);
        break;
    default:
        console.log("enter a valid operator")
}


