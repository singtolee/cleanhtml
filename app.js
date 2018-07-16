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
    //var res = str.match(/https:\/\/cbu01.alicdn.com\/img\/ibank\/\d+\/\d+\/\d+\/\d+\_\d+.jpg/g)
	//https://img.alicdn.com/imgextra/i3/876014952/TB2ZizbXQblJKJjSszeXXaAYXXa_!!876014952.jpg
	//cbu01.alicdn.com/img/ibank/2016/456/840/3739048654_1434148681.jpg"
	
	var res1 = str.match(/\/\/cbu01.alicdn.com\/img\/ibank\/\d+\/\d+\/\d+\/\d+\_\d+.jpg/g)
	var res2 = str.match(/\/\/img.alicdn.com\/imgextra\/i\d\/\d+\/\w+\_!!\d+.jpg/g)
	
	if(res1 && res2 ){
		return res1.concat(res2)
	}else {
		if(res1){
			return res1
		}else {
			return res2
		}
		
	}
}