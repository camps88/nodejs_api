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
          type: "WEB_DETECTION"
        },
        {
          type: "LABEL_DETECTION"
        },
        {
          type: "SAFE_SEARCH_DETECTION"
        },
        {
          type: "LOGO_DETECTION"
        },
        {
          type: "IMAGE_PROPERTIES"
        }
      ],
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
