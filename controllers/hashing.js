const bcrypt = require('bcrypt')

// hash a password
const hash = async (password) =>{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword
}

// compare hashes
const compareHashes = async (password,userPassword) =>{

    return match = await bcrypt.compare(password,userPassword) 
}

module.exports.hash = hash
module.exports.compareHashes = compareHashes