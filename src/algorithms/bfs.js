const dx = [0, 0, 1, -1];
const dy = [-1, 1, 0, 0];

const bfs = (start_i, start_j, grid) => {
  let vis = [];
  let par = Array.from(Array(61), () => new Array(26));
  for (let i = 0; i < 22; i++) {
    let temp = [];
    for (let j = 0; j < 60; j++) {
      temp.push(0);
    }
    vis.push(temp);
  }

  let queue = [];

  queue.pop = queue.shift;

  const root_i = start_i;
  const root_j = start_j;
  queue.push([root_i, root_j]);
  vis[root_i][root_j] = 1;

  let order = [];
  while (queue.length > 0) {
    let temp = queue.pop();
    order.push(temp);

    for (let i = 0; i < 4; i++) {
      if (
        temp[0] + dx[i] >= 0 &&
        temp[0] + dx[i] < 22 &&
        temp[1] + dy[i] >= 0 &&
        temp[1] + dy[i] < 60 &&
        !grid[temp[0] + dx[i]][temp[1] + dy[i]].isWall &&
        vis[temp[0] + dx[i]][temp[1] + dy[i]] === 0
      ) {
        vis[temp[0] + dx[i]][temp[1] + dy[i]] = 1;
        queue.push([temp[0] + dx[i], temp[1] + dy[i]]);
        par[temp[0] + dx[i]][temp[1] + dy[i]] = [temp[0], temp[1]];
      }
    }
  }

  return { temp: order, par: par };
};

export default bfs;
