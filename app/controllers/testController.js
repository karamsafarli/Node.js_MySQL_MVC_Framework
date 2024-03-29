const { allMembers, addNewMember, updateMember,deleteMember } = require('../models/memberModel');

const renderTestPage = async (req, res) => {
    try {
        const members = await allMembers();

        return res.render('test', { members });
    } catch (err) {
        return res.render('error', { err })
    }
}

const addMember = async (req, res) => {
    const { name, surname, age } = req.body;

    try {
        await addNewMember(name, surname, age);
        return res.redirect('/test')
    } catch (err) {
        return res.render('error', { err });
    }
}

const updateMemberById = async (req, res) => {
    const { id, name, surname, age } = req.body;

    try {
        await updateMember(id, name, surname, age);
        return res.redirect('/test')
    } catch (err) {
        return res.render('error', { err })
    }
}

const deleteMemberById = async (req, res) => {
    const id = req.params.id;

    try {
       await deleteMember(id);
       return res.redirect('/test')
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    renderTestPage,
    addMember,
    updateMemberById,
    deleteMemberById
}