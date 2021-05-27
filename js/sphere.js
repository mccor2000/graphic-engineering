const map = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const convertTo3D = (r, lon, lat) => {
  return [
    r * Math.sin(lon) * Math.cos(lat),
    r * Math.sin(lon) * Math.sin(lat),
    r * Math.cos(lon),
  ];
};

const initCoordinates = (radius) => {
  let points = [];

  for (let i = 0; i < radius; i += 5) {
    let lon = map(i, 0, radius, -Math.PI, Math.PI);
    for (let j = 0; j < radius; j += 5) {
      let lat = map(j, 0, radius, -Math.PI / 2, Math.PI / 2);
      points.push(convertTo3D(radius, lon, lat));
    }
  }

  return points;
};

const drawSphere = (radius, ctx, theta) => {
  const coordinates = initCoordinates(radius);

  coordinates
    .map((p) => rotateX(p, theta))
    .map((p) => rotateY(p, theta))
    .map((p) => project(p))
    .map((p) => drawPoint(p, 1, 500, 3, ctx));
};
