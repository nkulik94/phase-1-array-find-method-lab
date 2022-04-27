function superbowlWin(array) {
    function checkResult(element, index, array) {
        return Object.values(element)[1] === "W"
    }
    const rightObject = array.find(checkResult)
    if (typeof rightObject === 'object') {
        return Object.values(rightObject)[0]
    }
}