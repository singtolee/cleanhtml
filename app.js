var jsonfile = require('jsonfile');
var args = require('commander');

args
.version('0.0.1')
.option('-i, --inputFilePath <path>', 'Input file path')
.option('-o, --outputFilePath <path>', 'Output file path')
.parse(process.argv);

const inFile = args.inputFilePath;
const ofile = args.outputFilePath;

//console.log(inFile);
//console.log(ofile);

jsonfile.readFile(inFile,function(err,obj){
    var i;
    for(i=0;i<obj.length;i++){
        obj[i].detail = strtoarray(obj[i].detail)
    }

    jsonfile.writeFile(ofile,obj,{spaces: 2, EOL: '\r\n'}, function(err){
        console.error(err)
    })

})

function strtoarray(str){
    var res = str.match(/https:\/\/cbu01.alicdn.com\/img\/ibank\/\d+\/\d+\/\d+\/\d+\_\d+.jpg/g)
    return res;
}