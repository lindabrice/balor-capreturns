const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const passport = require("passport");
const Deposit = require("../models/Deposit");
const Withdrawal = require("../models/Withdrawal");

// @desc Renders admin login page
// @access public
exports.login = asyncHandler(async(req, res, next) => {
    res.render("admin/login");
});
// @desc Renders admin dashboard page
// @access public
exports.index = asyncHandler(async(req, res, next) => {
    const users = await User.find({  });
    res.render("admin/index", { users });
});
// @desc Renders admin client deposits page
// @access public
exports.deposits = asyncHandler(async(req, res, next) => {
    const users = await User.find({});
    const deposits = await Deposit.find({});
    res.render("admin/clientdeposits", { users, deposits });
});
// @desc Renders admin client withdrawals page
// @access public
exports.withdrawals = asyncHandler(async(req, res, next) => {
    const users = await User.find({});
    const withdrawals = await Withdrawal.find({});
    res.render("admin/clientwithdrawals", { users, withdrawals });
});
// @desc Renders admin client withdrawals page
// @access public
exports.manageusers = asyncHandler(async(req, res, next) => {
    res.render("admin/manageusers", { users: [] });
});
exports.kyc = asyncHandler(async(req, res, next) => {
    res.render("admin/confirm KYC", { users: await User.find({ isVerified: false, hasUploaded: true }) });
});
// @desc Logs an admin in
// @access public
exports.adminlogin = asyncHandler(async(req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/balorxxclusivex/index",
        failureRedirect: "/balorxxclusivex/login",
        failureFlash: false,
    })(req, res, next);
});
// @desc Logs an admin in
// @access public
exports.addProfit = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.body.userId);
    user.profit = user.profit + parseInt(req.body.profitAmount);
    await user.save();
    res.send({ success: true });
});
exports.addBalance = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.body.userId);
    user.balance = user.balance + parseInt(req.body.balanceAmount);
    await user.save();
    res.send({ success: true });
});
exports.verifykyc = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.body.userId);
    user.isVerified = true;
    await user.save();
    res.send({ success: true });
});
exports.addDeposit = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.body.userId);
    user.deposits = user.deposits + parseInt(req.body.depositAmount);
    await user.save();
    res.send({ success: true });
});
exports.approveDeposit = asyncHandler(async(req, res, next) => {
    const deposit = await Deposit.findById(req.body.userId);
    deposit.status = "Confirmed";
    await deposit.save();
    res.send({ success: true });
});
exports.approveWithdrawal = asyncHandler(async(req, res, next) => {
    const withdrawal = await Withdrawal.findById(req.body.userId);
    withdrawal.status = "Confirmed";
    await withdrawal.save();
    res.send({ success: true });
});