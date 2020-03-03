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
function test() {
    assert.strictEqual(answer[99,28,11],33,244,249);
    assert.strictEqual(answer[55,44,22],237 ,228 ,242);
    assert.strictEqual(answer[58,59,205,20,198], 22,55,187,12,66);
    console.log('all test cases passed!');
  }

  if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test') test();
    else JC();
  }
 