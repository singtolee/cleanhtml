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
        obj[i].detail = strtoarray(obj[i].detail);
		obj[i].status = false;
    }

    jsonfile.writeFile(ofile,obj,{spaces: 2, EOL: '\r\n'}, function(err){
        console.error(err)
    })

})

function strtoarray(str){
	var jpg = str.match(/\/\/\S*.jpg/g);
	var png = str.match(/\/\/\S*.png/g);
	if(jpg&&png){
		return jpg.concat(png)
	}else {
		if(jpg){
			return jpg;
		}else {
			return png;
		}
	}
}

























