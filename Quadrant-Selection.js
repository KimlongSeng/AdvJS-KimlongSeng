function QS()
{
    var ans;
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.once('line', (line) => {
       var num = line.split(' ');
       var int1 = parseInt(num[0]);
        readline.once('line',(line) =>{
            var nth = line.split(' ');
            var int2 = parseInt(nth[0]);
            if (int1 > 0 && int2 > 0)
            {
               ans = 1; 
            } 
             if (int1 > 0 && int2 < 0)
            {
               ans = 4; 
            } 
            if (int1 < 0 && int2 > 0)
            {
               ans = 2; 
            } 
            if (int1 < 0 && int2 < 0)
            {
               ans = 3; 
            } 
            console.log(ans);
            readline.close();
           });
    });
}
QS();