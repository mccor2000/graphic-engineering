const W = 1000,
  H = 1000;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let theta = 0;

const renderCube = () => {
  ctx.clearRect(0, 0, W, H);
  theta += 0.01;

  drawCube(ctx, theta);
  requestAnimationFrame(renderCube);
};

const renderSphere = () => {
  ctx.clearRect(0, 0, W, H);
  theta += 0.01;

  drawSphere(100, ctx, theta);
  requestAnimationFrame(renderSphere);
};

const renderTesseract = () => {
  ctx.clearRect(0, 0, W, H);
  theta += 0.01;

  drawTesseract(ctx, theta);
  requestAnimationFrame(renderTesseract);
};

const RenderCubeButton = document.getElementById('cube-btn');
const RenderSphereButton = document.getElementById('sphere-btn');
const RenderTesseractButton = document.getElementById('tesseract-btn');

RenderCubeButton.onclick = () => {
  theta = 0;
  renderCube();
};

RenderSphereButton.onclick = () => {
  theta = 0;
  renderSphere();
};

RenderTesseractButton.onclick = () => {
  theta = 0;
  renderTesseract();
};
