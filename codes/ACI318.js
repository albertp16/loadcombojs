console.log('ACI 318-14 Load Combination is working')

//test of CSA load combinatins

console.log('ACI 318-14 load combination')
console.log('Working report')

function ASCE710service(D, L, E, W, LR, R, S) {

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
        "1": {
            "value": SL1,
            "text": 'D',
            "html": 'D',
            "ref": "2.4.1 Eq. 1"
        },
        "2": {
            "value": SL2,
            "text": 'D + L',
            "html": 'D + L',
            "ref": "2.4.1 Eq. 2"
        },
        "3a": {
            "value": SL3a,
            "text": 'D + Lr',
            "html": 'D + L<sub>r</sub>',
            "ref": "2.4.1 Eq. 3"
        },
        "3b": {
            "value": SL3b,
            "text": 'D + S',
            "html": 'D + S',
            "ref": "2.4.1 Eq. 3"
        },
        "3c": {
            "value": SL3c,
            "text": 'D + R',
            "html": 'D + R',
            "ref": "2.4.1 Eq. 3"
        },
        "4a": {
            "value": SL4a,
            "text": 'D + (0.75 x L) + (0.75 x LR)',
            "html": 'D + (0.75 x L) + (0.75 x L<sub>r</sub>)',
            "ref": "2.4.1 Eq. 4"
        },
        "4b": {
            "value": SL4b,
            "text": 'D + (0.75 x L) + (0.75 x S)',
            "html": 'D + (0.75 x L) + (0.75 x S)',
            "ref": "2.4.1 Eq. 4"
        },
        "4c": {
            "value": SL4c,
            "text": 'D + (0.75 x L) + (0.75 x R)',
            "html": 'D + (0.75 x L) + (0.75 x R)',
            "ref": "2.4.1 Eq. 4"
        },
        "5a": {
            "value": SL5a,
            "text": 'D + (0.6 x W)',
            "html": 'D + (0.6 x W)',
            "ref": "2.4.1 Eq. 5"
        },
        "5b": {
            "value": SL5b,
            "text": 'D + (0.7 x E)',
            "html": 'D + (0.7 x E)',
            "ref": "2.4.1 Eq. 5"
        },
        "6aa": {
            "value": SL6aa,
            "text": 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x LR)',
            "html": 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x L<sub>r</sub>)',
            "ref": "2.4.1 Eq. 6a"
        },
        "6ab": {
            "value": SL6ab,
            "text": 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x S)',
            "html": 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x S)',
            "ref": "2.4.1 Eq. 6a"
        },
        "6ac": {
            "value": SL6ac,
            "text": 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x R)',
            "html": 'D + (0.75 x L) + (0.75 x (0.6 x W)) + (0.75 x R)',
            "ref": "2.4.1 Eq. 6a"
        },
        "6b": {
            "value": SL6ba,
            "text": 'D + (0.75 x L) + (0.75 x (0.7 * E)) + (0.75 * S)',
            "html": 'D + (0.75 x L) + (0.75 x (0.7 x E)) + (0.75 x S)',
            "ref": "2.4.1 Eq. 6b"
        },
        "7": {
            "value": SL7,
            "text": '(0.6 x D) + (0.6 x W)',
            "html": '(0.6 x D) + (0.6 x W)',
            "ref": "2.4.1 Eq. 7"
        },
        "8": {
            "value": SL8,
            "text": '(0.6 x D) + (0.7 x E)',
            "html": '(0.6 x D) + (0.7 x E)',
            "ref": "2.4.1 Eq. 8"
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
    if (D != 0) {
        value_arr.push(load_combo["1"]["value"])
        text_arr.push(load_combo["1"]["text"])
        html_arr.push(load_combo["1"]["html"])
        ref_arr.push(load_combo["1"]["ref"])
    }

    //Equation 2
    if (D != 0 && L != 0) {
        value_arr.push(load_combo["2"]["value"])
        text_arr.push(load_combo["2"]["text"])
        html_arr.push(load_combo["2"]["html"])
        ref_arr.push(load_combo["2"]["ref"])
    }

    //Equation 3
    if (D != 0 || LR != 0 || S != 0 || R != 0) {

        if (LR != 0) {
            value_arr.push(load_combo["3a"]["value"])
            text_arr.push(load_combo["3a"]["text"])
            html_arr.push(load_combo["3a"]["html"])
            ref_arr.push(load_combo["3a"]["ref"])
        }
        if (S != 0) {
            value_arr.push(load_combo["3b"]["value"])
            text_arr.push(load_combo["3b"]["text"])
            html_arr.push(load_combo["3b"]["html"])
            ref_arr.push(load_combo["3b"]["ref"])
        }
        if (R != 0) {
            value_arr.push(load_combo["3c"]["value"])
            text_arr.push(load_combo["3c"]["text"])
            html_arr.push(load_combo["3c"]["html"])
            ref_arr.push(load_combo["3c"]["ref"])
        }
    }
    //Equation 4
    if (D != 0 && L != 0 || LR != 0 || S != 0 || R != 0) {

        if (LR != 0) {
            value_arr.push(load_combo["4a"]["value"])
            text_arr.push(load_combo["4a"]["text"])
            html_arr.push(load_combo["4a"]["html"])
            ref_arr.push(load_combo["4a"]["ref"])
        }
        if (S != 0) {
            value_arr.push(load_combo["4b"]["value"])
            text_arr.push(load_combo["4b"]["text"])
            html_arr.push(load_combo["4b"]["html"])
            ref_arr.push(load_combo["4b"]["ref"])
        }
        if (R != 0) {
            value_arr.push(load_combo["4c"]["value"])
            text_arr.push(load_combo["4c"]["text"])
            html_arr.push(load_combo["4c"]["html"])
            ref_arr.push(load_combo["4c"]["ref"])
        }
    }
    if (D != 0 || E != 0 || W != 0) {

        if (W != 0) {
            value_arr.push(load_combo["5a"]["value"])
            text_arr.push(load_combo["5a"]["text"])
            html_arr.push(load_combo["5a"]["html"])
            ref_arr.push(load_combo["5a"]["ref"])
        }
        if (E != 0) {
            value_arr.push(load_combo["5b"]["value"])
            text_arr.push(load_combo["5b"]["text"])
            html_arr.push(load_combo["5b"]["html"])
            ref_arr.push(load_combo["5b"]["ref"])
        }
    }
    if (D != 0 && L != 0 && W != 0 || LR != 0 || S != 0 || R != 0) {

        if (LR != 0) {
            value_arr.push(load_combo["6aa"]["value"])
            text_arr.push(load_combo["6aa"]["text"])
            html_arr.push(load_combo["6aa"]["html"])
            ref_arr.push(load_combo["6aa"]["ref"])
        }
        if (S != 0) {
            value_arr.push(load_combo["6ab"]["value"])
            text_arr.push(load_combo["6ab"]["text"])
            html_arr.push(load_combo["6ab"]["html"])
            ref_arr.push(load_combo["6ab"]["ref"])
        }
        if (R != 0) {
            value_arr.push(load_combo["6ac"]["value"])
            text_arr.push(load_combo["6ac"]["text"])
            html_arr.push(load_combo["6ac"]["html"])
            ref_arr.push(load_combo["6ac"]["ref"])
        }


    }
    if (D != 0 && L != 0 && E != 0 && S != 0) {

        value_arr.push(load_combo["6b"]["value"])
        text_arr.push(load_combo["6b"]["text"])
        html_arr.push(load_combo["6b"]["html"])
        ref_arr.push(load_combo["6b"]["ref"])

    }
    if (D != 0 && W != 0) {

        value_arr.push(load_combo["7"]["value"])
        text_arr.push(load_combo["7"]["text"])
        html_arr.push(load_combo["7"]["html"])
        ref_arr.push(load_combo["7"]["ref"])
    }

    if (D != 0 && E != 0) {

        value_arr.push(load_combo["8"]["value"])
        text_arr.push(load_combo["8"]["text"])
        html_arr.push(load_combo["8"]["html"])
        ref_arr.push(load_combo["8"]["ref"])

    }

    return results

}

