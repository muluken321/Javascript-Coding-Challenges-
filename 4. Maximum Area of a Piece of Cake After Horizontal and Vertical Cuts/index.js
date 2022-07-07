
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    
    horizontalCuts.push(h)
    verticalCuts.push(w)
    horizontalCuts.sort()
    verticalCuts.sort()

    let mex_w = 0;
    let max_height = 0;
    for(let i=0;i<horizontalCuts.length-1;i++){
        mex_w = Math.max(mex_w, (horizontalCuts[i+1] - horizontalCuts[i]))
   
    }
        for(let i=0;i<verticalCuts.length-1;i++){
        max_height = Math.max(max_height, (verticalCuts[i+1] - verticalCuts[i]))
    }

    return (max_height * mex_w) % 1000000007
};
console.log(maxArea(5,4, [1,2,4], [1,3]))