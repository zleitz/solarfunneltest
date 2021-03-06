require("dotenv").config()

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  CONTACT_NUMBERS,
  BOT_NUMBER,
  BOT_MESSAGE,
} = process.env

const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

exports.handler = function (event, context, callback) {
  const name = JSON.parse(event.body).payload.data.name
  const email = JSON.parse(event.body).payload.data.email
  const tel = JSON.parse(event.body).payload.data.tel
  const message = `Name: ${name} \n Email: ${email} \n Phone Number: ${tel}`
  console.log(JSON.parse(event.body).payload)

  Promise.all(
    // split the string of several messages into single numbers
    // send message to each of them
    CONTACT_NUMBERS.split(";").map(num => {
      return client.messages.create({
        from: BOT_NUMBER,
        to: num,
        body: message,
      })
    })
  )
    .then(() => callback(null, { statusCode: 200, body: "Created" }))
    .catch(e => {
      console.log(e)
      callback(e)
    })
}
