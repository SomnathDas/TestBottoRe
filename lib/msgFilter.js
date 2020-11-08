const usedCommandRecently = new Set()
const haigushaSet = new Set

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (author) => !!usedCommandRecently.has(author)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (author) => {
    usedCommandRecently.add(author)
    setTimeout(() => usedCommandRecently.delete(author), 5000) // 5sec is delay before processing next command
}

const isHai = (from) => !!haigushaSet.has(from)

const addHai = (from) => {
    haigushaSet.add(from)
    setTimeout(() => haigushaSet.delete(from), 45000) // 5sec is delay before processing next command
}

module.exports = {
    isFiltered,
    addFilter,
    isHai,
    addHai
}
