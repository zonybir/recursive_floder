var fs = require('fs'),
 	path=process.argv[2],//process.argv.splice(2);
 	obj={};
function isDirectory(path,name){
	if(/^[\~\.\&\$]/gi.test(name)) return false;//ignore the file or folder thiat start with ~,.,&,$
	try{
		var stat=fs.statSync(path+'/'+name);//try to open stream
	}catch(e){
		throw new Error('open dir error\n\n'+e);
	}
	return stat.isDirectory();//is folder ?
}
function redeDir(path,obj){
	var nowPath=path,arr=fs.readdirSync(nowPath);//synchronization open stream
	for(var i=0,len=arr.length;i<len;i++){
		obj[arr[i]]={};
		if(!isDirectory(nowPath,arr[i])){
			obj[arr[i]]=arr[i]; //is file ? to push into obj
		}else{
			redeDir(nowPath+'/'+arr[i],obj[arr[i]]);// is folder ? read it diff
		}
	}
}
redeDir(path,obj);
console.log(obj);
