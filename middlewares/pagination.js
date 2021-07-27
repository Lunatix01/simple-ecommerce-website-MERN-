function pagination  (model) {
    return async(req,res,nex) =>{
        const page  = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const startIndex = ( page-1 ) * limit
        const endIndex = page * limit
        const result = {}
        if(endIndex < await model.countDocuments().exec()){
            result.next = {
                page : page+1,
                limit : limit
            }
        }
        if(startIndex > 0 ) {
            result.previous = {
                page : page-1,
                limit : limit
            }
        }
        try {
            const allProducts = await model.find({}, '-__v').populate('Seller','image username').limit(limit).skip(startIndex).lean()
            result.allProducts= allProducts
            res.paginatedResults = result
            nex()
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = pagination