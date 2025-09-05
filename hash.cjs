// hash.cjs
// const bcrypt = require('bcryptjs');

// const password = 'admin@gmail.com';

// bcrypt.hash(password, 10).then((hashedPassword) => {
//   console.log('Hashed password:', hashedPassword);
// });

const bcrypt = require('bcryptjs');

bcrypt.hash('admin123', 10).then((hash) => {
  console.log('Hash:', hash);
});
