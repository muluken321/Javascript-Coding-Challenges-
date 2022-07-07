
 var containsDuplicate = function(nums) {
    let copy = []
    for(let x=0;x<nums.length;x++){
        if(copy.indexOf(nums[x]) === -1){
         copy.push(nums[x])   
        }
        else{
            return true 
        }
        
    }
      return false
  };