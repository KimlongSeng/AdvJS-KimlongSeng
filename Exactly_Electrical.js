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
Exaclty_Electrical();