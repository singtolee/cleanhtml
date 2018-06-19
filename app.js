var jsonfile = require('jsonfile');
var file = './ten17.json';
var outFile = './output.json';
jsonfile.readFile(file,function(err,obj){
    var i;
    for(i=0;i<obj.length;i++){
        obj[i].detail = strtoarray(obj[i].detail)
    }

    jsonfile.writeFile(outFile,obj,function(err){
        console.error(err)
    })

})

function strtoarray(str){
    var res = str.match(/https:\/\/cbu01.alicdn.com\/img\/ibank\/\d+\/\d+\/\d+\/\d+\_\d+.jpg/g)
    return res;
}