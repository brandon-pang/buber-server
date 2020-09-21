import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: process.env.MAILGUN_DOMAIN || ""
});

const sendEmail = (to:string, subject:string, html:string) => {
    const emailData = {
        from: "postmaster@frontdev.co",
        to,
        subject,
        html
    };
    return mailGunClient.messages().send(emailData);
}

export const sendVerificationEmail = (to: string, fullName: string, key: string) => {
    const emailTo=to;
    const emailSubject =`Hello! ${fullName}, Please verify your email`;
    const emailBody=`Verify your email by clicking <a href="https://buber.frontdev.co/verification/${key}">here</a>`;
    return sendEmail(emailTo, emailSubject, emailBody);
}