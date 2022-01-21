// Script made by Anapah Pongvijarn
// Updated 21 Feb 2022
// Freeuse and modify right

/* 
Redeem a truewallet voucher to a phone number 
check for valid phone number and valid url
raise error for invalid input
*/
async function Redeem(phone , url) {
    if ((phone.trim().length == 10) && phone.trim()[0] == "0") {
        PHONE_NUMBER = phone
    } else {
        throw Error("Invalid Phone number")
    }
    
    if (url.includes("https://gift.truemoney.com/campaign/?v=") && url.split("https://gift.truemoney.com/campaign/?v=")[1].length == 18){
        VOUCHER_CODE = url.split("https://gift.truemoney.com/campaign/?v=")[1];
    } else {
        throw Error("Invalid voucher")
    }
    let request = await require("petitio")(`https://gift.truemoney.com/campaign/vouchers/${VOUCHER_CODE}/redeem`,"POST").body({"mobile":PHONE_NUMBER,"voucher_hash":VOUCHER_CODE}).json()
    console.log(request.status.code)
    if (request.status.code == "SUCCESS") {
        return {
            "AMOUNT":request.voucher.redeemed_amount_baht,
            "SENDER":request.owner_profile.full_name
            };
        }
    throw Error(request.status.code)
}
/*
Phone number ex. 061XXXXXXX 
Voucher link ex. https://gift.truemoney.com/campaign/?v=XXXXXXXXXXXXXXXXXX
(V= {18 char})
*/ 
response = Redeem("061XXX" , "https://gift.truemoney.com/campaign/?v=BgOnsnox4d85q1oBbj").then(value => {
    console.log(value.AMOUNT);
    console.log(value.SENDER);
  }).catch(error => {
    console.error(error)
})
