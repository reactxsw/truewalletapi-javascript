redeem("0614097733" , "https://gift.truemoney.com/campaign/?v=BgOnsnox4d85q1oBbj").then(value => {
    console.log(`RECEIVED ${value.AMOUNT} FROM ${value.SENDER}`);
  }).catch(error => {
    console.error(`${error}`)
})