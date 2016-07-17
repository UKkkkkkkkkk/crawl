var spawn=require("child_process").spawn;
var fs=require("fs");
function download(url){
    var filename=url.split('/').pop();
    var ws=fs.createWriteStream('./' + filename);
    var child=spawn('curl',[url]);
    child.stdout.on('data', function(data) {
        ws.write(data);
    });
    child.stdout.on('end', function(data) {
        ws.end();
    });
    child.on('exit', function(code) {
       console.log("hahaa");
    });

}


download('https://www.baidu.com/img/bd_logo1.png')