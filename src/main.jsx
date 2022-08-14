import Node from "./node";
import { useEffect, useState } from "react";
import React from "react";
import bfs from "./algorithms/bfs";
import Navbar from "./navbar";
import Legend from "./legend";

const Main = (props) => {
  const [grid, setGrid] = useState([]);
  const [start_i, setStart_i] = useState(9);
  const [start_j, setStart_j] = useState(15);
  const [end_i, setEnd_i] = useState(9);
  const [end_j, setEnd_j] = useState(40);

  useEffect(() => {
    setGrid(createGrid());
  }, []);

  const createNode = (i, j) => {
    return {
      i,
      j,
      isStart: i === start_i && j === start_j,
      isEnd: i === end_i && j === end_j,
      isWall: false,
      isVisited: false,
      isPath: false,
    };
  };
  const createGrid = () => {
    const grid = [];
    for (var i = 0; i < 22; i++) {
      const row = [];
      for (var j = 0; j < 60; j++) {
        row.push(createNode(i, j));
      }
      grid.push(row);
    }

    return grid;
  };

  const handleMouseDown = (i, j) => {
    props.setIsPressed(true);
    if (i === start_i && j === start_j) {
      props.setStartMoving(true);
      try {
        document.getElementById("start").style.color = "#ffca28";
        document.getElementById("end").style.color = "#ffca28";
      } catch (err) {}
      clearPath();
    } else if (i === end_i && j === end_j) {
      props.setEndMoving(true);

      try {
        document.getElementById("start").style.color = "#ffca28";
        document.getElementById("end").style.color = "#ffca28";
      } catch (err) {}
      clearPath();
    } else if ((i != start_i || j != start_j) && (i != end_i || j != end_j)) {
      toggleGrid(i, j);
    }
  };

  const handleMouseEnter = (i, j) => {
    if (props.isPressed) {
      if (props.startMoving) {
        startToggleGrid(i, j);
      } else if (props.endMoving) {
        endToggleGrid(i, j);
      } else if ((i != start_i || j != start_j) && (i != end_i || j != end_j)) {
        toggleGrid(i, j);
      }
    }
  };

  const handleMouseLeave = (i, j) => {
    if (props.isPressed) {
      if (props.startMoving) startToggleGrid(i, j);
      else if (props.endMoving) endToggleGrid(i, j);
    }
  };

  const toggleGrid = (i, j) => {
    var newGrid = grid.slice();
    if (!newGrid[i][j].isWall) {
      try {
        document.getElementById(i + " " + j).classList.remove("visited");
        document.getElementById(i + " " + j).classList.remove("path");
        document.getElementById(i + " " + j).classList.add("wall");
      } catch (err) {}
    } else
      try {
        document.getElementById(i + " " + j).classList.remove("wall");
      } catch (err) {}

    if (newGrid[i][j].isVisited) return;
    newGrid[i][j] = {
      ...newGrid[i][j],
      isWall: !newGrid[i][j].isWall,
    };
    setGrid(newGrid);
  };

  const toggleVisGrid = (i, j) => {
    try {
      document.getElementById(i + " " + j).classList.add("visited");
    } catch (err) {}
    if (i === start_i && j === start_j) {
      try {
        document.getElementById("start").style.color = "black";
      } catch (err) {}
    }
    if (i === end_i && j === end_j) {
      try {
        document.getElementById("end").style.color = "black";
      } catch (err) {}
    }
  };

  const togglePathGrid = (i, j) => {
    try {
      document.getElementById(i + " " + j).className = "nodeInsideArea path";
    } catch (err) {}
  };

  const startToggleGrid = (i, j) => {
    document.getElementById(i + " " + j).classList.remove("wall");

    var newGrid = grid.slice();

    setStart_i(i);
    setStart_j(j);

    newGrid[i][j] = {
      ...newGrid[i][j],
      isStart: !newGrid[i][j].isStart,
      isWall: false,
    };
    setGrid(newGrid);
  };
  const endToggleGrid = (i, j) => {
    document.getElementById(i + " " + j).classList.remove("wall");

    var newGrid = grid.slice();

    setEnd_i(i);
    setEnd_j(j);

    newGrid[i][j] = {
      ...newGrid[i][j],
      isEnd: !newGrid[i][j].isEnd,
      isWall: false,
    };
    setGrid(newGrid);
  };

  const setStartGrid = (i, j) => {
    var newGrid = grid.slice();
    if (!newGrid[i][j].isWall) {
      setStart_i(i);
      setStart_j(j);
    }
    newGrid[i][j] = {
      ...newGrid[i][j],
      isStart: true,
    };
    setGrid(newGrid);
  };

  const visualize = () => {
    clearPath();

    if (start_i == end_i && start_j == end_j) {
      toggleVisGrid(start_i, start_j);
      togglePathGrid(start_i, start_j);
      return;
    }
    let { temp, par } = bfs(start_i, start_j, grid);
    document.body.style["pointer-events"] = "none";
    let flag = false;
    var visWait;
    var pathWait;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i][0] === end_i && temp[i][1] === end_j) {
        flag = true;
        setTimeout(() => {
          toggleVisGrid(temp[i][0], temp[i][1]);
        }, 10 * i);
        visWait = i;
        break;
      }
      visWait = i;

      setTimeout(() => {
        toggleVisGrid(temp[i][0], temp[i][1]);
      }, 10 * i);
    }
    let path = [];

    if (flag) {
      let cur = [end_i, end_j];
      path.push(cur);
      let cur_par = par[cur[0]][cur[1]];

      while (cur_par[0] != start_i || cur_par[1] != start_j) {
        path.push(cur_par);
        cur = cur_par;
        cur_par = par[cur[0]][cur[1]];
      }
      path.push(cur_par);

      setTimeout(() => {
        for (let i = path.length - 1; i >= 0; i--) {
          setTimeout(() => {
            togglePathGrid(path[i][0], path[i][1]);
          }, 50 * (path.length - i));
        }
      }, 10 * (visWait + 100));
    }

    setTimeout(() => {
      document.body.style["pointer-events"] = "auto";
    }, 10 * (visWait + 100) + (path.length + 10) * 50);
  };

  const clearPath = () => {
    try {
      document.getElementById("start").style.color = "#ffca28";
      document.getElementById("end").style.color = "#ffca28";
    } catch (err) {}
    for (let i = 0; i < 22; i++) {
      for (let j = 0; j < 60; j++) {
        try {
          document.getElementById(i + " " + j).classList.remove("path");
          document.getElementById(i + " " + j).classList.remove("visited");
        } catch (err) {}
      }
    }
  };

  const clearGrid = () => {
    try {
      document.getElementById("start").style.color = "#ffca28";
      document.getElementById("end").style.color = "#ffca28";
    } catch (err) {}
    var newGrid = grid.slice();
    for (let i = 0; i < 22; i++) {
      for (let j = 0; j < 60; j++) {
        try {
          document.getElementById(i + " " + j).classList.remove("path");
          document.getElementById(i + " " + j).classList.remove("visited");
          document.getElementById(i + " " + j).classList.remove("wall");
        } catch (err) {}
        newGrid[i][j] = {
          ...newGrid[i][j],
          isWall: false,
          isVisited: false,
          isPath: false,
        };
      }
    }

    setGrid(newGrid);
  };

  const handleMouseUp = (i, j) => {
    if (!props.startMoving && !props.endMoving) props.setIsPressed(false);

    if (!isNaN(j)) {
      props.setIsPressed(false);
      props.setStartMoving(false);
      props.setEndMoving(false);
    }
  };

  return (
    <>
      <Navbar
        visualize={visualize}
        clearPath={clearPath}
        clearGrid={clearGrid}
        onMouseUp={handleMouseUp}
      />
      <Legend onMouseUp={handleMouseUp} />
      <div className="main">
        <div className="grid">
          {grid.map((row, row_idx) => (
            <div className="row" key={row_idx}>
              {row.map((cell, cell_idx) => (
                <React.Fragment key={cell_idx}>
                  <Node
                    i={row_idx}
                    j={cell_idx}
                    isStart={cell.isStart}
                    isWall={cell.isWall}
                    isVisited={cell.isVisited}
                    isEnd={cell.isEnd}
                    isPath={cell.isPath}
                    onMouseEnter={handleMouseEnter}
                    onMouseDown={handleMouseDown}
                    onMouseUp={props.handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                  />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
