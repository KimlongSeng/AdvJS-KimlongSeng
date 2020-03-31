function R2()
{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.once('line', (line) => {
       var num = line.split(' ');
       var int1 = parseInt(num[0]);
       var int2 = parseInt(num[1]);
       var ans = (int2 - (int1-int2));
       console.log(ans);  
       readline.close();
     }
  );
}
R2();