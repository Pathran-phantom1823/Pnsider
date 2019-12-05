const account = require("../models/accounts");

const retrieveAccounts = (req, res)=>{
    let test = async function() {
        let accounts= await account.retrieveAccount();
        console.log("account: ", accounts);
        res.status(200).send(accounts);
      };
      test();
    };
    
    module.exports = { retrieveAccounts };
