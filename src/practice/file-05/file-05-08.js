// Study Async/Await in detail. Give 2  examples including a simple, complex (including chaining logic)

// answer:

async function getDataOfPlayer(player) {
    let result = await fetch("./data.json", {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const json = await result.json();
    json.name = player;
    return json
}

function processTournament(players) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(players) || !players.length)
            reject("Players should pass an array");

        const index = Math.floor(Math.random() * players.length);

        setTimeout(async () => {
            resolve(await getDataOfPlayer(players[index]));
        }, 1000)
    })
}

console.log("Loading...");
processTournament(["A", "B", "C", "D", "E", "F", "G"])
    .then(result => {
        console.log("Winner:", result);
        console.log("Done.");
    })
    .catch(err => {
        console.error(err);
    });