const drawTesseract = (ctx, theta) => {
  const vertices = [
    [-1, -1, -1, 1],
    [1, -1, -1, 1],
    [1, 1, -1, 1],
    [-1, 1, -1, 1],
    [-1, -1, 1, 1],
    [1, -1, 1, 1],
    [1, 1, 1, 1],
    [-1, 1, 1, 1],
    [-1, -1, -1, -1],
    [1, -1, -1, -1],
    [1, 1, -1, -1],
    [-1, 1, -1, -1],
    [-1, -1, 1, -1],
    [1, -1, 1, -1],
    [1, 1, 1, -1],
    [-1, 1, 1, -1],
  ];

  const renderedPoints = vertices
    .map((p) => rotate4DZW(p, theta))
    .map((p) => project4DTo3D(p))
    .map((p) => rotateY(p, theta))
    .map((p) => project(p))
    .map((p) => drawPoint(p, 100, 500, 5, ctx));

  for (let i = 0; i < 4; i++) {
    drawEdge(0, i, (i + 1) % 4, renderedPoints, ctx);
    drawEdge(0, i + 4, ((i + 1) % 4) + 4, renderedPoints, ctx);
    drawEdge(0, i, i + 4, renderedPoints, ctx);
  }

  for (let i = 0; i < 4; i++) {
    drawEdge(8, i, (i + 1) % 4, renderedPoints, ctx);
    drawEdge(8, i + 4, ((i + 1) % 4) + 4, renderedPoints, ctx);
    drawEdge(8, i, i + 4, renderedPoints, ctx);
  }

  for (let i = 0; i < 4; i++) {
    drawEdge(0, i, i + 8, renderedPoints, ctx);
    drawEdge(4, i, i + 8, renderedPoints, ctx);
  }
};
