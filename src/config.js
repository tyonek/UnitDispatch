require('dotenv').config();
const AWSInfo={
    region:process.env.REACT_APP_REGION,
    accessKeyId:process.env.REACT_APP_ACCESS_KEYID,
    secretAccessKey:process.env.REACT_APP_SECRET_ACCESSKEY,
    bucketName:process.env.REACT_APP_SECRET_ACCESSKEY 
}

export default AWSInfo;