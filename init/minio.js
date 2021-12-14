var minio = require('minio');

var minioClient = new minio.Client({
    endPoint: 'minio.chaisutta.me',
    port: 443,
    useSSL: true,
    accessKey: `${process.env.MINIO_ACCESS_KEY}`,
    secretKey: `${process.env.MINIO_SECRET_KEY}`
});

minioClient.bucketExists("test", function (error) {
    if (error) {
        console.error('Minio Connection Error', error);
    }
    console.log('Successfully Connected to Minio');
});

module.exports = minioClient;