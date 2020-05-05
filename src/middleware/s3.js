import AWS from 'aws-sdk'

const s3 = new AWS.S3({
  endpoint: process.env.S3_ENDPOINT,
  useAccelerateEndpoint: false,
  credentials: new AWS.Credentials(process.env.S3_KEY_ID, process.env.S3_KEY, null)
})

export default s3