const vision = require('@google-cloud/vision');
const credentials = {
  keyFilename: '../gaptfgkey.json'
};
const client = new vision.ImageAnnotatorClient(credentials);

class googleClient {

  constructor() {}

  setRequestFeature(featureType) {
    const feature = formatFeature(featureType)
    const request = {
      image: {
        source: {
          imageUri: 'gs://gapbbdd/IMG_6577_ok.jpg'
        }
      },
      features: [{
        feature
      }],
    }
  }
  getImageAnnotated(request) {
    client
      .annotateImage(request)
      .then(results => {
        console.log(JSON.stringify(results));
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  }
  formatFeature(formatFeature) {
    return JSON.stringify(formatFeature)
  }

  print(str) {
    console.log(str);
  }
}

module.exports = googleClient;
