const drawCube = (ctx, theta) => {
  const points = [
    [-1, -1, -1],
    [1, -1, -1],
    [1, 1, -1],
    [-1, 1, -1],
    [-1, -1, 1],
    [1, -1, 1],
    [1, 1, 1],
    [-1, 1, 1],
  ];

  const renderedPoints = points
    .map((p) => rotateX(p, theta))
    .map((p) => rotateY(p, theta))
    .map((p) => project(p))
    .map((p) => drawPoint(p, 100, 500, 5, ctx));

  console.log(renderedPoints);

  // connect points
  for (let i = 0; i < 4; i++) {
    drawEdge(0, i, (i + 1) % 4, renderedPoints, ctx);
    drawEdge(0, i + 4, ((i + 1) % 4) + 4, renderedPoints, ctx);
    drawEdge(0, i, i + 4, renderedPoints, ctx);
  }
};
