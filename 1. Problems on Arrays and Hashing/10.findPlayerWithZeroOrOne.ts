// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/

function findWinners(matches: number[][]): number[][] {
  let players: number[] = Array(1000001).fill(-1);
  let res: number[][] = [[], []];
  for (let i = 0; i < matches.length; i++) {
    let winner = matches[i][0];
    let looser = matches[i][1];

    if (players[winner] === -1 || players[winner] === 0) {
      players[winner] = 0;
    }

    if (players[looser] === -1) {
      players[looser] = 1;
    } else {
      players[looser]++;
    }
  }

  for (let i = 0; i < players.length; i++) {
    if (players[i] === 0) {
      res[0].push(i);
    } else if (players[i] === 1) {
      res[1].push(i);
    }
  }

  return res;
}
