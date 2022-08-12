const pageWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 0);
const pageHeight = () =>
  typeof window !== 'undefined' ? window.innerHeight : 0;
const isPortrait = () => pageWidth() / pageHeight() < 1;
const canvasWidth = () => (isPortrait() ? 360 : 640);
const canvasHeight = () => (isPortrait() ? 640 : 360);

export default {
  isPortrait,
  pageWidth,
  pageHeight,
  canvasWidth,
  canvasHeight,
};
