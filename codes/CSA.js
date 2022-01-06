//test of CSA load combinatins

console.log('CSA load combination')
console.log('Working report')
/*
Load arrangements

0,1,2,3,4,5,6,7,8 

ID [0]; NOTATION[1] ;DEAD [2]; LIVE [3]; SNOW [4]; WIND [5]; EQ [6]; PRINCIPLE LOADS [7]; COMPANIONS LOADS [8]

*/

/*
        "loads": {
            "1": {
                "DL": {
                    "axial": 100,
                    "shear_x": 0,
                    "shear_z": 0,
                    "moment_x": 0,
                    "moment_z": 0
                },
                "LL": {
                    "axial": 0,
                    "shear_x": 0,
                    "shear_z": 0,
                    "moment_x": 0,
                    "moment_z": 0
                },
                "W": {
                    "axial": 0,
                    "shear_x": 0,
                    "shear_z": 0,
                    "moment_x": 0,
                    "moment_z": 0
                },
                "E": {
                    "axial": 0,
                    "shear_x": 0,
                    "shear_z": 0,
                    "moment_x": 0,
                    "moment_z": 0
                },
                "LR": {
                    "axial": 0,
                    "shear_x": 0,
                    "shear_z": 0,
                    "moment_x": 0,
                    "moment_z": 0
                },
                "RL": {
                    "axial": 0,
                    "shear_x": 0,
                    "shear_z": 0,
                    "moment_x": 0,
                    "moment_z": 0
                },
                "SL": {
                    "axial": 0,
                    "shear_x": 0,
                    "shear_z": 0,
                    "moment_x": 0,
                    "moment_z": 0
                }
            }

*/
//CSA A23.3-19/14/04/94 
service = [
    null,
    [1,'S1',1,0,0,0,0,'D','-'],
    [2,'S2',1,1,0,0,0,'D,L','-'],
    [3,'S3',1,1,1,0,0,'D,S','-'],
    [4,'S4',0.75,0.75,1,1,0,'D,L,W','-'],
    [5,'S5',0.75,0.75,1,-1,0,'D,L,W','-'],
    [6,'S6',0.75,0.75,1,1,0,'D,L,W','-'],
    [7,'S7',0.75,0.75,1,-1,0,'D,L,W','-'],
    [8,'S8',0.75,0.75,1,0,0.70,'D,L,E','-'],
    [9,'S9',0.75,0.75,1,0,-0.70,'D,L,E','-'],
    [10,'S10',0.75,0.75,1,0,0.70,'D,L,E','-'],
    [11,'S11',0.75,0.75,1,0,-0.70,'D,L,E','-'],
    [12,'S12',1,0,0,1,0,'D,W','-'],
    [13,'S13',1,0,0,-1,0,'D,W','-'], 
    [14,'S14',1,0,0,0,0.70,'D,E','-'],
    [15,'S15',1,0,0,0,0.70,'D,E','-'],       
]

factor = [
    null,
    [1,'U1',1.4,0,0,0,0,'D','-'],
    [2,'U2',1.25,1.5,1,0,0,'D,L','S'],
    [3,'U3',0.90,1.50,1,0,0,'D,L','S'],
    [4,'U4',1.25,1.50,0,0.40,0,'D,L','W'],
    [5,'U5',1,25,1.50,0,-0.40,0,'D,L','W'],
    [6,'U6',0.90,1.50,0,0.40,0,'D,L','W'],
    [7,'U7',0.90,1.50,0,-0.40,0,'D,L','W'],
    [8,'U8',1.25,1.0,1.50,0,0,'D,S','L'],
    [9,'U9',0.90,1.0,1.50,0,0,'D,S','L'],
    [10,'U10',1.25,0,1.50,0.40,0,'D,S','W'],
    [11,'U11',1.25,0,1.50,-0.40,0,'D,S','W'],
    [12,'U12',0.90,0,1.50,0.40,0,'D,S','W'],
    [13,'U13',0.90,0,1.50,-0.40,0,'D,S','W'], 
    [14,'U14',1.25,0.50,0,1.40,0,'D,W','L'],
    [15,'U15',1.25,0.50,0,-1.40,0,'D,W','L'], 
    [16,'U16',1.25,0,0.50,1.40,0,'D,W','S'],
    [17,'U17',1.25,0,0.50,-1.40,0,'D,W','S'], 
    [18,'U18',0.90,0.50,1.40,0,'D,W','L'], 
    [19,'U19',0.90,0.50,-1.40,0,'D,W','L'],
    [20,'U20',0.90,0,0.50,1.40,0,'D,W','S'], 
    [21,'U21',0.90,0,0.50,-1.40,0,'D,W','S'], 
    [22,'U22',1,0.50,0.25,0,1,'D,E','L,S'],
    [23,'U23',1,0.50,0.25,0,-1,'D,E','L,S']        
]