function ACI31814factor(D, L, E, W, LR, R, S) {

    var U1 = 1.4 * D;
    /*
    Equation 2 
    Principal load = L 
    */
    var U2 = (1.2 * D) + (1.6 * L)
    var U2a = (1.2 * D) + (1.6 * L) + (0.5 * LR);
    var U2b = (1.2 * D) + (1.6 * L) + (0.5 * S);
    var U2c = (1.2 * D) + (1.6 * L) + (0.5 * R);
    /*
    Equation 3 
    Principal load = Lr or S or R
    */
    var U3a = (1.2 * D) + (1.6 * LR);
    var U3aa = (1.2 * D) + (1.6 * LR) + (1.0 * L);
    var U3ab = (1.2 * D) + (1.6 * LR) + (0.5 * W);

    var U3b = (1.2 * D) + (1.6 * S);
    var U3ba = (1.2 * D) + (1.6 * S) + (1.0 * L);
    var U3bb = (1.2 * D) + (1.6 * S) + (0.5 * W);

    var U3c = (1.2 * D) + (1.6 * R);
    var U3ca = (1.2 * D) + (1.6 * R) + (1.0 * L);
    var U3cb = (1.2 * D) + (1.6 * R) + (0.5 * W);

    /*
    Equation 4 
    */
    var U4 = (1.2 * D) + (1.0 * W); //checking if this okay to include
    var U4l = (1.2 * D) + (1.0 * W) + (1.0 * L);
    var U4lr = (1.2 * D) + (1.0 * W) + (1.0 * L) + (0.5 * LR);
    var U4s = (1.2 * D) + (1.0 * W) + (1.0 * L) + (0.5 * S);
    var U4r = (1.2 * D) + (1.0 * W) + (1.0 * L) + (0.5 * R);

    /*
    Equation 5 
    */
    var U5 = (1.2 * D) + (1.0 * E)
    var U5l = (1.2 * D) + (1.0 * E) + (1.0 * L)
    var U5ls = (1.2 * D) + (1.0 * E) + (1.0 * L) + (0.2 * S);
    var U5s = (1.2 * D) + (1.0 * E) + (0.2 * S)
    /*
    Equation 6 
    */
    var U6 = (0.9 * D) + (1.0 * W);
    /*
    Equation 7 
    */
    var U7 = (0.9 * D) + (1.0 * E);

    var load_combo = {
        "1": {
            "value": U1,
            "text": '1.4 x D',
            "html": '1.4 x D',
            "ref": "5.3.1a"
        },
        "2": {
            "value": U2,
            "text": '(1.2 x D) + (1.6 x L)',
            "html": '(1.2 x D) + (1.6 x L)',
            "ref": "5.3.1b"
        },
        "2a": {
            "value": U2a,
            "text": '(1.2 x D) + (1.6 x L) + (0.5 x Lr)',
            "html": '(1.2 x D) + (1.6 x L) + (0.5 x L<sub>r</sub>)',
            "ref": "5.3.1b"
        },
        "2b": {
            "value": U2b,
            "text": '(1.2 x D) + (1.6 x L) + (0.5 x S)',
            "html": '(1.2 x D) + (1.6 x L) + (0.5 x S)',
            "ref": "5.3.1b"
        },
        "2c": {
            "value": U2c,
            "text": '(1.2 x D) + (1.6 x L) + (0.5 x R)',
            "html": '(1.2 x D) + (1.6 x L) + (0.5 x R)',
            "ref": "5.3.1b"
        },
        "3a": {
            "value": U3a,
            "text": '(1.2 * D) + (1.6 * LR)',
            "html": '(1.2 * D) + (1.6 * L<sub>r</sub>)',
            "ref": "5.3.1c"
        },
        "3aa": {
            "value": U3aa,
            "text": '(1.2 * D) + (1.6 * LR) + (1.0 * L)',
            "html": '(1.2 * D) + (1.6 * L<sub>r</sub>) + (1.0 * L)',
            "ref": "5.3.1c"
        },
        "3ab": {
            "value": U3ab,
            "text": '(1.2 * D) + (1.6 * LR) + (0.5 * W)',
            "html": '(1.2 * D) + (1.6 * L<sub>r</sub>) + (0.5 * W)',
            "ref": "5.3.1c"
        },
        "3b": {
            "value": U3b,
            "text": '(1.2 * D) + (1.6 * S)',
            "html": '(1.2 * D) + (1.6 * S)',
            "ref": "5.3.1c"
        },
        "3ba": {
            "value": U3ba,
            "text": '(1.2 * D) + (1.6 * S) + (1.0 * L)',
            "html": '(1.2 * D) + (1.6 * S) + (1.0 * L)',
            "ref": "5.3.1c"
        },
        "3bb": {
            "value": U3bb,
            "text": '(1.2 * D) + (1.6 * S) + (0.5 * W)',
            "html": '(1.2 * D) + (1.6 * S) + (0.5 * W)',
            "ref": "5.3.1c"
        },
        "3c": {
            "value": U3c,
            "text": '(1.2 * D) + (1.6 * R)',
            "html": '(1.2 * D) + (1.6 * R)',
            "ref": "5.3.1c"
        },
        "3ca": {
            "value": U3ca,
            "text": '(1.2 * D) + (1.6 * R) + (1.0 * L)',
            "html": '(1.2 * D) + (1.6 * R) + (1.0 * L)',
            "ref": "5.3.1c"
        },
        "3cb": {
            "value": U3cb,
            "text": '(1.2 * D) + (1.6 * R) + (0.5 * W)',
            "html": '(1.2 * D) + (1.6 * R) + (0.5 * W)',
            "ref": "5.3.1c"
        },
        "4": {
            "value": U4,
            "text": '(1.2 x D) + (1.0 x W)',
            "html": '(1.2 x D) + (1.0 x W)',
            "ref": "5.3.1d"
        },
        "4l": {
            "value": U4l,
            "text": '(1.2 x D) + (1.0 x W) + (1.0 x L)',
            "html": '(1.2 x D) + (1.0 x W) + (1.0 x L)',
            "ref": "5.3.1d"
        },
        "4lr": {
            "value": U4lr,
            "text": '(1.2 x D) + (1.0 x W) + (1.0 x L) + (0.5 x Lr)',
            "html": '(1.2 x D) + (1.0 x W) + (1.0 x L) + (0.5 x Lr)',
            "ref": "5.3.1d"
        },
        "4s": {
            "value": U4s,
            "text": '(1.2 x D) + (1.0 x W) + (1.0 x L) + (0.5 x S)',
            "html": '(1.2 x D) + (1.0 x W) + (1.0 x L) + (0.5 x S)',
            "ref": "5.3.1d"
        },
        "4r": {
            "value": U4r,
            "text": '(1.2 x D) + (1.0 x W) + (1.0 x L) + (0.5 x R)',
            "html": '(1.2 x D) + (1.0 x W) + (1.0 x L) + (0.5 x R)',
            "ref": "5.3.1d"
        },
        "5": {
            "value": U5,
            "text": '(1.2 x D) + (1.0 x E)',
            "html": '(1.2 x D) + (1.0 x E)',
            "ref": "5.3.1e"
        },
        "5l": {
            "value": U5l,
            "text": '(1.2 x D) + (1.0 x E) + (1.0 x E)',
            "html": '(1.2 x D) + (1.0 x E) + (1.0 x E)',
            "ref": "5.3.1e"
        },
        "5s": {
            "value": U5s,
            "text": '(1.2 x D) + (1.0 x E) + (0.2 x S)',
            "html": '(1.2 x D) + (1.0 x E) + (0.2 x S)',
            "ref": "5.3.1e"
        },
        "5ls": {
            "value": U5ls,
            "text": '(1.2 x D) + (1.0 x E) + (1.0 x L) + (0.2 x S)',
            "html": '(1.2 x D) + (1.0 x E) + (1.0 x L) + (0.2 x S)',
            "ref": "5.3.1e"
        },
        "6": {
            "value": U6,
            "text": '(0.9 x D) + (1.0 x W)',
            "html": '(0.9 x D) + (1.0 x W)',
            "ref": "5.3.1f"
        },
        "7": {
            "value": U7,
            "text": '(0.9 x D) + (1.0 x E)',
            "html": '(0.9 x D) + (1.0 x E)',
            "ref": "5.3.1g"
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
    if (D != 0) {
        value_arr.push(load_combo["1"]["value"])
        text_arr.push(load_combo["1"]["text"])
        html_arr.push(load_combo["1"]["html"])
        ref_arr.push(load_combo["1"]["ref"])
    }

    //Equation 2
    if (D != 0 && L != 0 || LR != 0 || S != 0 || R != 0) {

        if (D != 0 && L != 0 && LR == 0 && S == 0 && R == 0) {
            value_arr.push(load_combo["2"]["value"])
            text_arr.push(load_combo["2"]["text"])
            html_arr.push(load_combo["2"]["html"])
            ref_arr.push(load_combo["2"]["ref"])
        }
        if (LR != 0) {
            value_arr.push(load_combo["2a"]["value"])
            text_arr.push(load_combo["2a"]["text"])
            html_arr.push(load_combo["2a"]["html"])
            ref_arr.push(load_combo["2a"]["ref"])
        }
        if (S != 0) {
            value_arr.push(load_combo["2b"]["value"])
            text_arr.push(load_combo["2b"]["text"])
            html_arr.push(load_combo["2b"]["html"])
            ref_arr.push(load_combo["2b"]["ref"])
        }
        if (R != 0) {
            value_arr.push(load_combo["2c"]["value"])
            text_arr.push(load_combo["2c"]["text"])
            html_arr.push(load_combo["2c"]["html"])
            ref_arr.push(load_combo["2c"]["ref"])
        }


    }

    //Equation 3 for Lr as Primary load 
    if (D != 0 && LR != 0 || L != 0 || W != 0) {

        if (D != 0 && LR != 0 && L == 0 && W == 0) {

            value_arr.push(load_combo["3a"]["value"])
            text_arr.push(load_combo["3a"]["text"])
            html_arr.push(load_combo["3a"]["html"])
            ref_arr.push(load_combo["3a"]["ref"])
        }

        if (L != 0) {
            value_arr.push(load_combo["3aa"]["value"])
            text_arr.push(load_combo["3aa"]["text"])
            html_arr.push(load_combo["3aa"]["html"])
            ref_arr.push(load_combo["3aa"]["ref"])
        }
        if (W != 0) {
            value_arr.push(load_combo["3ab"]["value"])
            text_arr.push(load_combo["3ab"]["text"])
            html_arr.push(load_combo["3ab"]["html"])
            ref_arr.push(load_combo["3ab"]["ref"])
        }

    }

    //Equation 3 for S as Primary load 
    if (D != 0 && S != 0 || L != 0 || W != 0) {

        if (D != 0 && S != 0 && L == 0 && W == 0) {

            value_arr.push(load_combo["3b"]["value"])
            text_arr.push(load_combo["3b"]["text"])
            html_arr.push(load_combo["3b"]["html"])
            ref_arr.push(load_combo["3b"]["ref"])
        }

        if (L != 0) {
            value_arr.push(load_combo["3ba"]["value"])
            text_arr.push(load_combo["3ba"]["text"])
            html_arr.push(load_combo["3ba"]["html"])
            ref_arr.push(load_combo["3ba"]["ref"])
        }
        if (W != 0) {
            value_arr.push(load_combo["3bb"]["value"])
            text_arr.push(load_combo["3bb"]["text"])
            html_arr.push(load_combo["3bb"]["html"])
            ref_arr.push(load_combo["3bb"]["ref"])
        }

    }

    //Equation 3 for R as Primary load 
    if (D != 0 && R != 0 || L != 0 || W != 0) {

        if (D != 0 && R != 0 && L == 0 && W == 0) {

            value_arr.push(load_combo["3c"]["value"])
            text_arr.push(load_combo["3c"]["text"])
            html_arr.push(load_combo["3c"]["html"])
            ref_arr.push(load_combo["3c"]["ref"])
        }

        if (L != 0) {
            value_arr.push(load_combo["3ca"]["value"])
            text_arr.push(load_combo["3ca"]["text"])
            html_arr.push(load_combo["3ca"]["html"])
            ref_arr.push(load_combo["3ca"]["ref"])
        }
        if (W != 0) {
            value_arr.push(load_combo["3cb"]["value"])
            text_arr.push(load_combo["3cb"]["text"])
            html_arr.push(load_combo["3cb"]["html"])
            ref_arr.push(load_combo["3cb"]["ref"])
        }

    }

    //Equation 4 
    if (D != 0 && W != 0 || L != 0 || LR != 0 || S != 0 || R != 0) {

        if (D != 0 && W != 0 && L == 0 && W == 0) {

            value_arr.push(load_combo["4"]["value"])
            text_arr.push(load_combo["4"]["text"])
            html_arr.push(load_combo["4"]["html"])
            ref_arr.push(load_combo["4"]["ref"])
        }

        if (D != 0 && W != 0 && L != 0 && W == 0) {

            value_arr.push(load_combo["4l"]["value"])
            text_arr.push(load_combo["4l"]["text"])
            html_arr.push(load_combo["4l"]["html"])
            ref_arr.push(load_combo["4l"]["ref"])
        }


        if (LR != 0) {
            value_arr.push(load_combo["4lr"]["value"])
            text_arr.push(load_combo["4lr"]["text"])
            html_arr.push(load_combo["4lr"]["html"])
            ref_arr.push(load_combo["4lr"]["ref"])
        }
        if (S != 0) {
            value_arr.push(load_combo["4s"]["value"])
            text_arr.push(load_combo["4s"]["text"])
            html_arr.push(load_combo["4s"]["html"])
            ref_arr.push(load_combo["4s"]["ref"])
        }
        if (R != 0) {
            value_arr.push(load_combo["4r"]["value"])
            text_arr.push(load_combo["4r"]["text"])
            html_arr.push(load_combo["4r"]["html"])
            ref_arr.push(load_combo["4r"]["ref"])
        }


    }

    //Equation 5 
    if (D != 0 && E != 0 || L != 0 || S != 0) {

        if (D != 0 && E != 0 && L == 0 && S == 0) {

            value_arr.push(load_combo["5"]["value"])
            text_arr.push(load_combo["5"]["text"])
            html_arr.push(load_combo["5"]["html"])
            ref_arr.push(load_combo["5"]["ref"])
        }

        if (D != 0 && E != 0 && L != 0 && S == 0) {

            value_arr.push(load_combo["5l"]["value"])
            text_arr.push(load_combo["5l"]["text"])
            html_arr.push(load_combo["5l"]["html"])
            ref_arr.push(load_combo["5l"]["ref"])
        }


        if (D != 0 && E != 0 && L == 0 && S != 0) {

            value_arr.push(load_combo["5s"]["value"])
            text_arr.push(load_combo["5s"]["text"])
            html_arr.push(load_combo["5s"]["html"])
            ref_arr.push(load_combo["5s"]["ref"])
        }
        if (D != 0 && E != 0 && L != 0 && S != 0) {

            value_arr.push(load_combo["5s"]["value"])
            text_arr.push(load_combo["5s"]["text"])
            html_arr.push(load_combo["5s"]["html"])
            ref_arr.push(load_combo["5s"]["ref"])
        }

    }

    //Equation 6
    if (D != 0 && W != 0) {
        value_arr.push(load_combo["6"]["value"])
        text_arr.push(load_combo["6"]["text"])
        html_arr.push(load_combo["6"]["html"])
        ref_arr.push(load_combo["6"]["ref"])
    }
    //Equation 7
    if (D != 0 && E != 0) {
        value_arr.push(load_combo["7"]["value"])
        text_arr.push(load_combo["7"]["text"])
        html_arr.push(load_combo["7"]["html"])
        ref_arr.push(load_combo["7"]["ref"])
    }
    return results;

}
// test = ASCE710service(100, 50, 1, 1, 1, 1, 10)

module.exports = {
    ASCE710service,
    ACI31814factor
}