const db = require('../../utils/mysql');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

// Execute the SQL query to create the members table
db.query(createTableQuery, (err, results) => {
    if (err) {
        console.error('Error creating members table:', err);
    } else {
        console.log('Members table created successfully');
    }
});


db.end();