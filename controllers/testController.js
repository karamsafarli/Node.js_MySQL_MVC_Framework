const db = require('../utils/mysql');
const allMembers = require('../models/memberModel');

const renderTestPage = async (req, res) => {
    try {
        const members = await allMembers();

        return res.render('test', { members });
    } catch (err) {
        return res.render('error', { err })
    }
}

const addMember = (req, res) => {
    const { name, surname, age } = req.body;

    const q = "INSERT INTO members (`name`, `surname`, `age`) VALUES (?, ?, ?)";
    const values = [name, surname, age];

    db.query(q, values, async (err, data) => {
        if (err) return res.render('error', { err });

        return res.redirect('/test')
    });
}

const updateMemberById = (req, res) => {
    const { id, name, surname, age } = req.body;

    let q = "UPDATE members SET";
    let updatedValues = [];

    if (name !== undefined && name.length > 0) {
        q += ' name=?,';
        updatedValues.push(name);
    }
    if (surname !== undefined && surname.length > 0) {
        q += ' surname=?,';
        updatedValues.push(surname);
    }
    if (age !== undefined && age.length > 0) {
        q += ' age=?,';
        updatedValues.push(age);
    }

    // Remove the last comma from query
    q = q.slice(0, -1);
    q += 'WHERE id=?';
    updatedValues.push(id);

    db.query(q, updatedValues, async (err, data) => {
        if (err) {
            return res.render('error', { err });
        }

        if (data.affectedRows === 0) {
            return res.render('error', { err: 'Member not found!' })
        }

        return res.redirect('/test');
        
    });
}

const deleteMemberById = (req, res) => {
    const id = req.params.id;
    const q = "DELETE FROM members WHERE id=?";

    db.query(q, [id], async (err, data) => {
        if (err) {
            console.log(err);
            return res.json({ err })
        }

        if (data.affectedRows === 0) {
            console.log(404);
            return res.json({ err: "Member not found!" })
        }

        return res.json({ msg: "Member deleted successfully" })
    });

}

module.exports = {
    renderTestPage,
    addMember,
    updateMemberById,
    deleteMemberById
}