// https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html

/*
PUT /Key+ HTTP/1.1
Host: Bucket.s3.amazonaws.com
x-amz-acl: ACL
Cache-Control: CacheControl
Content-Disposition: ContentDisposition
Content-Encoding: ContentEncoding
Content-Language: ContentLanguage
Content-Length: ContentLength
Content-MD5: ContentMD5
Content-Type: ContentType
Expires: Expires
x-amz-grant-full-control: GrantFullControl
x-amz-grant-read: GrantRead
x-amz-grant-read-acp: GrantReadACP
x-amz-grant-write-acp: GrantWriteACP
x-amz-server-side-encryption: ServerSideEncryption
x-amz-storage-class: StorageClass
x-amz-website-redirect-location: WebsiteRedirectLocation
x-amz-server-side-encryption-customer-algorithm: SSECustomerAlgorithm
x-amz-server-side-encryption-customer-key: SSECustomerKey
x-amz-server-side-encryption-customer-key-MD5: SSECustomerKeyMD5
x-amz-server-side-encryption-aws-kms-key-id: SSEKMSKeyId
x-amz-server-side-encryption-context: SSEKMSEncryptionContext
x-amz-request-payer: RequestPayer
x-amz-tagging: Tagging
x-amz-object-lock-mode: ObjectLockMode
x-amz-object-lock-retain-until-date: ObjectLockRetainUntilDate
x-amz-object-lock-legal-hold: ObjectLockLegalHoldStatus
x-amz-expected-bucket-owner: ExpectedBucketOwner
*/

// const AWS_ACCESS_ID = '';
// const AWS_SECRET_ACCESS_KEY = '';
const AWS_S3_BUCKET_NAME = 'arn:aws:s3:::bucket-name';
const AWS_S3_REGION = 'eu-west-3';

// const axios = require('axios');
// const AWS = require('aws-sdk');

// AWS.config.update({
//   region: AWS_S3_REGION,
//   accessKeyId: AWS_ACCESS_ID,
//   secretAccessKey: AWS_SECRET_ACCESS_KEY,
//   // Bucket: AWS_S3_BUCKET_NAME,
// });

// const s3 = new AWS.S3({
//   apiVersion: '2006-03-01',
// });

// s3.listBuckets(function (err, data) {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     console.log('Success', data.Buckets);
//   }
// });
// console.log('/++1');
// var uploadParams = { Bucket: AWS_S3_BUCKET_NAME, Key: '', Body: '' };
// var file = './public/index.html';

// var fs = require('fs');
// var fileStream = fs.createReadStream(file);
// fileStream.on('error', function (err) {
//   console.log('File Error', err);
// });
// uploadParams.Body = fileStream;
// var path = require('path');
// uploadParams.Key = path.basename(file);
// console.log('++2', uploadParams);
// s3.upload(uploadParams, function (err, data) {
//   if (err) {
//     console.log('++4');
//     console.log('Error', err);
//   }
//   if (data) {
//     console.log('Upload Success', data.Location);
//   }
// });
// console.log('++3');
// console.log(S3Bucket);

// const s3Bucket = 'arn:aws:s3:::bucket-name';
// const endpoint = `${s3Bucket}.s3.amazonaws.com`(function () {
//   axios
//     .put(endpoint, {})
//     .then((response) => console.log('response: ', response))
//     .catch((error) => console.log(error.message));
// })();
const gulp = require('gulp');
const awspublish = require('gulp-awspublish');

gulp.task('publish', function() {
  const publisher = awspublish.create({
    region: AWS_S3_REGION,
    params: {
      Bucket: AWS_S3_BUCKET_NAME,
    },
  });
  const headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public',
  };

  return gulp
    .src('./public/*')
    .pipe(awspublish.gzip({ ext: '.gz' }))
    .pipe(publisher.publish(headers))
    .pipe(awspublish.reporter());
});

function defaultTask(callback) {
  callback();
}

exports.default = gulp.series();

// https://github.com/pgherveou/gulp-awspublish
// https://gist.github.com/keithweaver/575a61aab19711bbeb98c10785be4674
// https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#API_PutObject_Examples
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/global-config-object.html
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html
// https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/s3/s3_upload.js
// https://gulpjs.com/docs/en/api/series
