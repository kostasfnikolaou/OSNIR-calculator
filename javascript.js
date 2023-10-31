function citFunction() {
    var x = document.getElementById("citButton");
    if (x.innerHTML === "CLICK HERE TO SEE REFERENCES") {
        x.innerHTML = "CLICK HERE TO HIDE REFERENCES";
    } else {
        x.innerHTML = "CLICK HERE TO SEE REFERENCES";
    }
}
function infoFunction() {
    var x = document.getElementById("infoButton");
    if (x.innerHTML === "CLICK HERE TO SEE INSTRUCTIONS") {
        x.innerHTML = "CLICK HERE TO HIDE INSTRUCTIONS";
    } else {
        x.innerHTML = "CLICK HERE TO SEE INSTRUCTIONS";
    }
}
function myFunction() {
    // user input
    var nchE = Number(document.getElementById('NchE').value);
    var nchS1 = Number(document.getElementById('NchS1').value);
    var nchS2 = Number(document.getElementById('NchS2').value);
    var nchC = Number(document.getElementById('NchC').value);
    var nchL = Number(document.getElementById('NchL').value);
    var pchE = Number(document.getElementById('PchE').value);
    var pchS1 = Number(document.getElementById('PchS2').value);
    var pchS2 = Number(document.getElementById('PchS1').value);
    var pchC = Number(document.getElementById('PchC').value);
    var pchL = Number(document.getElementById('PchL').value);
    var length = Number(document.getElementById('Length').value);
    var ns = Number(document.getElementById('ns').value);

    if (ns <= 0)
    ns = NaN;
    if (length <= 0) 
    length = NaN;

        
    var pArray = [];

    const c = 3 * Math.pow(10, 8);
    const h = 6.62 * Math.pow(10, -34);
    const bo = 32 * Math.pow(10, 9);
    const gb = 0;
    const So = 0.09;
    const phi = 1;
    const lambda_o = 1310;
    const lambdaX = 3 * Math.pow(10, 8) / (1260 * Math.pow(10, -9));
    const lambdaY = 3 * Math.pow(10, 8) / (1620 * Math.pow(10, -9));
    const deltaLambda = lambdaX - lambdaY;
    const nchTotal = Math.floor(deltaLambda / (32 * Math.pow(10, 9)));
    const g = 4.9 * Math.pow(10, -18);
    const Aeffe = 70 * Math.pow(10, -15);
    const Aeffs1 = 74 * Math.pow(10, -15);
    const Aeffs2 = 76 * Math.pow(10, -15);
    const Aeffc = 80 * Math.pow(10, -15);
    const Aeffl = 83 * Math.pow(10, -15);
    const gsrse = g * 32 / (2 * Aeffe);
    const gsrss1 = g * 32 / (2 * Aeffs1);
    const gsrss2 = g * 32 / (2 * Aeffs2);
    const gsrsc = g * 32 / (2 * Aeffc);
    const gsrsl = g * 32 / (2 * Aeffl);
    const nsrs = Math.floor(15000 / 32);
    const nsrs2 = Math.floor(25000 / 32)+nsrs;
    const PchE = Math.pow(10, -3) * Math.pow(10, pchE / 10);
    const PchS1 = Math.pow(10, -3) * Math.pow(10, pchS1 / 10);
    const PchS2 = Math.pow(10, -3) * Math.pow(10, pchS2 / 10);
    const PchC = Math.pow(10, -3) * Math.pow(10, pchC / 10);
    const PchL = Math.pow(10, -3) * Math.pow(10, pchL / 10);
    
    const a2 = Math.log(10) / 10 * 0.279784;
    const a2db = 0.279784;
    const a3 = Math.log(10) / 10 * 0.245961;
    const a3db = 0.245961;
    const a4 = Math.log(10) / 10 * 0.229484;
    const a4db = 0.229484;
    const a5 = Math.log(10) / 10 * 0.211494;
    const a5db = 0.211494;
    const a6 = Math.log(10) / 10 * 0.209907;
    const a6db = 0.209907;
    const Zee = (1 - Math.exp(-a2 * length)) / a2;
    const Zes1 = (1 - Math.exp(-a3 * length)) / a3;
    const Zes2 = (1 - Math.exp(-a4 * length)) / a4;
    const Zec = (1 - Math.exp(-a5 * length)) / a5;
    const Zel = (1 - Math.exp(-a6 * length)) / a6;
    
    
    //Generating the table
    for (k = 0; k < 98; k++) {
        pArray[k] = 0;
    }
    for (k = 98; k < 233; k++) {
        pArray[k] = 0;
    }
    for (k = 233; k < 827 - Math.floor(nchE / 2); k++) {
        pArray[k] = 0;
    }
    for (k = 827 - Math.floor(nchE / 2); k < 827 + Math.floor(nchE / 2) + (nchE % 2); k++) {
        pArray[k] = PchE;
    }
    for (k = 827 + Math.floor(nchE / 2) + (nchE % 2); k < 1054 - Math.floor(nchS1 / 2); k++) {
        pArray[k] = 0;
    }
    for (k = 1054 - Math.floor(nchS1 / 2); k < 1054 + Math.floor(nchS1 / 2) + (nchS1 % 2); k++) {
        pArray[k] = PchS1
    }
    for (k = 1054 + Math.floor(nchS1 / 2) + (nchS1 % 2); k < 1182 - Math.floor(nchS2 / 2); k++) {
        pArray[k] = 0;
    }
    for (k = 1182 - Math.floor(nchS2 / 2); k < 1182 + Math.floor(nchS2 / 2) + (nchS2 % 2); k++) {
        pArray[k] = PchS2
    }
    for (k = 1182 + Math.floor(nchS2 / 2) + (nchS2 % 2); k < 1385 - Math.floor(nchC / 2); k++) {
        pArray[k] = 0;
    }
    for (k = 1385 - Math.floor(nchC / 2); k < 1385 + Math.floor(nchC / 2) + (nchC % 2); k++) {
        pArray[k] = PchC
    }
    for (k = 1385 + Math.floor(nchC / 2) + (nchC % 2); k < 1566 - Math.floor(nchL / 2); k++) {
        pArray[k] = 0;
    }
    for (k = 1566 - Math.floor(nchL / 2); k < 1566 + Math.floor(nchL / 2) + (nchL % 2); k++) {
        pArray[k] = PchL
    }
    for (k = 1566 + Math.floor(nchL / 2) + (nchL % 2); k < nchTotal; k++) {
        pArray[k] = 0;
    }
    //End of table generation
    
    // Calculating SRS Gain Loss from the Table
    var n2 = 827;
    var n3 = 1054;
    var n4 = 1182;
    var n5 = 1385;
    var n6 = 1566;
    // E - band
    var summedpowere = 0;
    var secondsumpowere = 0;
    var beyond15Sum1e = 0;
    var beyond15Sum2e = 0;
    var srsBeyond15Thze = 0;
    var srsUpTo15Thze = 0;
    var GsrsE = 0;
    // SRS Up to 15 THz
    for (i = Math.max(0, n2 - nsrs); i <= Math.min(n2 + nsrs, nchTotal - 1); i++) {
        summedpowere += pArray[i];
    }

    for (i = Math.max(0, n2 - nsrs); i <= Math.min(n2 + nsrs,nchTotal - 1); i++) {
        secondsumpowere += pArray[i] * Math.exp(gsrse * summedpowere * (i - 1) * Zee);
    }
    srsUpTo15Thze = pArray[n2] * summedpowere * Math.exp(gsrse * summedpowere * (n2 - 1) * Zee) * Math.pow(secondsumpowere, -1) / PchE;

    // Srs Beyond 15 THz:

    for (i = Math.min(nchTotal - 1, n2 + nsrs); i <= Math.min(nchTotal - 1, n2 + nsrs2); i++) {
        beyond15Sum1e += (-0.079321 * Math.log((((i - n2) * 0.032 - 15) / 0.05) + 1) + 0.491712) * pArray[i] / PchE / 0.85;
    }
    beyond15Sum2e += pArray[n2] * Math.exp(gsrse * 2 * pArray[n2] * (n2 - n2) * Zee);
    beyond15Sum2e += pArray[n2] * Math.exp(gsrse * 2 * pArray[n2] * (n2 + nsrs - n2) * Zee);

    srsBeyond15Thze = beyond15Sum1e * ((2 * pArray[n2]) / beyond15Sum2e - 1);
    
    if (isNaN.srsBeyond15Thze) {
        srsBeyond15Thze = 0;
    }
   
    // Combining the contributions

    GsrsE = srsUpTo15Thze + srsBeyond15Thze;

    //S1 - band
    var summedpowers1 = 0;
    var secondsumpowers1 = 0;
    var beyond15Sum1s1 = 0;
    var beyond15Sum2s1 = 0;
    var srsBeyond15Thzs1 = 0;
    var srsUpTo15Thzs1 = 0;
    var GsrsS1 = 0;

    //SRS Up To 15 THz
    for (i = Math.max(0, n3 - nsrs); i <= Math.min(n3 + nsrs, nchTotal - 1); i++) {
        summedpowers1 += pArray[i];
    }

    for (i = Math.max(0, n3 - nsrs); i <= Math.min(nchTotal - 1, n3 + nsrs); i++) {
        secondsumpowers1 += pArray[i] * Math.exp(gsrss1 * summedpowers1 * (i - 1) * Zes1);
    }
    srsUpTo15Thzs1 = pArray[n3] * summedpowers1 * Math.exp(gsrss1 * summedpowers1 * (n3 - 1) * Zes1) * Math.pow(secondsumpowers1, -1) / PchS1;

    // SRS Beyond 15 THz:

    for (i = Math.min(nchTotal - 1, n3 + nsrs); i <= Math.min(nchTotal - 1, n3 + nsrs2); i++) {
        beyond15Sum1s1 += (-0.079321 * Math.log(((i - n3) * 0.032 - 15) / 0.05 + 1) + 0.491712) * pArray[i] / PchS1 / 0.85;
    }
    beyond15Sum2s1 += pArray[n3] * Math.exp(gsrss1 * 2 * pArray[n3] * (n3 - n3) * Zes1);
    beyond15Sum2s1 += pArray[n3] * Math.exp(gsrss1 * 2 * pArray[n3] * (n3 + nsrs - n3) * Zes1);

    srsBeyond15Thzs1 = beyond15Sum1s1 * ((2 * pArray[n3]) / beyond15Sum2s1 - 1);
    if (String.valueOf(srsBeyond15Thzs1) == ("NaN")) {
        srsBeyond15Thzs1 = 0;
    }

    if (isNaN.srsBeyond15Thzs1) {
        srsBeyond15Thzs1 = 0;
    }

    //Combining the contributions

    GsrsS1 = srsUpTo15Thzs1 + srsBeyond15Thzs1;

    

    //S2 - band
    var summedpowers2 = 0;
    var secondsumpowers2 = 0;
    var srsUpTo15Thzs2 = 0;
    var GsrsS2 = 0;

    //SRS Up To 15 THz
    for (i = Math.max(0, n4 - nsrs); i <= Math.min(n4 + nsrs, nchTotal - 1); i++) {
        summedpowers2 += pArray[i];
    }

    for (i = Math.max(0, n4 - nsrs); i <= Math.min(nchTotal - 1, n4 + nsrs); i++) {
        secondsumpowers2 += pArray[i] * Math.exp(gsrss2 * summedpowers2 * (i - 1) * Zes2);
    }
    srsUpTo15Thzs2 = pArray[n4] * summedpowers2 * Math.exp(gsrss2 * summedpowers2 * (n4 - 1) * Zes2) * Math.pow(secondsumpowers2, -1) / PchS2;    
    
    if (isNaN.srsBeyond15Thzs2) {
        srsBeyond15Thzs2 = 0;
    }

    //Combining the contributions
    GsrsS2 = srsUpTo15Thzs2;

    

    //C - band
    var summedpowerc = 0;
    var secondsumpowerc = 0;
    var beyond15Sum1c = 0;
    var beyond15Sum2c = 0;
    var srsBeyond15Thzc = 0;
    var srsUpTo15Thzc = 0;
    var GsrsC = 0;

    //SRS Up To 15 THz
    for (i = Math.max(0, n5 - nsrs); i <= Math.min(n5 + nsrs, nchTotal - 1); i++) {
        summedpowerc += pArray[i];
    }

    for (i = Math.max(0, n5 - nsrs); i <= Math.min(nchTotal - 1, n5 + nsrs); i++) {
        secondsumpowerc += pArray[i] * Math.exp(gsrsc * summedpowerc * (i - 1) * Zec);
    }
    srsUpTo15Thzc = pArray[n5] * summedpowerc * Math.exp(gsrsc * summedpowerc * (n5 - 1) * Zec) * Math.pow(secondsumpowerc, -1) / PchC;

    // SRS Beyond 15 THz:

    for (i = Math.max(0, n5 - nsrs2); i <= Math.max(0, n5 - nsrs); i++) {
        beyond15Sum1c += (-0.079321 * Math.log(((n5-i) * 0.032 - 15) / 0.05 + 1) + 0.491712) * pArray[i] / PchC / 0.85;
    }
    beyond15Sum2c += pArray[n5] * Math.exp(gsrsc * 2 * pArray[n5] * (n5 - n5) * Zec);
    beyond15Sum2c += pArray[n5] * Math.exp(gsrsc * 2 * pArray[n5] * (n5-n5-nsrs) * Zec);

    srsBeyond15Thzc = beyond15Sum1c * (2 * pArray[n5] / beyond15Sum2c - 1);
    if (String.valueOf(srsBeyond15Thzc) == ("NaN")) {
        srsBeyond15Thzc = 0;
    }

    if (isNaN.srsBeyond15Thzc) {
        srsBeyond15Thzc = 0;
    }
    
    //Combining the contributions

    GsrsC = srsUpTo15Thzc + srsBeyond15Thzc;
    
    

    //L - band
    var summedpowerl = 0;
    var secondsumpowerl = 0;
    var beyond15Sum1l = 0;
    var beyond15Sum2l = 0;
    var srsBeyond15Thzl = 0;
    var srsUpTo15Thzl = 0;
    var GsrsL = 0;

    //SRS Up To 15 THz
    for (i = Math.max(0, n6 - nsrs); i <= Math.min(n6 + nsrs, nchTotal - 1); i++) {
        summedpowerl += pArray[i];
    }

    for (i = Math.max(0, n6 - nsrs); i <= Math.min(nchTotal - 1, n6 + nsrs); i++) {
        secondsumpowerl += pArray[i] * Math.exp(gsrsl * summedpowerl * (i - 1) * Zel);
    }
    srsUpTo15Thzl = pArray[n6] * summedpowerl * Math.exp(gsrsl * summedpowerl * (n6 - 1) * Zel) * Math.pow(secondsumpowerl, -1) / PchL;

    // Srs Beyond 15 THz:

    for (i = Math.max(0, n6 - nsrs2); i <= Math.max(0, n6 - nsrs); i++) {
        beyond15Sum1l += (-0.079321 * Math.log(((n6-i) * 0.032 - 15) / 0.05 + 1) + 0.491712) * pArray[i] / PchL / 0.85;
    }
    beyond15Sum2l += pArray[n6] * Math.exp(gsrsl * 2 * pArray[n6] * (n6 - n6) * Zel);
    beyond15Sum2l += pArray[n6] * Math.exp(gsrsl * 2 * pArray[n6] * (n6-nsrs-n6) * Zel);

    srsBeyond15Thzl = beyond15Sum1l * ((2 * pArray[n6]) / beyond15Sum2l - 1);
    if (String.valueOf(srsBeyond15Thzl) == ("NaN")) {
        srsBeyond15Thzl = 0;
    }

    if (isNaN.srsBeyond15Thzl) {
        srsBeyond15Thzl = 0;
    }
    //Combining the contributions

    GsrsL = srsUpTo15Thzl + srsBeyond15Thzl;
    
    //Aeff for each band
    var aeffe = a2db - (10 * Math.log10(GsrsE) / length);
    var aeffs1 = a3db - (10 * Math.log10(GsrsS1) / length);
    var aeffs2 = a4db - (10 * Math.log10(GsrsS2) / length);
    var aeffc = a5db - (10 * Math.log10(GsrsC) / length);
    var aeffl = a6db - (10 * Math.log10(GsrsL) / length);

// E - band

var gamma_e = 1.65; // W^-1 * km^-1
var nfe = Math.pow(10, 6 / 10);
var lambda2 = 1417.5 * Math.pow(10, -9);
var d2 = Math.abs(So / 4 * (lambda2 * Math.pow(10, 9) - (Math.pow(lambda_o, 4) / Math.pow(lambda2 * Math.pow(10, 9), 3))) * Math.pow(10, -3));
var a2eff = Math.log(10) / 10 * aeffe;
var Leffee = (1 - Math.exp(-a2eff * length)) / a2eff;
var fe = 211.64 * Math.pow(10, 12);
var gedb = (a2db * length + 2);
var ge = Math.pow(10, gedb / 10);
var x1e = -Math.pow(lambda2, 2) * Math.pow(bo, 2) * d2 * length * Math.pow(nchE,2) / (16 * c);
var x2e = (Math.pow(lambda2, 2) * Math.pow(bo, 2) * d2 * length * Math.pow(nchE,2)) / (2 * c);
var z1esum = 0;
for (k = Math.floor(x1e); k <= Math.floor(x2e); k++) {
    z1esum += 1 / (1 + Math.pow((2 * k * 3.14) / (a2eff * length), 2));
}
var z1e = Math.pow((2/a2eff), 2) + (2*Math.pow(length, 2)*(Math.pow(ns, 2)-1)/ Math.pow(z1esum, 2));
var z2e = Math.pow((2/a2eff), 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1);

//S1 - band

var gamma_s1 = 1.50; // W^-1 * km^-1
var nfs1 = Math.pow(10, 5.5 / 10);
var lambda3 = 1468.64 * Math.pow(10, -9);
var d3 = Math.abs(So / 4 * (lambda3 * Math.pow(10, 9) - (Math.pow(lambda_o, 4) / Math.pow(lambda3 * Math.pow(10, 9), 3))) * Math.pow(10, -3));
var a3eff = Math.log(10) / 10 * aeffs1;
var Leffs11 = (1 - Math.exp(-a3eff * length)) / a3eff;
var fs1 = 204.4 * Math.pow(10, 12);
var gs1db = (a3db * length + 2);
var gs1 = Math.pow(10, gs1db / 10);
var x1s1 = -(Math.pow(lambda3, 2) * Math.pow(bo, 2) * d3 * length * Math.pow(nchS1,2)) / (16 * c);
var x2s1 = (Math.pow(lambda3, 2) * Math.pow(bo, 2) * d3 * length * Math.pow(nchS1,2)) / (2 * c);
var z1s1sum = 0;
for (k = Math.floor(x1s1); k <= Math.floor(x2s1); k++) {
    z1s1sum += 1 / (1 + Math.pow((2 * k * Math.PI) / (a3eff * length), 2));
}
var z1s1 = Math.pow((2 / a3eff), 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1) / Math.pow(z1s1sum, 2);
var z2s1 = Math.pow(2 / a3eff, 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1);

//S2 - band

var gamma_s2 = 1.44; // W^-1 * km^-1
var nfs2 = Math.pow(10, 5.5 / 10);
var lambda4 = 1507.1 * Math.pow(10, -9);
var d4 = Math.abs(So / 4 * (lambda4 * Math.pow(10, 9) - (Math.pow(lambda_o, 4) / Math.pow(lambda4 * Math.pow(10, 9), 3))) * Math.pow(10, -3));
var a4eff = Math.log(10) / 10 * aeffs2;
var Leffs22 = (1 - Math.exp(-a4eff * length)) / a4eff;
var fs2 = 200.3 * Math.pow(10, 12);
var gs2db = (a4db * length + 2);
var gs2 = Math.pow(10, gs2db / 10);
var x1s2 = -(Math.pow(lambda4, 2) * Math.pow(bo, 2) * d4 * length * Math.pow(nchS2,2)) / (16 * c);
var x2s2 = (Math.pow(lambda4, 2) * Math.pow(bo, 2) * d4 * length * Math.pow(nchS2,2)) / (2 * c);
var z1s2sum = 0;
for (k = Math.floor(x1s2); k <= Math.floor(x2s2); k++) {
    z1s2sum += 1 / (1 + Math.pow((2 * k * Math.PI) / (a4eff * length), 2));
}
var z1s2 = Math.pow((2 / a4eff), 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1) / Math.pow(z1s2sum, 2);
var z2s2 = Math.pow(2 / a4eff, 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1);

//C - band

var gamma_c = 1.32; // W^-1 * km^-1
var nfc = Math.pow(10, 5.5 / 10);
var lambda5 = 1549.13 * Math.pow(10, -9);
var d5 = Math.abs(So / 4 * (lambda5 * Math.pow(10, 9) - (Math.pow(lambda_o, 4) / Math.pow(lambda5 * Math.pow(10, 9), 3))) * Math.pow(10, -3));
var a5eff = Math.log(10) / 10 * aeffc;
var Leffcc = (1 - Math.exp(-a5eff * length)) / a5eff;
var fc = 193.8 * Math.pow(10, 12);
var gcdb = (a5db * length + 2);
var gc = Math.pow(10, gcdb / 10);
var x1c = -(Math.pow(lambda5, 2) * Math.pow(bo, 2) * d5 * length * Math.pow(nchC,2)) / (16 * c);
var x2c = (Math.pow(lambda5, 2) * Math.pow(bo, 2) * d5 * length * Math.pow(nchC,2)) / (2 * c);
var z1csum = 0;
for (k = Math.floor(x1c); k <= Math.floor(x2c); k++) {
    z1csum += 1 / (1 + Math.pow(2 * k * Math.PI / (a5eff * length), 2));
}
var z1c = Math.pow((2 / a5eff), 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1) / Math.pow(z1csum, 2);
var z2c = Math.pow(2 / a5eff, 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1);

//L - band

const gamma_l = 1.24; // W^-1 * km^-1
const nfl = Math.pow(10, 6 / 10);
const lambda6 = 1595.25 * Math.pow(10, -9);
const d6 = Math.abs(So / 4 * (lambda6 * Math.pow(10, 9) - (Math.pow(lambda_o, 4) / Math.pow(lambda6 * Math.pow(10, 9), 3))) * Math.pow(10, -3));
var a6eff = Math.log(10) / 10 * aeffl;
var Leffll = (1 - Math.exp(-a6eff * length)) / a6eff;
const fl = 188 * Math.pow(10, 12);
const gldb = (a6db * length + 2);
const gl = Math.pow(10, gldb / 10);
var x1l = -(Math.pow(lambda6, 2) * Math.pow(bo, 2) * d6 * length * Math.pow(nchL,2)) / (16 * c);
var x2l = (Math.pow(lambda6, 2) * Math.pow(bo, 2) * d6 * length * Math.pow(nchL,2)) / (2 * c);
var z1lsum = 0;
for (k = Math.floor(x1l); k <= Math.floor(x2l); k++) {
    z1lsum += 1 / (1 + Math.pow((2 * k * Math.PI) / (a6eff * length), 2));
}
var z1l = Math.pow((2 / a6eff), 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1) / Math.pow(z1lsum, 2);
var z2l = Math.pow(2 / a6eff, 2) + 2 * Math.pow(length, 2) * (Math.pow(ns, 2) - 1);

//Effects for each band

//E - band
var pnlie1 = (32 / 27) * (Math.pow(gamma_e, 2) * Math.pow(Leffee, 2) * Math.pow(PchE, 3) * Math.pow(ns, 2) * c) / (Math.pow(lambda2, 2) * Math.pow(bo, 2) * d2 * Math.sqrt(z1e)) *
(1 + (4 * Math.exp(-a2eff * length)) / Math.pow(1 - Math.exp(-a2eff * length), 2)) * 
(Math.log(Math.PI * Math.pow(lambda2, 2) * d2 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchE, 2 * bo / (bo + gb)) * Math.sqrt(z2e)) - (5 / 3 * phi * Math.log(Math.pow(nchE, bo / (bo + gb)))));
var pnlie2 = -(32 / 27) * Math.pow(gamma_e, 2) * Math.pow(Leffee, 2) * Math.pow(PchE, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda2, 2) * Math.pow(bo, 2) * d2 * Math.sqrt(z1e + 12 * Math.pow(length, 2))) *
(4 * Math.exp(-a2eff * length)) / Math.pow(1 - Math.exp(-a2eff * length), 2) *
(Math.log(Math.PI * Math.pow(lambda2, 2) * d2 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchE, 2 * bo / (bo + gb)) * Math.sqrt(z2e + 12 * Math.pow(length, 2))) - 5 / 3 * phi * Math.log(Math.pow(nchE, bo / (bo + gb))));
var pnlie = pnlie1 + pnlie2;
var pasee = h * fe * (nfe * ge - 1) * bo * (Math.pow(GsrsE, 2) + GsrsE + 1) / Math.pow(GsrsE, 3) * (ns / 3);

