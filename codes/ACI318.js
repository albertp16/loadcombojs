console.log('ACI 318-14 Load Combination is working')

function ASCE710service(D, L, E, W, LR, R, S){
	
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
    
    var load_combo = {
        "1" : {
            "value" : SL1,
            "text" : 'D', 
            "html" : 'D',
            "ref" : "2.4.1 Eq. 1"
        },
        "2" : {
            "value" : SL2,
            "text" : 'D + L', 
            "html" : 'D + L',
            "ref" : "2.4.1 Eq. 2"                      
        },
        "3a" : {
            "value" : SL3a,
            "text" : 'D + Lr', 
            "html" : 'D + L<sub>r</sub>',
            "ref" : "2.4.1 Eq. 3"           
        },
        "3b" : {
            "value" : SL3b,
            "text" : 'D + S', 
            "html" : 'D + S',
            "ref" : "2.4.1 Eq. 3"           
        },
        "3c" : {
            "value" : SL3c,
            "text" : 'D + R', 
            "html" : 'D + R',
            "ref" : "2.4.1 Eq. 3"           
        }
    }
	
    // load_combo["SL1"]["value"] = D;

	
	var data = [] //stores the load combination here
    
    var value_arr = []
    var text_arr = [] 
    var html_arr = []
    var ref_arr = []

    var results = {
        "value" : value_arr,
        "text" : text_arr,
        "html" : html_arr,
        "ref" : ref_arr
    }
    //Equation 1
    if(D != 0) { 
        value_arr.push(load_combo["1"]["value"])
        text_arr.push(load_combo["1"]["text"])
        html_arr.push(load_combo["1"]["html"])
        ref_arr.push(load_combo["1"]["ref"])
    }

    //Equation 2
	if(D != 0 && L !=0) { 
        value_arr.push(load_combo["2"]["value"])
        text_arr.push(load_combo["2"]["text"])
        html_arr.push(load_combo["2"]["html"])
        ref_arr.push(load_combo["2"]["ref"])
    }

    //Equation 3
	if(D != 0 || LR !=0 || S !=0 || R != 0){
		
		if(LR != 0) { 
            value_arr.push(load_combo["3a"]["value"])
            text_arr.push(load_combo["3a"]["text"])
            html_arr.push(load_combo["3a"]["html"])
            ref_arr.push(load_combo["3a"]["ref"])
        }
		if(S != 0) {
            value_arr.push(load_combo["3b"]["value"])
            text_arr.push(load_combo["3b"]["text"])
            html_arr.push(load_combo["3b"]["html"])
            ref_arr.push(load_combo["3b"]["ref"])
        }
		if(R != 0) {
            value_arr.push(load_combo["3c"]["value"])
            text_arr.push(load_combo["3c"]["text"])
            html_arr.push(load_combo["3c"]["html"])
            ref_arr.push(load_combo["3c"]["ref"])
        }
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

	return results

}


test = ASCE710service(100, 50, 0, 0, 0, 1, 10)
console.log(test)