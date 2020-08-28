let fs=require("fs");
let assert=require("assert");
let parse=JSON.parse;
let stat=fs.statSync;
let read=fs.readFileSync;

class allmoji
{
	constructor(vendor)
	{
		this.setvendor(vendor?vendor:"microsoft");
		this.dbg=false;
	}

	setvendor(vendor)
	{
		let fil="vendors/"+vendor+".json";
		assert(stat(fil).isFile(),"Invalid Vendor: "+vendor);
		this.emojis=parse(read(fil));
		if(this.dbg) console.log("Loaded Emojis from vendor: "+vendor);
	}

	get(name)
	{
		if(this.dbg) console.log("Get: "+name);
		return this.emojis[name];
	}
};

module.exports=new allmoji();