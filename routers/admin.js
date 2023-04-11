const router = require("express").Router();
const {
    index,
    login,
    deposits,
    withdrawals,
    manageusers,
    adminlogin,
    addProfit,
    addBalance,
    verifykyc,
    kyc,
    addDeposit,
} = require("../controllers/admin");

router.route("/index").get(index);
router.route("/login").get(login).post(adminlogin);
router.route("/clientdeposits").get(deposits);
router.route("/clientwithdrawals").get(withdrawals);
router.route("/manageusers").get(manageusers);
router.route("/addprofit").post(addProfit);
router.route("/addbalance").post(addBalance);
router.route("/verifykyc").post(verifykyc);
router.route("/kyc").get(kyc);
router.route("/adddeposit").post(addDeposit);

module.exports = router;