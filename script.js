

const generateRandomNumber = (num) => {
    // generates random number from 0-1//
    return Math.floor(Math.random() * (num));
}

const messages = {
    foundObject: ['seashell', 'shard of glass', 'cool stick', 'shark\'s tooth', 'fishbone', 'feather'],
    destinyGranted: ['5 years of good luck', '$20 on eBay', 'the adoration of your peers', 'inner peace', 'fond memories'],
    idealAction: ['keep it safe', 'show off to your friends', 'sell it', 'be proud of yourself', 'keep looking around']
}

let luckyFind = [];

const luckyFindGenerator = () => {
    for (messageOption in messages) {
        let i = generateRandomNumber(messages[messageOption].length);
        
        switch (messageOption) {
            case 'foundObject':
                luckyFind.push(`You have found a ${messages[messageOption][i]}!`)
                break
            case 'destinyGranted':
                luckyFind.push(`It will bring you ${messages[messageOption][i]}.`)
                break
            case 'idealAction':
                luckyFind.push(`You should ${messages[messageOption][i]}!`)
                break
        }
    }
    return luckyFind
    
}


console.log(luckyFindGenerator())

