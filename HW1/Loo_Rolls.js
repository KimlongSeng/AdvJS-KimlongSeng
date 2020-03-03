const assert = require('assert').strict;
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

function test()
{
  assert.strictEqual(answer[31,6],4);
  assert.strictEqual(answer[99,9],1);
  assert.strictEqual(answer[10000000000 ,17], 3);
  console.log('all test cases passed!');
}

if (require.main == module)
{
   if (process.argv.length > 2 && process.argv[2] === 'test')
    test();
  else
    LR();
}
