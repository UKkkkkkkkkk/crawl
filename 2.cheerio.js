var cheerio=require("cheerio");
cheerio.load('<ul><li><a href="/node.js">node.js</a><li><a href="/javascript">javascript</a></li></li></ul>');
$('ul li a').each(function () {
    var $me = $(this);
  console.log();  
})