const db = require('../../utils/mysql');

const allMembers = () => {

    return new Promise((res, rej) => {
        const q = "SELECT * FROM members";

        db.query(q, (err, data) => {
            if (err) rej(err);

            res(data);
        })
    })

}

const addNewMember = (name, surname, age) => {

    return new Promise((res, rej) => {
        const q = "INSERT INTO members (`name`, `surname`, `age`) VALUES (?, ?, ?)";
        const values = [name, surname, age];

        db.query(q, values, (err, data) => {
            if (err) rej(err);

            res(data);
        })
    })

}

const updateMember = (id, name, surname, age) => {
    return new Promise((res, rej) => {
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

        db.query(q, updatedValues, (err, data) => {
            if (err) rej(err);

            res(data);
        })
    })
}

const deleteMember = (id) => {
    return new Promise((res, rej) => {
        const q = "DELETE FROM members WHERE id=?";

        db.query(q, [id], (err, data) => {
            if (err) rej(err);

            if(data.affectedRows === 0) rej('Member not found');


            res(data);
        })
    })
}

module.exports = {
    allMembers,
    addNewMember,
    updateMember,
    deleteMember
};