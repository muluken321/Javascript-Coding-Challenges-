

 var maxSubArray = function(nums) {
    
    let elements = [nums[0]]
    let current = 0;
    for(let x=0;x<nums.length; x++){
     if(current<0){
        current = 0;
     }
current = current+nums[x]
elements = Math.max(elements, current)
    }
return elements

};
