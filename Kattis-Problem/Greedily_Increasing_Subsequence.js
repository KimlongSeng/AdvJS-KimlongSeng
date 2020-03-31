
// NEED TO learn more about queue code not working 


function GIS()
{
    var max =0;
    var q = queue();
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.once('line', (line) => {
       var input = line.split(' ');
       var int1 = parseInt(input[0]);
       readline.once('line', (line) => {
       var input2 = line.split(' ');
       while(int1--)
       {
        var curr = input2
        if (max < curr)
        {
            max < curr;
            q.push(curr);
        }
       }
       console.log(q.size());
       while(q.size())
       {
           console.log(q.front());
           q.pop();
       }
       });
       readline.close();
     });
}
GIS();