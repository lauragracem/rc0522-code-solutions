const takeAChance = require('./take-a-chance');

const returnPromise = takeAChance('Laura');
returnPromise.then(value => { console.log(value); });
returnPromise.catch(error => { console.error(error); });
