const project = (point) => {
  let [x, y, z] = point;

  const projectionMatrix = [
    [1, 0, Math.cos(45) * 0.5],
    [0, 1, Math.sin(45) * 0.5],
  ];

  [[x], [y]] = multiply(projectionMatrix, [[x], [y], [z]]);

  return [x, y];
};

const project3DTo2D = (point) => {
  let [x, y, z] = point;

  const projectionMatrix = [
    [1, 0, 0],
    [0, 1, 0],
  ];

  [[x], [y]] = multiply(projectionMatrix, [[x], [y], [z]]);

  return [x, y];
};

const project4DTo3D = (point) => {
  let [x, y, z, w] = point;

  let distance = 2;
  w = 1 / (distance - w);

  const projectionMatrix = [
    [w, 0, 0, 0],
    [0, w, 0, 0],
    [0, 0, w, 0],
  ];

  [[x], [y], [z]] = multiply(projectionMatrix, [[x], [y], [z], [w]]);

  return [x, y, z];
};
