import Twilio from "twilio";

const AccountSid = process.env.TWILIO_SID;
const AuthToken = process.env.TWILIO_TOKEN;
const PhoneNumber = process.env.TWILIO_PHONE;

const twilioClient = Twilio(AccountSid, AuthToken);

const sendSMS = (to: string, body: string) => {
    return twilioClient.messages.create({
        body,
        to,
        from: PhoneNumber
    })
};

export const sendVerificationSMS = (to: string, key: string) =>
    sendSMS(to, `Your verification key is: ${key}`);