//S1 - band
var pnlis11 = 32 / 27 * Math.pow(gamma_s1, 2) * Math.pow(Leffs11, 2) * Math.pow(PchS1, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda3, 2) * Math.pow(bo, 2) * d3 * Math.sqrt(z1s1)) *
(1 + (4 * Math.exp(-a3eff * length)) / Math.pow(1 - Math.exp(-a3eff * length), 2)) *
(Math.log(Math.PI * Math.pow(lambda3, 2) * d3 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchS1, 2 * bo / (bo + gb)) * Math.sqrt(z2s1)) - 5 / 3 * phi * Math.log(Math.pow(nchS1, bo / (bo + gb))));
var pnlis12 = -32 / 27 * Math.pow(gamma_s1, 2) * Math.pow(Leffs11, 2) * Math.pow(PchS1, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda3, 2) * Math.pow(bo, 2) * d3 * Math.sqrt(z1s1 + 12 * Math.pow(length, 2))) *
(4 * Math.exp(-a3eff * length)) / Math.pow(1 - Math.exp(-a3eff * length), 2) *
(Math.log(Math.PI * Math.pow(lambda3, 2) * d3 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchS1, 2 * bo / (bo + gb)) * Math.sqrt(z2s1 + 12 * Math.pow(length, 2))) - 5 / 3 * phi * Math.log(Math.pow(nchS1, bo / (bo + gb))));
var pnlis1 = pnlis11 + pnlis12;
var pases1 = h * fs1 * (nfs1 * gs1 - 1) * bo * (Math.pow(GsrsS1, 2) + GsrsS1 + 1) / Math.pow(GsrsS1, 3) * (ns / 3);

