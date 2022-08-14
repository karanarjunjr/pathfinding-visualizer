import "font-awesome/css/font-awesome.min.css";
const Node = (props) => {
  var terminal = "";
  var classes = "nodeInsideArea";
  var terminalColor = "#cee8df";
  if (props.isStart) {
    classes = "nodeInsideArea";
    terminal = "start";
  } else if (props.isEnd) {
    classes = "nodeInsideArea";
    terminal = "end";
  } else if (props.isWall) {
    terminal = "";
  } else terminal = "";

  if (props.isPath) {
    classes = "nodeInsideArea path";
    terminalColor = "#101010";
  } else if (props.isVisited) {
    classes = "nodeInsideArea visited";
    terminalColor = "black";
  }

  if (terminal == "")
    return (
      <div
        className="node"
        onMouseEnter={() => props.onMouseEnter(props.i, props.j)}
        onMouseDown={() => props.onMouseDown(props.i, props.j)}
        onMouseUp={() => props.onMouseUp(props.i, props.j)}
        onMouseLeave={() => props.onMouseLeave(props.i, props.j)}
      >
        <div id={props.i + " " + props.j} className={classes}></div>
      </div>
    );
  else if (terminal === "start")
    return (
      <div
        className="node"
        onMouseEnter={() => props.onMouseEnter(props.i, props.j)}
        onMouseDown={() => props.onMouseDown(props.i, props.j)}
        onMouseUp={() => props.onMouseUp(props.i, props.j)}
        onMouseLeave={() => props.onMouseLeave(props.i, props.j)}
      >
        <div className={classes} id={props.i + " " + props.j}>
          <div>
            <i
              id="start"
              className="fa-solid fa-plane"
              style={{ color: "#ffca28" }}
            ></i>
          </div>
        </div>
      </div>
    );
  else if (terminal === "end")
    return (
      <div
        className="node"
        onMouseEnter={() => props.onMouseEnter(props.i, props.j)}
        onMouseDown={() => props.onMouseDown(props.i, props.j)}
        onMouseUp={() => props.onMouseUp(props.i, props.j)}
        onMouseLeave={() => props.onMouseLeave(props.i, props.j)}
      >
        <div className={classes} id={props.i + " " + props.j}>
          <div>
            <i
              id="end"
              className="fa-solid fa-location-dot"
              style={{ color: "#ffca28" }}
            ></i>
          </div>
        </div>
      </div>
    );
};

export default Node;
