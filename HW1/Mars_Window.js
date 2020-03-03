const assert = require('assert').strict;

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
       Math.fmod = function (a,b) { return Number((a - (Math.floor(a / b) * b)).toPrecision(8)); };
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
function test() {
   assert.strictEqual(answer[2018],'yes');
   assert.strictEqual(answer[2019],'no');
   assert.strictEqual(answer[2020],'yes');
   assert.strictEqual(answer[2028],'no');
   console.log('all test cases passed!');
 }
 if (require.main == module) {
   if (process.argv.length > 2 && process.argv[2] === 'test') test();
   else MW();
 }