//S2 - band
var pnlis21 = 32 / 27 * Math.pow(gamma_s2, 2) * Math.pow(Leffs22, 2) * Math.pow(PchS2, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda4, 2) * Math.pow(bo, 2) * d4 * Math.sqrt(z1s2)) *
(1 + (4 * Math.exp(-a4eff * length)) / Math.pow(1 - Math.exp(-a4eff * length), 2)) *
(Math.log(Math.PI * Math.pow(lambda4, 2) * d4 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchS2, 2 * bo / (bo + gb)) * Math.sqrt(z2s2)) - 5 / 3 * phi * Math.log(Math.pow(nchS2, bo / (bo + gb))));
var pnlis22 = -32 / 27 * Math.pow(gamma_s2, 2) * Math.pow(Leffs22, 2) * Math.pow(PchS2, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda4, 2) * Math.pow(bo, 2) * d4 * Math.sqrt(z1s2 + 12 * Math.pow(length, 2))) *
(4 * Math.exp(-a4eff * length)) / Math.pow(1 - Math.exp(-a4eff * length), 2) *
(Math.log(Math.PI * Math.pow(lambda4, 2) * d4 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchS2, 2 * bo / (bo + gb)) * Math.sqrt(z2s2 + 12 * Math.pow(length, 2))) - 5 / 3 * phi * Math.log(Math.pow(nchS2, bo / (bo + gb))));
var pnlis2 = pnlis21 + pnlis22;
var pases2 = h * fs2 * (nfs2 * gs2 - 1) * bo * (Math.pow(GsrsS2, 2) + GsrsS2 + 1) / Math.pow(GsrsS2, 3) * (ns / 3);

