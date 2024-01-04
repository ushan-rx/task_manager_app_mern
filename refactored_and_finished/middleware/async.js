// function used to wrap the rout controllers to 
// avoid redundant try catch blocks
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper