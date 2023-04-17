const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InvestmentSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    tier: {
      type: String,
      enum: ["Classic", "Premium", "Mega"],
    },
    duration: {
      type: String,
      default: "24 hrs",
    },
    amountInvested: {
      type: Number,
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

const Investment = mongoose.model("Investment", InvestmentSchema);

module.exports = Investment;