var loads = {
    "1": {
        "D": {
            "axial": 8.7,
            "shear_x": 6.5,
            "shear_z": 0,
            "moment_x": 21.75,
            "moment_z": 0
        },
        "L": {
            "axial": 10,
            "shear_x": 0,
            "shear_z": 0,
            "moment_x": 0,
            "moment_z": 0
        },
        "W": {
            "axial": 0,
            "shear_x": 0,
            "shear_z": 0,
            "moment_x": 0,
            "moment_z": 0
        },
        "E": {
            "axial": 0,
            "shear_x": 0,
            "shear_z": 0,
            "moment_x": 0,
            "moment_z": 0
        },
        "S": {
            "axial": 1,
            "shear_x": 0,
            "shear_z": 0,
            "moment_x": 0,
            "moment_z": 0
        }
    }
}

// function test(axial,shear_x,shear_z,){

// }

valid = {

}

function lcService(D, L, S, W, E) {

    var test = loads["1"] //soon revised the "1"
    for(i in test){
        // if(i === 0)
        // console.log(i)
        let axial = test[i]["axial"]
        let shear_x = test[i]["shear_x"]
        let shear_z = test[i]["shear_z"]
        let moment_x = test[i]["moment_x"]
        let moment_z = test[i]["moment_z"]

        if(axial != 0 || shear_x != 0 || shear_z != 0 || moment_x != 0 || moment_z || 0){
            valid[i] = "ok"
        } else {
            valid[i] = "-"
        }

    }

	var results = {
		// 'string': string,
		// 'value': value
	};

	return results;

}

lcService(1,0,0,0,0)


console.log(valid)

var testing = []
//--> update
//--> Computation of the Canadian Ultimate loads

if(valid['D'] == 'ok') testing.push('test 1')

if(valid['D'] == 'ok' && valid['L'] == 'ok' || valid['S'] == 'ok'){
    testing.push('test 2')
    if(valid['S'] == 'ok'){
        testing.push('test 3')
    } 
}

if(valid['D'] == 'ok' && valid['L'] == 'ok' || valid['W'] == 'ok'){
    testing.push('wind check')
    if(valid['W'] == 'ok'){
        testing.push('wind added')
    } 
}

if(valid['D'] == 'ok' && valid['S'] == 'ok' || valid['L'] == 'ok'){
    testing.push('wind check')
    if(valid['W'] == 'ok'){
        testing.push('wind added')
    } 
}

if(valid['D'] == 'ok' && valid['S'] == 'ok' || valid['W'] == 'ok'){
    testing.push('wind check')
    if(valid['W'] == 'ok'){
        testing.push('wind added')
    } 
}


console.log(testing)

// if(valid['D'] == 'ok' && valid['L'] != 'ok' && valid['S'] != 'ok'){
//     testing.push('1')
// } else if (valid['D'] == 'ok' && valid['L'] == 'ok' || valid['S'] == 'ok'){

//     if(valid['S'] == 'ok'){
//         console.log('test 3')
//     } else {
//         console.log('test 2')
//     }
// } else {
//     console.log('Invalid load combinations')
// }


// var static_case = ["DL","LL","S","W","E"]
// var complied = []




// //for isolated.
// var static_case = loads["1"]
// for(var i in static_case){
//     console.log(i)

//     let axial = static_case[i]["axial"]

// }

//--> foundation set-up 








