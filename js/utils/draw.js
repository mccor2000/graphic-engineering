const drawPoint = (point, scale, translate, radius, ctx) => {
  let [x, y] = point;

  x = x * scale + translate;
  y = y * scale + translate;

  ctx.beginPath();

  ctx.moveTo(x, y);
  ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
  ctx.fillStyle = 'white';
  ctx.fill();

  return [x, y];
};

const drawEdge = (offset, a, b, points, ctx) => {
  ctx.beginPath();

  ctx.moveTo(points[a + offset][0], points[a + offset][1]);
  ctx.lineTo(points[b + offset][0], points[b + offset][1]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'white';
  ctx.stroke();
};
