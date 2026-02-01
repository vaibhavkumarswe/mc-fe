export function generateGrid(size) {
  const arr = Array.from({ length: size }, (_, idx) => idx + 1);
  const grids = [...arr, ...arr].sort(() => Math.random() - 0.5);
  const cards = grids.map((item, idx) => {
    return { id: idx, number: item, isFlipped: false };
  });

  return cards;
}
