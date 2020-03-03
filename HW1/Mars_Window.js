const assert = require('assert').strict;
Math.fmod = function (a,b) { return Number((a - (Math.floor(a / b) * b)).toPrecision(8)); };
function MW()
{
    
    var fmod;
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      var window = 2.1666666666666;
      readline.once('line', (line) => {
       var num = line.split(' ');
       var years = parseInt(num[0]);
    var ans = Math.fmod(years-2017.33333333333333333333333333333333, window);
     if (ans < 1)
     {
      
        console.log('yes');
     }
    else {
     
        console.log('no');
    }
       readline.close();
     }
  );
}
function answer(x)
{
  var window = 2.1666666666666;
  return Math.fmod(x-2017.33333333333333333333333333333333, window);
}
function test() {
   assert.s(answer[2018], );
   assert.strictEqual(answer[2019],0.66666667,new TypeError("Test 1 fail"));
   assert.strictEqual(answer[2020],1.6666667,new TypeError("Test 2 fail"));
   assert.strictEqual(answer[2028],2,new TypeError("Test 3 fail"));
   console.log('all test cases passed!');
 }
 if (require.main == module) {
   if (process.argv[2] == 'test') test();
   else MW();
 }