//C - band
var pnlic1 = 32 / 27 * Math.pow(gamma_c, 2) * Math.pow(Leffcc, 2) * Math.pow(PchC, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda5, 2) * Math.pow(bo, 2) * d5 * Math.sqrt(z1c)) *
(1 + (4 * Math.exp(-a5eff * length)) / Math.pow(1 - Math.exp(-a5eff * length), 2)) *
(Math.log(Math.PI * Math.pow(lambda5, 2) * d5 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchC, 2 * bo / (bo + gb)) * Math.sqrt(z2c)) - 5 / 3 * phi * Math.log(Math.pow(nchC, bo / (bo + gb))));
var pnlic2 = -32 / 27 * Math.pow(gamma_c, 2) * Math.pow(Leffcc, 2) * Math.pow(PchC, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda5, 2) * Math.pow(bo, 2) * d5 * Math.sqrt(z1c + 12 * Math.pow(length, 2))) *
(4 * Math.exp(-a5eff * length)) / Math.pow(1 - Math.exp(-a5eff * length), 2) *
(Math.log(Math.PI * Math.pow(lambda5, 2) * d5 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchC, 2 * bo / (bo + gb)) * Math.sqrt(z2c + 12 * Math.pow(length, 2))) - 5 / 3 * phi * Math.log(Math.pow(nchC, bo / (bo + gb))));
var pnlic = pnlic1 + pnlic2;
var pasec = h * fc * (nfc * gc - 1) * bo * (Math.pow(GsrsC, 2) + GsrsC + 1) / Math.pow(GsrsC, 3) * (ns / 3);

