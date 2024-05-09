import Channels from 'pusher';

// const {
//     APP_ID: appId,
//     KEY: key,
//     SECRET: secret,
//     CLUSTER: cluster,
// } = process.env;

const channels = new Channels({
    appId : "1799111",
    key : "8ab2c384ac5036519b69",
    secret : "acd0bb0ceb8e5c2ac48c",
    cluster : "us3"
});

export default function handler(req, res) {
    const data = req.body;
    console.log(data);
    channels.trigger('event-channel', 'event-name', data, () => {
    }).then(r => {
        res.status(200).end('sent event successfully');
    }).catch(e => {
        console.error(e);
        res.status(500).end('failed to send event');
    })
};
