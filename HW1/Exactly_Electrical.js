const assert = require('assert').strict;
function Exaclty_Electrical()
{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.once('line', (line) => {
        var num = line.split(' ');
        var start1 = parseInt(num[0]);1
        var start2 = parseInt(num[1]);
         readline.once('line', (line) => {
            var num1 = line.split(' ');
            var dest1 = parseInt(num1[0]);
            var dest2 = parseInt(num1[1]);
            var dist = Math.abs(dest1 -start1)+ Math.abs(dest2 - start2);
            readline.once('line', (line) => {
                var num2 = line.split(' ');
                var charge = parseInt(num2[0]);
                if (charge >= dist && (charge-dist) % 2 == 0 )
                {
                    console.log("Y");
                }
                else
                {
                    console.log("N");
                }
                readline.close();
            });
        });
      });
}
function answer(a,b,c,d,e)
{
    var dist = Math.abs(c -a)+ Math.abs(d - b);
    return (e-dist) % 2 ;

}

function test()
{ assert.strictEqual(answer(3,4,3,3,3),0,new TypeError("Test 1 fail"));
  assert.strictEqual(answer[3,2,3,3,3],0,new TypeError("Test 2 fail"));
 assert.strictEqual(answer[2,2,2,2,2],0,new TypeError("Test 3 fail"));
  console.log('all test cases passed!');
}

if (require.main == module)
{
 
 if (process.argv[2] == 'test') 
 test();
  else
  Exaclty_Electrical();
}
