const topRated = games => games.filter(g => g.rating >= 8).map(g => g.name).sort();

const avgPrice = games => games.reduce((sum,g) => sum + g.price , 0) / games.length;

function byGenre(games) {
  const groups = {};
  for (const g of games) {
    groups[g.genre] = groups[g.genre] || [];
    groups[g.genre].push(g.name);
  }
  return groups;
}