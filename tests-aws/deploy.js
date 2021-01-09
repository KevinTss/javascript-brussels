const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = '';
const AWS_SECRET_ACCESS_KEY = '';
const AWS_S3_BUCKET_NAME = 'arn:aws:s3:::bucket-name';
const AWS_S3_REGION = 'eu-west-3';
const ARN = 'arn:aws:s3:...';

AWS.config.update({
  region: AWS_S3_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

AWS.config.logger = process.stdout;
// AWS.config.loadFromPath('./config.json')
// console.log('/', AWS.config);
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
});

// s3.listBuckets((err, data) => {
//   if (err) {
//     console.log('Error: ', err);
//   } else if (data) {
//     console.log('Success: ', data);
//   }
// });

s3.listObjects({ Bucket: ARN }, (err, data) => {
  if (err) {
    console.log('Error: ', err);
  } else if (data) {
    console.log('Success: ', data);
  }
});

// s3.getBucketWebsite({ Bucket: AWS_S3_BUCKET_NAME }, function (err, data) {

// });
