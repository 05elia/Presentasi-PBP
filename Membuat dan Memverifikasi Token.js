const jwt = require('jsonwebtoken');

const secretKey = 'rahasiasecure'; // Ganti dengan kunci/password yang kuat

const user = {
    id: 1,
    username: 'Altun Sujjada'
};

const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
console.log('Token:', token);
