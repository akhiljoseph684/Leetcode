/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let diff = 0;
    let greatest = 0;
    for(let i = 0; i < points.length - 1; i++){
      diff = Math.abs(points[i][0] - points[i + 1][0])
      if(diff > greatest){
        greatest = diff;
      }
    }
    return greatest;
};