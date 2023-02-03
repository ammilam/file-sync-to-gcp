const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

async function uploadFile(bucketName, localPathToFile, localFileName) {
  const options = { destination: localFileName };
  try {
    const [{ metadata: { updated, name, bucket } }] = await storage.bucket(bucketName).upload(localPathToFile, options);
    if (updated) {
      console.log(`new version "${localPathToFile}" successfully uploaded to ${bucket}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { uploadFile };