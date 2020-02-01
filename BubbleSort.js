
function bubble_Sort(nth)
{
    var swapp;
    var n = nth.length-1;
    var x=nth;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

function getinfo()
{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.once('line', (line) => {
       var num = line.split(' ');
       var row = parseInt(num[0]);
       var max = parseInt(num[1]);
       //console.log(row,max);
       if(row > 0){
           //console.log('hi');
            readline.once('line',(line) =>{
            var nth = line.split(' ');
            console.log(nth);
            readline.close();
       });
       }


       });

}


getinfo();