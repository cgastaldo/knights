function knightMoves([x, y], size = 8) {
   const possibleMoves = [
     [2, 1], [2, -1], [-2, 1], [-2, -1],
     [1, 2], [1, -2], [-1, 2], [-1, -2]
   ];
 
   return possibleMoves
     .map(([dx, dy]) => [x + dx, y + dy])
     .filter(([newX, newY]) => newX >= 0 && newX < size && newY >= 0 && newY < size);
 }

function knightGame(start, target) {
   let visited = Array.from({ length: 8 }, () => Array(8).fill(false));
   visited[start[0]][start[1]] = true;
   let queue = [[start, []]];

   while(queue.length > 0) {
      const [[x, y], currentPath] = queue.shift();
      const newPath = [...currentPath, [x, y]];

      if(x === target[0] && y === target[1]) {
         return newPath;
      }

      const newMoves = knightMoves([x, y]);
      newMoves.forEach(([newX, newY]) => {
         if(!visited[newX][newY]) {
            visited[newX][newY] = true;
            queue.push([[newX, newY], newPath]);
         }
      });
   }
   return null;
}
const start = [0, 0];
const target = [7, 3];

const shortestPath = knightGame(start, target);
console.log(shortestPath);
console.log(knightGame([0,0], [3,3]));