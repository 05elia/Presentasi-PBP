const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'rahasiasecure'; // Ganti dengan kunci rahasia yang kuat

// Middleware untuk verifikasi token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Akses ditolak, token tidak ada.' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token tidak valid.' });
    }
};

// Contoh penggunaan middleware
app.get('/secure-endpoint', verifyToken, (req, res) => {
    res.json({ message: 'Akses diberikan.' });
});

app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});
