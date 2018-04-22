// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
const credentials ={
  client_email: "serviciogap@gaptfg2018-196212.iam.gserviceaccount.com",
  private_key: "eb086cf292389b1686a7378e151a05edd00e60b2"
};

// Creates a client
const client = new vision.ImageAnnotatorClient(credentials);
const request = {
  image: {
    source: {imageUri: 'gs://gapbbdd/IMG_6577_ok.jpg'}
  },
  features: [
    {type: "WEB_DETECTION"},
    {type: "LABEL_DETECTION"},
    {type: "SAFE_SEARCH_DETECTION"},
    {type: "LOGO_DETECTION"},
    {type: "IMAGE_PROPERTIES"}
  ],
};
// Performs label detection on the image file
client
  .annotateImage(request)
  .then(results => {
    //const labels = results[0].textAnnotations;
    //const labels = results;

console.log(JSON.stringify(results));
    //console.log('Labels:');
    //labels.forEach(label => console.log(label));
    //console.log(labels);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
