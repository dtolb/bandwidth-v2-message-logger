const userId = process.env.BANDWIDTH_USER_ID;
const apiToken = process.env.BANDWIDTH_API_TOKEN;
const apiSecret = process.env.BANDWIDTH_API_SECRET;

let app = require("../index.js");
let Messages = app.get('models').BandwidthV2MessageLog;

module.exports.validateMessage = (req, res, next) => {
  res.sendStatus(200);
  next();
};

module.exports.saveMessage = async (req, res) => {
  try {
    if (req.body.length > 1) {
      throw new Error('Not yet ready to handle array of callbacks');
    }
    const messageEvent = req.body[0];
    //console.log(messageEvent);
    const message = {
      status: messageEvent.type,
      description: messageEvent.description,
      text: messageEvent.message.text,
      messageId: messageEvent.message.id,
      message: messageEvent,
      time: messageEvent.time
    };
    const newMessageEntry = await Messages.create(message);
    //console.log(`Saved message: ${newMessageEntry.id}`);
  }
  catch (e) {
    console.log('Error saving to database');
    console.error(e);
  }

}