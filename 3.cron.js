var CronJob=require("cron").CronJob;
var task=new CronJob('*/2 * * * * *', function () {
    console.log("执行日志",new Date().toLocaleString());
})
task.start();