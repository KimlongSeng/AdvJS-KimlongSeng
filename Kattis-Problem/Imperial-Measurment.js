function R2()
{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.once('line', (line) => {
       var input = line.split(' ');
       var int1 = parseInt(input[0]);
       var int2 = input[4];
      
       readline.close();
     }
  );
}
R2();