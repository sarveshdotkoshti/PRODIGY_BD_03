const redis = require('redis');
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || 6379,
});

const setCache = (key, value, expiration = 3600) => {
    redisClient.setex(key, expiration, JSON.stringify(value));
};

const getCache = (key) => {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, data) => {
            if (err) return reject(err);
            resolve(data ? JSON.parse(data) : null);
        });
    });
};

module.exports = { setCache, getCache };
