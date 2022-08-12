import Responses from './Responses';

function generateNormalizedBlockWidths(rows, minRatio, maxRatio) {
  const blockRatios = [];
  const maxColumns = 4;
  const columns = [];
  for (let i = 0; i < rows; i += 1) {
    columns.push(Math.floor(Math.random() * maxColumns - 1) + 2);
  }

  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    const row = [];
    let currentRemainingRatio = 1.0;
    let ratioCount = 0;
    while (currentRemainingRatio > 0 && ratioCount < columns[rowIndex]) {
      let ratio = 0;
      ratio = Math.random() * (maxRatio - minRatio) + minRatio;
      if (
        currentRemainingRatio - ratio < 0 ||
        ratioCount + 1 === columns[rowIndex]
      ) {
        ratio = currentRemainingRatio;
        currentRemainingRatio = 0;
      }
      row.push(ratio);
      currentRemainingRatio -= ratio;
      ratioCount += 1;
    }

    blockRatios.push(row);
  }
  blockRatios.splice(3, 0, [1]);
  return blockRatios;
}

function generateNormalizedBlockPositions(blockGrid) {
  const blockHeight = 1 / blockGrid.length;
  let cumulativeHeight = 0;
  return blockGrid.map((blockRow) => {
    let cumulativeWidth = 0;
    const newRows = blockRow.map((blockWidth) => {
      const blockPosition = {
        width: blockWidth,
        height: blockHeight,
        x: cumulativeWidth,
        y: cumulativeHeight,
      };
      cumulativeWidth += blockWidth;
      return blockPosition;
    });
    cumulativeHeight += blockHeight;
    return newRows;
  });
}

function scaleBlockPositions(blockGrid, scaledWidth, scaledHeight) {
  return blockGrid.map((row) =>
    row.map(({ x, y, width, height }) => ({
      x: x * scaledWidth,
      y: y * scaledHeight,
      width: width * scaledWidth,
      height: height * scaledHeight,
    })),
  );
}

function flattenGrid(blockGrid) {
  return blockGrid.flat();
}

const availableFonts = [
  'Amatic SC',
  'Shadows Into Light',
  'Kalam',
  'Architects Daughter',
  'Amita',
  'Nothing You Could Do',
  'Merienda',
  'Sriracha',
  'Itim',
  'Nanum Pen Script',
  'Handlee',
  'Patrick Hand',
  'Permanent Marker',
  'Covered By Your Grace',
  'Berkshire Swash',
  'Caveat',
  'Pangolin',
  'Neucha',
  'Gochi Hand',
  'Indie Flower',
  'Gloria Hallelujah',
  'Comic Neue',
  'Rock Salt',
  'Mali',
];

function generateBlockContent(positions) {
  const maxFontSize = 14;
  const minFontSize = 8;
  return positions.map((block, index) => ({
    ...block,
    content: {
      text: Responses[index],
      fontSize: Math.random() * (maxFontSize - minFontSize) + minFontSize,
      fontFamily:
        availableFonts[Math.floor(Math.random() * availableFonts.length)],
      width: block.width,
      height: block.height,
      offsetX: Math.random() * (block.width * 0.5),
      offsetY: Math.random() * (block.height * 0.5),
    },
  }));
}

function generateBlocks() {
  const rows = 6;
  const minRatio = 0.2;
  const maxRatio = 0.5;
  const blockWidths = generateNormalizedBlockWidths(rows, minRatio, maxRatio);
  console.log('blockWidths');
  console.log(blockWidths);

  const blockPositions = generateNormalizedBlockPositions(blockWidths);
  console.log('blockPositions');
  console.log(blockPositions);

  const width = 360;
  const height = 640;
  const scaledBlockPositions = scaleBlockPositions(
    blockPositions,
    width,
    height,
  );
  console.log('scaledBlockPositions');
  console.log(scaledBlockPositions);

  const flattenedBlockPositions = flattenGrid(scaledBlockPositions);

  const blockContents = generateBlockContent(flattenedBlockPositions);
  console.log('blockContents');
  console.log(blockWidths);

  return blockContents;
}

export default { generateBlocks };
