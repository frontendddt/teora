// // lib/jwt.js
// import jwt from 'jsonwebtoken';

// const SECRET = process.env.JWT_SECRET;

// export function signToken(payload) {
//   return jwt.sign(payload, SECRET, { expiresIn: '1h' }); 
// }

// export function verifyToken(token) {
//   try {
//     return jwt.verify(token, SECRET);
//   } catch (error) {
//     return null;
//   }
// }

// /lib/jwt.js
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || (() => {
  throw new Error('JWT_SECRET is not defined in environment variables');
})();

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
  
}
