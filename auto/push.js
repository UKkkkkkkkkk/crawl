var CronJob = require('cron').CronJob;
var exec = require('child_process').exec;
var str = '提交信息';
 var job = new CronJob('0 * * * * *',function(){
 exec('git add -A',function(err,stdout,stderr){
 exec('git commit -m"'+str+'"',function(err,stdout,stderr){
 exec('git push origin master',function(err,stdout,stderr){
 console.log('提交完毕');
 });
 });
 });
 });
 job.start();
