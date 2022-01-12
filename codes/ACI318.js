console.log('ACI 318-14 Load Combination is working')

function ASCE710service(D, L, E, W, LR, R, S){
	// var load_combo = {
    //     "SL1" : {
    //         ""
    //     }
    // }
	
    // load_combo["SL1"]["value"] = D;
	var SL1 = D;
	var SL2 = D + L;
	var SL3a = D + LR;
	var SL3b = D + S;
	var SL3c = D + R;

	var SL4a = D + (0.75 * L) + (0.75 * LR);
	var SL4b = D + (0.75 * L) + (0.75 * S);
	var SL4c = D + (0.75 * L) + (0.75 * R);

	var SL5a = D + (0.6 * W);
	var SL5b = D + (0.7 * E);
	
	var SL6aa = D + (0.75 * L) + (0.75 * (0.6 * W)) + (0.75 * LR);
	var SL6ab = D + (0.75 * L) + (0.75 * (0.6 * W)) + (0.75 * S);
	var SL6ac = D + (0.75 * L) + (0.75 * (0.6 * W)) + (0.75 * R);
	var SL6ba = D + (0.75 * L) + (0.75 * (0.7 * E)) + (0.75 * S);

	var SL7 = (0.6 * D) + (0.6 * W);
	var SL8 = (0.6 * D) + (0.7 * E);
	
	var data = [] //stores the load combination here
    
    var value_arr = []
    var script = [] 

	// if(D != 0) value_arr.push(load_combo["SL1"]["value"])
    if(D != 0) data.push(SL1)
	if(D != 0 && L !=0) data.push(SL2)
	if(D != 0 || LR !=0 || S !=0 || R != 0){
		
		if(LR != 0) data.push(SL3a)
		if(S != 0) data.push(SL3b)
		if(R != 0) data.push(SL3c)
	}
	if(D != 0 && L !=0 || LR !=0 || S !=0 || R != 0){

		if(LR != 0) data.push(SL4a)
		if(S != 0) data.push(SL4b)
		if(R != 0) data.push(SL4c)

	}
	if(D != 0 || E !=0 || W !=0 ){

		if(W != 0) data.push(SL5a)
		if(E != 0) data.push(SL5b)

	}
	if(D !=0 && L != 0 && W != 0 || LR != 0 || S != 0 || R != 0){

		if(LR != 0) data.push(SL6aa)
		if(S != 0) data.push(SL6ab)
		if(R != 0) data.push(SL6ac)

	}
	if(D !=0 && L != 0 && E != 0 && S != 0){

		data.push(SL6ba)

	}
	if(D !=0 && W != 0 ){

		data.push(SL7)

	}

	if(D !=0 && E != 0 ){

		data.push(SL8)

	}

	return data

}


test = ASCE710service(100, 0, 0, 0, 0, 0, 0)
console.log(test)