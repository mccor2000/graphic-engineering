const multiply = (A, B) => {
  var result = new Array(A.length)
    .fill(0)
    .map((row) => new Array(B[0].length).fill(0));

  return result.map((row, i) => {
    return row.map((val, j) => {
      return A[i].reduce((sum, elm, k) => sum + elm * B[k][j], 0);
    });
  });
};

const rotateX = (vector, theta) => {
  return [
    vector[0],
    Math.cos(theta) * vector[1] + -Math.sin(theta) * vector[2],
    Math.sin(theta) * vector[1] + Math.cos(theta) * vector[2],
  ];
};

const rotateY = (vector, theta) => {
  return [
    Math.cos(theta) * vector[0] + -Math.sin(theta) * vector[2],
    vector[1],
    Math.sin(theta) * vector[0] + Math.cos(theta) * vector[2],
  ];
};

const rotateZ = (vector, theta) => {
  return [
    Math.cos(theta) * vector[0] + -Math.sin(theta) * vector[1],
    Math.sin(theta) * vector[0] + Math.cos(theta) * vector[1],
    vector[2],
  ];
};

const rotate4DXY = (vector, theta) => {
  const [x, y, z, w] = vector;

  const rotationMatrix = [
    [Math.cos(theta), -Math.sin(theta), 0, 0],
    [Math.sin(theta), Math.cos(theta), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];

  [[x], [y], [z], [w]] = multiply(rotationMatrix, [[x], [y], [z], [w]]);

  return [x, y, z, w];
};

const rotate4DZW = (vector, theta) => {
  let [x, y, z, w] = vector;

  const rotationMatrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, Math.cos(theta), -Math.sin(theta)],
    [0, 0, Math.sin(theta), Math.cos(theta)],
  ];

  [[x], [y], [z], [w]] = multiply(rotationMatrix, [[x], [y], [z], [w]]);

  return [x, y, z, w];
};
