var request = require('request');
var iconv = require('iconv-lite');//负责把GBK编码改成utf-8
request({
    url: 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',
    encoding: null
    },
    function(err,response,body){
        if(err)
            console.error(err);
        body = iconv.decode(body, 'gbk').toString();
        var regex = /<a href=".\/buzz\?b=\d+&c=\d+">.+<\/a>/g;
        console.log(body.match(regex));
})