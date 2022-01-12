console.log('ACI 318-14 Load Combination is working')

//test of CSA load combinatins

console.log('ACI 318-14 load combination')
console.log('Working report')

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
        },
        "4a" : {
            "value" : SL4a,
            "text" : 'D + (0.75 x L) + (0.75 x LR)', 
            "html" : 'D + (0.75 x L) + (0.75 x L<sub>r</sub>)',
            "ref" : "2.4.1 Eq. 4"           
        },
        "4b" : {
            "value" : SL4b,
            "text" : 'D + (0.75 x L) + (0.75 x S)', 
            "html" : 'D + (0.75 x L) + (0.75 x S)',
            "ref" : "2.4.1 Eq. 4"           
        },
        "4c" : {
            "value" : SL4c,
            "text" : 'D + (0.75 x L) + (0.75 x R)', 
            "html" : 'D + (0.75 x L) + (0.75 x R)',
            "ref" : "2.4.1 Eq. 4"           
        },
        "5a" : {
            "value" : SL5a,
            "text" : 'D + (0.6 x W)', 
            "html" : 'D + (0.6 x W)',
            "ref" : "2.4.1 Eq. 5"           
        },
        "5b" : {
            "value" : SL5b,
            "text" : 'D + (0.7 x E)', 
            "html" : 'D + (0.7 x E)',
            "ref" : "2.4.1 Eq. 5"            
        },  
        "6aa" : {
            "value" : SL6aa,
            "text" : 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x LR)', 
            "html" : 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x L<sub>r</sub>)',
            "ref" : "2.4.1 Eq. 6a"           
        },
        "6ab" : {
            "value" : SL6ab,
            "text" : 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x S)', 
            "html" : 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x S)',
            "ref" : "2.4.1 Eq. 6a"           
        },
        "6ac" : {
            "value" : SL6ac,
            "text" : 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x R)', 
            "html" : 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x R)',
            "ref" : "2.4.1 Eq. 6a"           
        }, 
		"6b" : {
            "value" : SL6ba,
            "text" : 'D + (0.75 x L) + (0.75 x (0.7 * E)) + (0.75 * S)', 
            "html" : 'D + (0.75 x L) + (0.75 x (0.7 x E)) + (0.75 x S)',
            "ref" : "2.4.1 Eq. 6b"           
        },   
        "7" : {
            "value" : SL7,
            "text" : '(0.6 x D) + (0.6 x W)', 
            "html" : '(0.6 x D) + (0.6 x W)',
            "ref" : "2.4.1 Eq. 7"           
        },    
        "8" : {
            "value" : SL8,
            "text" : '(0.6 x D) + (0.7 x E)', 
            "html" : '(0.6 x D) + (0.7 x E)',
            "ref" : "2.4.1 Eq. 8"           
        },     
    }
		
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
	//Equation 4
    if(D != 0 && L !=0 || LR !=0 || S !=0 || R != 0){

		if(LR != 0) { 
            value_arr.push(load_combo["4a"]["value"])
            text_arr.push(load_combo["4a"]["text"])
            html_arr.push(load_combo["4a"]["html"])
            ref_arr.push(load_combo["4a"]["ref"])
        }
		if(S != 0) {
            value_arr.push(load_combo["4b"]["value"])
            text_arr.push(load_combo["4b"]["text"])
            html_arr.push(load_combo["4b"]["html"])
            ref_arr.push(load_combo["4b"]["ref"])
        }
		if(R != 0) {
            value_arr.push(load_combo["4c"]["value"])
            text_arr.push(load_combo["4c"]["text"])
            html_arr.push(load_combo["4c"]["html"])
            ref_arr.push(load_combo["4c"]["ref"])
        }
	}
	if(D != 0 || E !=0 || W !=0 ){

		if(W != 0) {
            value_arr.push(load_combo["5a"]["value"])
            text_arr.push(load_combo["5a"]["text"])
            html_arr.push(load_combo["5a"]["html"])
            ref_arr.push(load_combo["5a"]["ref"])
        }
        if(E != 0){ 
            value_arr.push(load_combo["5b"]["value"])
            text_arr.push(load_combo["5b"]["text"])
            html_arr.push(load_combo["5b"]["html"])
            ref_arr.push(load_combo["5b"]["ref"])
        }
	}
	if(D !=0 && L != 0 && W != 0 || LR != 0 || S != 0 || R != 0){
        
		if(LR != 0) { 
            value_arr.push(load_combo["6aa"]["value"])
            text_arr.push(load_combo["6aa"]["text"])
            html_arr.push(load_combo["6aa"]["html"])
            ref_arr.push(load_combo["6aa"]["ref"])
        }
		if(S != 0) {
            value_arr.push(load_combo["6ab"]["value"])
            text_arr.push(load_combo["6ab"]["text"])
            html_arr.push(load_combo["6ab"]["html"])
            ref_arr.push(load_combo["6ab"]["ref"])
        }
		if(R != 0) {
            value_arr.push(load_combo["6ac"]["value"])
            text_arr.push(load_combo["6ac"]["text"])
            html_arr.push(load_combo["6ac"]["html"])
            ref_arr.push(load_combo["6ac"]["ref"])
        }


	}
	if(D !=0 && L != 0 && E != 0 && S != 0){

		value_arr.push(load_combo["6b"]["value"])
		text_arr.push(load_combo["6b"]["text"])
		html_arr.push(load_combo["6b"]["html"])
		ref_arr.push(load_combo["6b"]["ref"])

	}
	if(D !=0 && W != 0 ){

		value_arr.push(load_combo["7"]["value"])
		text_arr.push(load_combo["7"]["text"])
		html_arr.push(load_combo["7"]["html"])
		ref_arr.push(load_combo["7"]["ref"])
	}

	if(D !=0 && E != 0 ){

		value_arr.push(load_combo["8"]["value"])
		text_arr.push(load_combo["8"]["text"])
		html_arr.push(load_combo["8"]["html"])
		ref_arr.push(load_combo["8"]["ref"])

	}

	return results

}
test = ASCE710service(100, 50, 1, 1, 1, 1, 10)
console.log(test)