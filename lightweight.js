module.exports=(async(e,r)=>{let t='https://gift.truemoney.com/campaign/';if(10!=e.trim().length||0!=e.trim()[0])throw Error('Invalid Phone number');if(p=e,!r.includes(`${t}?v=`)||18!=r.split(`${t}?v=`)[1].length)throw Error("Invalid voucher");v=r.split("https://gift.truemoney.com/campaign/?v=")[1];let o=await require("petitio")(`${t}vouchers/${v}/redeem`,"POST").body({mobile:p,voucher_hash:v}).json();if("SUCCESS"==o.status.code)return{o};throw Error(o.status.code)});
