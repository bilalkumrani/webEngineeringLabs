const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})


console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));