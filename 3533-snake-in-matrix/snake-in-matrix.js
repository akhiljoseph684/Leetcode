/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
  let count = 0;
    for(let i = 0; i < commands.length; i++){
      switch (commands[i]) {
        case 'DOWN':
          count += n
          break;
        case 'UP':
          count -= n
          break;
        case 'RIGHT':
          count += 1
          break;
        case 'LEFT':
          count -= 1
          break;
        
        default:
          // code
      }
    }
    return count
};