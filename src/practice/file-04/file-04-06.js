// find the tournament whose id is 1

tournaments = [{ id: 3, name: 'tournament3' }, { id: 1, name: 'tournament1' }]
var t = tournaments.find(i => i.id === 1)
console.log(t)