module.exports=(async(r,e)=>{let t="https://gift.truemoney.com/campaign/";if(10!=r.trim().length||0!=r.trim()[0])throw Error("Invalid Phone number");if(p=r,!e.includes(`${t}?v=`)||18!=e.split(`${t}?v=`)[1].length)throw Error("Invalid voucher");v=e.split("v=")[1];let o=await require("petitio")(`${t}vouchers/${v}/redeem`,"POST").body({mobile:p,voucher_hash:v}).json();if("SUCCESS"==o.status.code)return{o:o};throw Error(o.status.code)});
