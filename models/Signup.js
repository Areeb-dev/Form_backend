const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    companyEmail: { type: String, required: true },
    clientAgency: { type: String, required: true },
    name: { type: String, required: true },
    uniqueIdentifier: { type: Number, required: true },
    govWinID: { type: String, required: true },
    compatibilityDomain: { type: String, required: true },
    opportunityOverView: { type: String, required: true },
    lead: { type: String, required: true },
    date: { type: String, required: true },
    submissionDate: { type: String, required: true },
});

const SignupUser = mongoose.model("SignupUser", userSchema);

module.exports = SignupUser;