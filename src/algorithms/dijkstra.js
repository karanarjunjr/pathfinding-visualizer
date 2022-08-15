const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const dijkstra = (start_i, start_j, grid) => {
  let vis = [];
  let par = Array.from(Array(60), () => new Array(25));
  let dist = Array.from(Array(60), () => new Array(25));

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 60; j++) {
      if (i === start_i && j === start_j) dist[i][j] = 0;
      else dist[i][j] = Number.MAX_VALUE;
    }
  }
  for (let i = 0; i < 22; i++) {
    let temp = [];
    for (let j = 0; j < 60; j++) {
      temp.push(0);
    }
    vis.push(temp);
  }

  let minHeap = [];

  minHeap.pop = minHeap.shift;

  const root_i = start_i;
  const root_j = start_j;

  minHeap.push([root_i, root_j]);

  vis[root_i][root_j] = 1;

  let order = [];
  while (minHeap.length > 0) {
    minHeap.sort((a, b) => dist[a[0]][a[1]] - dist[b[0][b[1]]]);
    let temp = minHeap.pop();
    order.push(temp);

    for (let i = 0; i < 4; i++) {
      if (
        temp[0] + dx[i] >= 0 &&
        temp[0] + dx[i] < 22 &&
        temp[1] + dy[i] >= 0 &&
        temp[1] + dy[i] < 60 &&
        !grid[temp[0] + dx[i]][temp[1] + dy[i]].isWall &&
        vis[temp[0] + dx[i]][temp[1] + dy[i]] === 0 &&
        dist[temp[0]][temp[1]] + 1 < dist[temp[0] + dx[i]][temp[1] + dy[i]]
      ) {
        dist[temp[0] + dx[i]][temp[1] + dy[i]] = dist[temp[0]][temp[1]] + 1;
        minHeap.push([temp[0] + dx[i], temp[1] + dy[i]]);
        par[temp[0] + dx[i]][temp[1] + dy[i]] = [temp[0], temp[1]];
      }
    }
  }

  return { temp: order, par: par };
};

export default dijkstra;