//L - band
var pnlil1 = 32 / 27 * Math.pow(gamma_l, 2) * Math.pow(Leffll, 2) * Math.pow(PchL, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda6, 2) * Math.pow(bo, 2) * d6 * Math.sqrt(z1l)) *
(1 + (4 * Math.exp(-a6eff * length)) / Math.pow(1 - Math.exp(-a6eff * length), 2)) *
(Math.log(Math.PI * Math.pow(lambda6, 2) * d6 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchL, 2 * bo / (bo + gb)) * Math.sqrt(z2l)) - 5 / 3 * phi * Math.log(Math.pow(nchL, bo / (bo + gb))));
var pnlil2 = -32 / 27 * Math.pow(gamma_l, 2) * Math.pow(Leffll, 2) * Math.pow(PchL, 3) * Math.pow(ns, 2) * c / (Math.pow(lambda6, 2) * Math.pow(bo, 2) * d6 * Math.sqrt(z1l + 12 * Math.pow(length, 2))) *
(4 * Math.exp(-a6eff * length)) / Math.pow(1 - Math.exp(-a6eff * length), 2) *
(Math.log(Math.PI * Math.pow(lambda6, 2) * d6 * Math.pow(bo, 2) / (4 * c) * Math.pow(nchL, 2 * bo / (bo + gb)) * Math.sqrt(z2l + 12 * Math.pow(length, 2))) - 5 / 3 * phi * Math.log(Math.pow(nchL, bo / (bo + gb))));
var pnlil = pnlil1 + pnlil2;
var pasel = h * fl * (nfl * gl - 1) * bo * (Math.pow(GsrsL, 2) + GsrsL + 1) / Math.pow(GsrsL, 3) * (ns / 3);

var osnirE = parseFloat(10*Math.log10(PchE / (pasee + pnlie))).toFixed(2);
var osnirS1 = parseFloat(10*Math.log10(PchS1 / (pases1 + pnlis1))).toFixed(2);
var osnirS2 = parseFloat(10*Math.log10(PchS2 / (pases2 + pnlis2))).toFixed(2);
var osnirC = parseFloat(10*Math.log10(PchC / (pasec + pnlic))).toFixed(2);
var osnirL = parseFloat(10*Math.log10(PchL / (pasel + pnlil))).toFixed(2);

document.getElementById('result1').value = osnirE;
document.getElementById('result2').value = osnirS1;
document.getElementById('result3').value = osnirS2;
document.getElementById('result4').value = osnirC;
document.getElementById('result5').value = osnirL;

}