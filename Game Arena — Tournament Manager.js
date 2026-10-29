const players = [
    { id: 1, name: 'Alex', skill: 85, teamId: 1 },
    { id: 2, name: 'Mira', skill: 92, teamId: 1 },
    { id: 3, name: 'Ivan', skill: 78, teamId: 2 },
    { id: 4, name: 'Niki', skill: 88, teamId: 2 },
    { id: 5, name: 'Sara', skill: 95, teamId: 3 },
    { id: 6, name: 'Viktor', skill: 80, teamId: 3 }
];

const teams = [
    { id: 1, name: 'Dragons' },
    { id: 2, name: 'Wolves' },
    { id: 3, name: 'Phoenix' }
];

const matches = [
    { id: 1, homeTeamId: 1, awayTeamId: 2, homeScore: 3, awayScore: 1 },
    { id: 2, homeTeamId: 2, awayTeamId: 3, homeScore: 2, awayScore: 2 },
    { id: 3, homeTeamId: 1, awayTeamId: 3, homeScore: 0, awayScore: 1 }
];

function getPlayersByTeam(players,teamId){
    return players.filter(player => player.teamId === teamId);
}

function getAverageSkill(players, teamId) {
    let team = players.filter(player => player.teamId === teamId);

    let totalSkill = team.reduce(
        (sum, player) => sum + player.skill,
        0
    );

    let average = team.length > 0
        ? totalSkill / team.length
        : 0;

    return average;
}
function getTopPlayers(players,count){
    return [...players].sort((a,b)=> b.skill - a.skill).slice(0,count);
}
function groupPlayersByTeam(players){
    let teams = {}

    for (const player of players) {
        const teamId = player.teamId
        if (!teams[teamId]) {
            teams[teamId] = [];
        }
        teams[teamId].push(player)
    }
    return teams;
}

function getTeamStatistics(players, teams) {
    return teams.map(team => {
        const teamPlayers = players.filter(
            player => player.teamId === team.id
        );

        const totalSkill = teamPlayers.reduce(
            (sum, player) => sum + player.skill,
            0
        );

        const maxSkill = teamPlayers.length > 0
            ? Math.max(...teamPlayers.map(player => player.skill))
            : 0;

        return {
            teamName: team.name,
            playerCount: teamPlayers.length,
            averageSkill: teamPlayers.length > 0
                ? totalSkill / teamPlayers.length
                : 0,
            maxSkill: maxSkill
        };
    });
}

function createTournament(name) {
    let players = [];
    let matches = [];

    return {
        name: name,

        addPlayer: function(player) {
            for (let i = 0; i < players.length; i++) {
                if (players[i].id === player.id) {
                    return false;
                }
            }

            players.push(player);
            return true;
        },

        removePlayer: function(playerId) {
            for (let i = 0; i < players.length; i++) {
                if (players[i].id === playerId) {
                    players.splice(i, 1);
                    return true;
                }
            }

            return false;
        },

        addMatch: function(match) {
            let homeExists = false;
            let awayExists = false;

            for (let i = 0; i < players.length; i++) {
                if (players[i].teamId === match.homeTeamId) {
                    homeExists = true;
                }

                if (players[i].teamId === match.awayTeamId) {
                    awayExists = true;
                }
            }

            if (!homeExists || !awayExists) {
                return false;
            }

            matches.push(match);
            return true;
        },

        getMatches: function() {
            return matches.map(match => ({ ...match }));
        },

        getPlayer: function(id) {
            for (let i = 0; i < players.length; i++) {
                if (players[i].id === id) {
                    return { ...players[i] };
                }
            }

            return null;
        },

        getLeaderboard: function() {
            let leaderboard = [];

            for (let i = 0; i < players.length; i++) {
                let player = players[i];

                leaderboard.push({
                    id: player.id,
                    name: player.name,
                    teamId: player.teamId,
                    points: 0,
                    goalsFor: 0,
                    goalsAgainst: 0
                });
            }

            for (let i = 0; i < matches.length; i++) {
                let match = matches[i];

                for (let j = 0; j < leaderboard.length; j++) {
                    let player = leaderboard[j];

                    if (player.teamId === match.homeTeamId) {
                        player.goalsFor += match.homeScore;
                        player.goalsAgainst += match.awayScore;

                        if (match.homeScore > match.awayScore) {
                            player.points += 3;
                        } else if (match.homeScore === match.awayScore) {
                            player.points += 1;
                        }
                    }

                    if (player.teamId === match.awayTeamId) {
                        player.goalsFor += match.awayScore;
                        player.goalsAgainst += match.homeScore;

                        if (match.awayScore > match.homeScore) {
                            player.points += 3;
                        } else if (match.awayScore === match.homeScore) {
                            player.points += 1;
                        }
                    }
                }
            }

            leaderboard.sort((a, b) => b.points - a.points)

            return leaderboard;
        }
    };
}

