const jwt = require('jsonwebtoken')

const verify = (req,res,nex) => {
    let token = req.headers['auth-token']
    console.log(token)
    if(!token) res.status(401).json('access Denied')
    token = token.split(' ')[1]
    console.log(token)
    const verified = jwt.verify(token,process.env.TOKEN, function(err,decoded){
        if(err) return res.status(403).json({message:"Access Denied"})
        else {
            req.id = decoded.id
            nex()
        }
    })
}
module.exports.verify = verify