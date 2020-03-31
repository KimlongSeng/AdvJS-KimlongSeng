function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
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
            readline.once('line',(line) =>{
            var nth = line.split(' ');
            var arr = nth;
            var len = nth.length, i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    readline.close();
    console.log(arr);
    return arr;
           });
    });
}
getinfo();
