
const assert = require('assert').strict;
function JC()
{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.once('line', (line) => {
       var num = line.split(' ');
       var Nbyte = parseInt(num[0]);
       while(Nbyte--)
       {
        var z=0;
        var i;
        readline.once('line', (line) =>
        {
            var num2 = line.split(' ');
            var byte = parseInt(num2[z++]);
        for (i=0;i<256;i++)
        {
            var trial = i ^ (i<<1);
            if (byte == trial % 256)
            {
                console.log(i);
                break;
            }
        }
        readline.close();
        });
       }
     }
  );
}
function answer(x)
{
  for (var i=0;i<256;i++)
        {
            var trial = i ^ (i<<1);
            if (x == trial % 256)
            {
                console.log(i);
                break;
            }
        }
    }
function test() {
    assert.strictEqual(answer[55],237,new TypeError("Test 1 fail"));
    assert.strictEqual(answer[66],62,new TypeError("Test 2 fail"));
    assert.strictEqual(answer[99],33,new TypeError("Test 3 fail"));
    console.log('all test cases passed!');
  }

  if (require.main == module) {
    if (process.argv[2] == 'test')
    { 
      test();
    }
    else JC();
  }
 