function findMatching(array, name) {
    return array.filter(item =>  item.toLowerCase() === name.toLowerCase())
}


function fuzzyMatch(array, bit) {
    return array.filter(item =>  item.startsWith(bit))
}


function matchName(array, name) {
    return array.filter(item => item.name === name)
}