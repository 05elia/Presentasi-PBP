const decoded = jwt.verify(token, secretKey);
console.log('Decoded:', decoded);
