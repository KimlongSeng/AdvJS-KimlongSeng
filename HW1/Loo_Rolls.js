const assert = require('assert').strict;
const readline = require('readline');
function LR()
{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.once('line', (line) => {
       var num = line.split(' ');
       var int1 = parseInt(num[0]);
       var int2 = parseInt(num[1]);
       var ans = 1;
       while(int1 % int2 != 0)
       {
           int2 -= int1 % int2;
           ans++;
       }
       console.log(ans);  
       readline.close();
     }
  );
}

function answer(x,y)
{
  var ans = 1;
       while(x % y != 0)
       {
           y -= x % y;
           ans++;
       }
       return ans;
}
function test()
{ assert.strictEqual(answer(31,6),4,new TypeError("Test 1 fail"));
  assert.strictEqual(answer[99,9],1,new TypeError("Test 2 fail"));
 assert.strictEqual(answer[10000000000 ,17], 3,new TypeError("Test 3 fail"));
  console.log('all test cases passed!');
}

if (require.main == module)
{
 
 if (process.argv[2] == 'test') 
 test();
  else
    LR();
}
