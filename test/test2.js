/* your connection code */

var express = require('express');
var app = express.createServer();
app.get('/beatles/:name', function(req, res) {
    var name = req.params.name || '';
    name = name.replace(/[^a-zA_Z]/, '');
    if (!name.length) {
        res.send({});
    } else {
        var query = client.query('SELECT * FROM BEATLES WHERE name =\''+name+'\' LIMIT 1');
        var data = {};
        query.on('row', function(row) {
            data = row;
            res.send(data);
        });
    };
});
app.listen(80, '127.0.0.1');