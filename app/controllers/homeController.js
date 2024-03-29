const {allMembers} = require('../models/memberModel');

const getAllMembers = async (req, res) => {
    try {
        const members = await allMembers();
        return res.render('home', { members })
    } catch (err) {
        return res.render('error', { err })
    }
}


module.exports = {
    getAllMembers
}