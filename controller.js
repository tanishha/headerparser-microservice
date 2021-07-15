var ip = require('ip');
function getData(req, res) {
    var ipAdd = ip.address()
    res.json({
        ipaddress: ipAdd,
        language: req.headers["accept-language"],
        software: req.useragent.source
    })
}
module.exports = {
    getData
}