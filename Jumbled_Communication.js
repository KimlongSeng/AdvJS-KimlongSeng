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
JC();