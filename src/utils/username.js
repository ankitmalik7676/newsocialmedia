

const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',   
    'ankit'
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk',
    'malik'
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random() * 8)]
    const obj = OBJECTS[Math.floor(Math.random() * 8)]
    return `${adj}-${obj}`
}



module.exports = {
    genRandomUsername
}