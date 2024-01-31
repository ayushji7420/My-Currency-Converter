const countries = {
    "USD":1,
  "AED":3.6725,
  "AFN":73.1068,
  "ALL":96.5581,
  "AMD":403.5276,
  "ANG":1.7900,
  "AOA":837.6896,
  "ARS":823.5500,
  "AUD":1.5201,
  "AWG":1.7900,
  "AZN":1.7087,
  "BAM":1.8025,
  "BBD":2.0000,
  "BDT":109.5650,
  "BGN":1.8025,
  "BHD":0.3760,
  "BIF":2846.6187,
  "BMD":1.0000,
  "BND":1.3419,
  "BOB":6.8321,
  "BRL":4.9162,
  "BSD":1.0000,
  "BTN":83.1816,
  "BWP":13.6273,
  "BYN":3.2072,
  "BZD":2.0000,
  "CAD":1.3449,
  "CDF":2662.5229,
  "CHF":0.8642,
  "CLP":911.7081,
  "CNY":7.1886,
  "COP":3981.8852,
  "CRC":515.7866,
  "CUP":24.0000,
  "CVE":101.6211,
  "CZK":22.8229,
  "DJF":177.7210,
  "DKK":6.8754,
  "DOP":57.2729,
  "DZD":133.9335,
  "EGP":30.9221,
  "ERN":15.0000,
  "ETB":56.6015,
  "EUR":0.9217,
  "FJD":2.2325,
  "FKP":0.7872,
  "FOK":6.8742,
  "GBP":0.7873,
  "GEL":2.6690,
  "GGP":0.7872,
  "GHS":12.3522,
  "GIP":0.7872,
  "GMD":66.9106,
  "GNF":8555.0133,
  "GTQ":7.7279,
  "GYD":209.3666,
  "HKD":7.8144,
  "HNL":24.3783,
  "HRK":6.9439,
  "HTG":131.7413,
  "HUF":356.8179,
  "IDR":15794.3377,
  "ILS":3.6927,
  "IMP":0.7872,
  "INR":83.1649,
  "IQD":1308.8672,
  "IRR":42006.1101,
  "ISK":136.4841,
  "JEP":0.7872,
  "JMD":155.5285,
  "JOD":0.7090,
  "JPY":148.0252,
  "KES":162.5429,
  "KGS":89.2963,
  "KHR":4099.0173,
  "KID":1.5203,
  "KMF":453.4015,
  "KRW":1335.7376,
  "KWD":0.3074,
  "KYD":0.8333,
  "KZT":450.2740,
  "LAK":20346.4867,
  "LBP":15000.0000,
  "LKR":317.4909,
  "LRD":188.8961,
  "LSL":18.7931,
  "LYD":4.8163,
  "MAD":9.9730,
  "MDL":17.7089,
  "MGA":4526.6202,
  "MKD":56.7307,
  "MMK":2077.3970,
  "MNT":3427.5484,
  "MOP":8.0490,
  "MRU":39.5875,
  "MUR":44.8681,
  "MVR":15.4269,
  "MWK":1683.6249,
  "MXN":17.1677,
  "MYR":4.7277,
  "MZN":63.8594,
  "NAD":18.7931,
  "NGN":897.1376,
  "NIO":36.3495,
  "NOK":10.4296,
  "NPR":133.0905,
  "NZD":1.6405,
  "OMR":0.3845,
  "PAB":1.0000,
  "PEN":3.7923,
  "PGK":3.7075,
  "PHP":56.3456,
  "PKR":279.7754,
  "PLN":4.0289,
  "PYG":7277.0455,
  "QAR":3.6400,
  "RON":4.5811,
  "RSD":107.9204,
  "RUB":89.8742,
  "RWF":1280.2396,
  "SAR":3.7500,
  "SBD":8.5005,
  "SCR":14.2577,
  "SDG":458.7868,
  "SEK":10.4560,
  "SGD":1.3422,
  "SHP":0.7872,
  "SLE":22.4799,
  "SLL":22479.9107,
  "SOS":571.6542,
  "SRD":36.9106,
  "SSP":1103.8207,
  "STN":22.5794,
  "SYP":12743.8421,
  "SZL":18.7931,
  "THB":35.6048,
  "TJS":10.9248,
  "TMT":3.4995,
  "TND":3.1052,
  "TOP":2.3322,
  "TRY":30.3456,
  "TTD":6.6358,
  "TVD":1.5203,
  "TWD":31.2055,
  "TZS":2541.3059,
  "UAH":37.7895,
  "UGX":3800.2997,
  "UYU":38.9075,
  "UZS":12320.3637,
  "VES":36.2020,
  "VND":24503.4828,
  "VUV":119.7050,
  "WST":2.7189,
  "XAF":604.5354,
  "XCD":2.7000,
  "XDR":0.7526,
  "XOF":604.5354,
  "XPF":109.9774,
  "YER":247.1610,
  "ZAR":18.7918,
  "ZMW":26.9984,
  "ZWL":9686.6114
}


const fromcurrencycode=document.querySelector("#fromcurrencycode")
const tocurrencycode=document.querySelector("#tocurrencycode")
const initialamount=document.querySelector("#givenamount")
const finalamount=document.querySelector("#gotamount")


const codes=Object.keys(countries);
for(elements of codes){
    const option1=document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = elements;
    option1.textContent = option2.textContent = elements;
    
    fromcurrencycode.appendChild(option1);
    tocurrencycode.appendChild(option2);

    fromcurrencycode.value="USD";
    tocurrencycode.value="INR";
}
const currencycodes=async()=>{
    const data = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_xTysMB5nCvPmXSPPlyVw6aAFvIMFstqQm5AKclzv&base_currency=${fromcurrency}`)
    const fdata= await data.json();
    const conversioncode=fdata.data;
    for(elements of conversioncode){
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');

        option1.value=option2.value=`${elements}`;
        option1.textContent=option2.textContent=elements;

        fromcurrencycode.appendChild(option1);
        tocurrencycode.appendChild(option2);

        fromcurrencycode.value="USD";
        tocurrencycode.value="INR";
        console.log(conversioncode)
        
    }
    console.log(length)
    console.log(conversioncode[length-1])
}
currencycodes();


const fetchdata= async()=>{
   
    const amount= parseFloat(initialamount.value);
    const fromcurrency= fromcurrencycode.value;
    const tocurrency= tocurrencycode.value;

    const data = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_xTysMB5nCvPmXSPPlyVw6aAFvIMFstqQm5AKclzv&base_currency=${fromcurrency}`)
    const fdata= await data.json();
    const conversionrate=fdata.data[tocurrency].value;
    const convertedamount=(amount * conversionrate);
    finalamount.value = convertedamount;
}
initialamount.addEventListener('input',fetchdata);