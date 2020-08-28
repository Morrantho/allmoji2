let fs=require("fs");
let assert=require("assert");
let parse=JSON.parse;
let stat=fs.statSync;
let read=fs.readFileSync;

module.exports=function(vendor)
{
	let fil="json/"+vendor+".json";
	assert(stat(fil).isFile(),"Invalid Vendor: "+vendor);
	return parse(read(fil));
};