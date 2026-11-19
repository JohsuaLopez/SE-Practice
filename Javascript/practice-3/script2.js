
function countByGenre(games) {
    const counts = {};
    for (const g of games) {

        counts[g.genre] = (counts[g.genre] || 0) + 1;

    }
    return counts;
}
const myGames = [
  { title: "Hades", genre: "Roguelike" },
  { title: "Celeste", genre: "Platformer" },
  { title: "Dead Cells", genre: "Roguelike" }
];
console.log(countByGenre(myGames));