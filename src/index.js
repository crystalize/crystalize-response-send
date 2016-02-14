const send = function (res, string) {
    res.write(string);
    res.end();
};

module.exports = {
    name: "crystalize-response-send",
    respondsTo: "then",
    callback: (req, res) => Object.assign(res, {
        send: function (string) {
            return send(res, string);
        },
    }),

    send,
};
