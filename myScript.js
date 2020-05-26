var rec = 0;

function supprImage(){
	var x = document.getElementsByTagName("img");
	for(i = 0 ; i < x.length; i++){
		var y = x.item(i);
		y.style.display = "none";         
    }
}

function supprId(){
	var z = document.getElementById("cir");
	z.style.display="none";
	var r = document.getElementById("hh");
	r.style.display="none";
	var w = document.getElementById("gg");
	w.style.display="none";
	var q = document.getElementById("ff");
	q.style.display="none";
	var t = document.getElementById("ee");
	t.style.display="none";
	var u = document.getElementById("dd");
	u.style.display="none";
	var h = document.getElementById("cc");
	h.style.display="none";
	var bb = document.getElementById("bb");
	bb.style.display="none";
	var aa = document.getElementById("aa");
	aa.style.display="none";
	var crcr = document.getElementById("crcr");
	crcr.style.display="none";
	var kk = document.getElementById("kk");
	kk.style.display="none";
	
}

function recette(){
	if(rec==0){
		var img = document.createElement("img");
		img.src = "recette.jpg";
		var src = document.getElementById("first");
		src.appendChild(img);
		img.style.width= '300px';
		var txt = document.createTextNode("Voici une recette delicieuse qui peut etre preparee avec des brocolis et de la viande disponible en magasin.");
		document.body.appendChild(txt);
	}
	rec++;
}

SaveItem(){
	var a = document.getElementById("quantite");
	var qtt = a.options[a.selectedIndex].value;
	var b = document.getElementById("items");
	var itm = b.options[b.selectedIndex].value;
	
	if(itm=="Huile"){
		document.getElementById("hl").innerHTML=qtt;
	}else if(itm=="Tofu"){
		document.getElementById("tf").innerHTML=qtt;
	}else if(itm=="Boeuf"){
		document.getElementById("bf").innerHTML=qtt;
	}else if(itm=="Laitue Batavia"){
		document.getElementById("lb").innerHTML=qtt;
	}else if(itm=="Orange"){
		document.getElementById("or").innerHTML=qtt;
	}else if(itm=="Mozarella"){
		document.getElementById("mz").innerHTML=qtt;
	}else if(itm=="Filet de Poisson"){
		document.getElementById("fs").innerHTML=qtt;
	}else if(itm=="Noix de Cajou"){
		document.getElementById("nj").innerHTML=qtt;
	}
}












