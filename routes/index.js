var url = require('url');
var qr = require('qr-image');
module.exports = function(app) {
  app.get("/qrimage.png",function(req,res){
    var text = url.parse(req.url, true).query.text;
    try {
        var img = qr.image(text);
        res.writeHead(200, {'Content-Type': 'image/png'});
        img.pipe(res);
    } catch (e) {
        res.writeHead(414, {'Content-Type': 'text/html'});
        res.end('<h1>414 Request-URI Too Large</h1>');
    }
  });
}
