const db = require('../utils/mysql');

const allMembers = () => {

    return new Promise((res, rej) => {
        const q = "SELECT * FROM members";

        db.query(q, (err, data) => {
            if (err) rej(err);

            res(data);
        })
    })

}

module.exports = allMembers;