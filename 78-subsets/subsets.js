/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let arr = []
  nums.sort()
  if(nums.length > 2){
    arr = [[],[...nums]];
  }else{
    arr = [[]]
  }
    
    for(let i = 0; i < nums.length; i++){
      arr.push([nums[i]])
      for(let j = i + 1; j < nums.length; j++){
        if(nums.length > 3){
          for(let k = j + 1; k < nums.length; k++){
            if(nums.length > 4){
              for(let a = k + 1; a < nums.length; a++){
                if(nums.length > 5){
                  for(let b = a + 1; b < nums.length; b++){
                    if(nums.length > 6){
                      for(let x = b + 1; x < nums.length; x++){
                        if(nums.length > 7){
                          for(let y = x + 1; y < nums.length; y++){
                            if(nums.length > 8){
                              for(let c = y + 1; c < nums.length; c++){
                                if(nums.length > 9){
                                  for(let d = c + 1; d < nums.length; d++){
                                    if(nums.length > 10){
                                      for(let e = d + 1; e < nums.length; e++){
                                        if(nums.length > 11){
                                          for(let f = e + 1; f < nums.length; f++){
                                            arr.push([nums[i], nums[j], nums[k], nums[a], nums[b], nums[x], nums[y], nums[c], nums[d], nums[e], nums[f]])
                                          }
                                        }
                                        arr.push([nums[i], nums[j], nums[k], nums[a], nums[b], nums[x], nums[y], nums[c], nums[d], nums[e]])
                                      }
                                    }
                                    arr.push([nums[i], nums[j], nums[k], nums[a], nums[b], nums[x], nums[y], nums[c], nums[d]])
                                  }
                                }
                                arr.push([nums[i], nums[j], nums[k], nums[a], nums[b], nums[x], nums[y], nums[c]])
                              }
                            }
                            arr.push([nums[i], nums[j], nums[k], nums[a], nums[b], nums[x], nums[y]])
                          }
                        }
                        arr.push([nums[i], nums[j], nums[k], nums[a], nums[b], nums[x]])
                      }
                    }
                    arr.push([nums[i], nums[j], nums[k], nums[a], nums[b]])
                  }
                }
                arr.push([nums[i], nums[j], nums[k], nums[a]])
              }
            }
            arr.push([nums[i], nums[j], nums[k]])
          }
        }
          arr.push([nums[i], nums[j]])
        
      }
    }
    return arr
};