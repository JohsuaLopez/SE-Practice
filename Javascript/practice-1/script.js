 // from a blank file: maxOf([3, 9, 2]) → 9 (use a loop, not Math.max)

 let numsARR = [3,9,2,10,11];

 let max1 = 0;
 for (let i=0 ;i < numsARR.length ; i++){
    
    if (numsARR[i]> max1){
        max1 = numsARR[i];
    }
    


 }
 console.log(max1);