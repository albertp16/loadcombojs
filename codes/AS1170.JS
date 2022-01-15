console.log('AS1170:2002 load combination')
console.log('Australian Standard')
/*
	Clause 4.2.3 Combination for snow, liquid pressure, rainwater ponding, groundwater and earthpressure. 

	Where appropriate to the design situation, the basic combination shall be modified for the 
	action of liquid pressure, ground water and earth pressure by the use of the following factor values: 

	(a) Su = Fsn for snow determined in accordance with AS/NZS 1170.3
	(b) Where the liquid type and density is well defined and design liquid height cannot be exceed -- 
			(i) Su = 1.2Flp for static liquid pressure
			(ii) for self-weight for stored liquid, use the factor for permanent action. 
	(c) Where liquid type or density is not well definied or design liquied height is not limited -- 
			(i) Su = 1.5Flp for static liquid pressure; and
			(ii) for self-weight of stored liquid, use the factor imposed action.
	(e) Su = 1.2Fgw for ground water where the ground water level is as given in AS/NZS 1170.1, otherwise 
			Su = 1.5Fgw 
	(f) For earth pressures: 
			(i) Su = 1.0Fc,u when Fc,u is determined using an ultimit limit states methods.
			(ii) Su = 1.5Fc when using other methods. 
	(g) Su = 1.2Fice for ice determined in accordance with AS/NZS 1170.3  

*/
		
// function SLS(){
class ULS{
    constructor(G, Q, Wu, Eu, Su, psic, psil){
        this.G = G;
        this.Q = Q;
        this.Wu = Wu;
        this.Eu = Eu;
        this.Su = Su;
        this.psic = psic;   
        this.psil = psil;   
    }
    stability(){

        var SL1 = 0.90*this.G; //stabilizing effect
        var SL2 = 1.35*this.G;  
        var SL3 = (1.20*this.G) + (1.5*this.Q);
        var SL4 = (1.3*this.G) + this.Wu + (this.psic*this.Q);
        var SL5 = (1.2*this.G) + this.Eu + (this.psic*this.Q);
        var SL6 = (1.2*this.G) + this.Su + (this.psic*this.Q);
		
		var load_combo = {
			"1": {
				"value": SL1,
				"text": '[0.9G]',
				"html": '[0.9G]',
				"ref": "4.2.1 (a)",
				"notation" : "Ed,stb",
				"remarks" : "permanent action only (does not apply to prestressing force)" 
			},
			"2": {
				"value": SL2,
				"text": '[1.35G]',
				"html": '[1.35G]',
				"ref": "4.2.1 (b.i)",				
				"notation": "Ed,dst",
				"remarks" : "permanent action only (does not apply to prestressing force)" 
			},
			"3": {
				"value": SL3,
				"text": '[1.20G,1.5Q]',
				"html": '[1.20G,1.5Q]',
				"ref": "4.2.1 (b.ii)",				
				"notation": "Ed,dst",
				"remarks" : "permanent and imposed action" 
			},
			"4": {
				"value": SL4,
				"text": '[1.2G,Wu,ψcQ]',
				"html": '[1.2G,Wu,ψ<sub>c</sub>Q]',
				"ref": "4.2.1 (b.iv)",				
				"notation": "Ed,dst",
				"remarks" : "permanent, wind and imposed action" 
			},
			"5": {
				"value": SL5,
				"text": '[G,Eu,ψeQ]',
				"html": '[G,Eu,ψ<sub>E</sub>Q]',
				"ref": "4.2.1 (b.v)",				
				"notation": "Ed,dst",
				"remarks" : "permanent, earthquake and imposed action" 
			},
			"6": {
				"value": SL6,
				"text": '[1.2G,Su,ψcQ]',
				"html": '[1.2G,Su,ψ<sub>c</sub>Q]',
				"ref": "4.2.1 (b.vi)",				
				"notation": "Ed,dst",
				"remarks" : "permanent action, actions givein in Clause 4.2.3 and imposed action" 
			},
		}
	
		var value_arr = []
		var text_arr = []
		var html_arr = []
		var ref_arr = []
	
		var results = {
			"value": value_arr,
			"text": text_arr,
			"html": html_arr,
			"ref": ref_arr
		}

		//Equation 1
		if (this.G != 0) {
			value_arr.push(load_combo["1"]["value"])
			text_arr.push(load_combo["1"]["text"])
			html_arr.push(load_combo["1"]["html"])
			ref_arr.push(load_combo["1"]["ref"])
		}

		if (this.G != 0) {
			value_arr.push(load_combo["1"]["value"])
			text_arr.push(load_combo["1"]["text"])
			html_arr.push(load_combo["1"]["html"])
			ref_arr.push(load_combo["1"]["ref"])
		}
    
    
        return results;	
    }
    strength(){

        var SL1 = (1.35*this.G);
        var SL2 = (1.2*this.G) + (1.5*this.Q);
        var SL3 = (1.2*this.G) + (1.5*this.psil*this.Q);
        var SL4 = (1.2*this.G) + this.Wu + (1.5*this.psic*this.Q);
        var SL5 = (0.9*this.G) + (1.0*this.Wu);
        var SL6 = this.G + this.Eu + (this.psic*this.Q);
        var SL7 = (1.2*this.G) + this.Su + (this.psic*this.Q);
        
        var load_combo = {
			"1": {
				"value": SL1,
				"text": '[1.35G]',
				"html": '[1.35G]',
				"ref": "4.2.2 (a)",
				"notation" : "Ed",
				"remarks" : "permanent action only (does not apply to prestressing force)" 
			},
			"2": {
				"value": SL2,
				"text": '[1.20G,1.5Q]',
				"html": '[1.20G,1.5Q]',
				"ref": "4.2.2 (b)",				
				"notation": "Ed",
				"remarks" : "permanent and imposed action" 
			},
			"3": {
				"value": SL3,
				"text": '[1.20G,1.5ψlQ]',
				"html": '[1.20G,1.5ψ<sub>l</sub>Q]',
				"ref": "4.2.2 (c)",				
				"notation": "Ed",
				"remarks" : "permanent and long-term imposed action" 
			},
			"4": {
				"value": SL4,
				"text": '[1.2G,Wu,ψcQ]',
				"html": '[1.2G,Wu,ψ<sub>c</sub>Q]',
				"ref": "4.2.2 (d)",				
				"notation": "Ed",
				"remarks" : "permanent, wind and imposed action" 
			},
			"5": {
				"value": SL5,
				"text": '[0.9G,Wu]',
				"html": '[0.9G,Wu]',
				"ref": "4.2.2 (e)",				
				"notation": "Ed",
				"remarks" : "permanent, wind action reversal" 
			},
			"6": {
				"value": SL6,
				"text": '[G,E,ψEQ]',
				"html": '[G,E,ψ<sub>E</sub>Q]',
				"ref": "4.2.2 (f)",				
				"notation": "Ed",
				"remarks" : "permanent, earthquake and imposed action" 
			},
            "7": {
				"value": SL7,
				"text": '[1.2G,Su,ψcQ]',
				"html": '[1.2G,S<sub>u</sub>,ψ<sub>c</sub>Q]',
				"ref": "4.2.2 (g)",				
				"notation": "Ed",
				"remarks" : "permanent action, actions given in Clause 4.2.3 and imposed actions" 
			}
		}

    }
}

// G = 1
// Q = 0 
// Wu = 1
// Eu = 1 
// Su = 1 
// psic = 1
// psil = 1
var test = new ULS(1, 1, 1, 1, 1, 1, 1)
var test2 = test.stability()
console.log(test2)