var fs = require('fs'),//path = 'F://360/';
 	path=process.argv[2],//process.argv.splice(2);
 	obj={};
function isDirectory(path,name){
	if(/^[\~\.\&\$]/gi.test(name)) return false;
	try{
		var stat=fs.statSync(path+'/'+name);
	}catch(e){
		throw new Error('open dir error\n\n'+e);
	}
	return stat.isDirectory();
}
function redeDir(path,obj){
	var nowPath=path,arr=fs.readdirSync(nowPath);
	for(var i=0,len=arr.length;i<len;i++){
		obj[arr[i]]={};
		if(!isDirectory(nowPath,arr[i])){
			obj[arr[i]]=arr[i];
		}else{
			redeDir(nowPath+'/'+arr[i],obj[arr[i]]);
		}
	}
}
redeDir(path,obj);
console.log(obj);
