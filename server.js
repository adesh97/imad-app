var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne={
    title:'article one',
    heading:'august 11 2017',
    content:'this is my first code testing code for checking html and css'
    
};
function createTemplate (data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
    <title>
        article-1
        </title>
        <style>
        .container
        {
            max-width=800px;
            margin=0 auto;
            color=grey;
            
        }
        </style>
        </head>
        <body>
            <div class=".container">
                             <div>
                             <a href="/">home</a>
                            </div>
                                  ${title}
                    ${heading}
                   <div>
                      <p>
                        ${content}
                     </p>
                 </div>
            </div>
            </body>
</html>
`;


return htmlTemplate ;

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-1',function(req,res){
  res.send(createTemplate(articleOne));
}
);
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
