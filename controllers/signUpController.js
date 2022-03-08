const SignupUser = require("../models/Signup");
module.exports = {
  createUser: async (req, res) => {
    try {
      const {
        lead,
        submissionDate,
        date,
        companyEmail,
        clientAgency,
        opportunityOverView,
        name,
        uniqueIdentifier,
        govWinID,
        compatibilityDomain,
      } = req.body;
      if (
        !companyEmail ||
        !clientAgency ||
        !name ||
        !uniqueIdentifier ||
        !govWinID ||
        !compatibilityDomain ||
        !opportunityOverView ||
        !lead ||
        !date ||
        !submissionDate
      ) {
        return res.status(400).send({
          statusCode: 400,
          success: false,
          message: "Please Fill All Required fields",
        });
      }
      const addUser = new SignupUser({
        companyEmail: companyEmail,
        clientAgency: clientAgency,
        name: name,
        uniqueIdentifier: uniqueIdentifier,
        govWinID: govWinID,
        compatibilityDomain: compatibilityDomain,
        opportunityOverView: opportunityOverView,
        lead: lead,
        date: date,
        submissionDate: submissionDate,
      });
      await addUser.save();

      return res.status(201).send({
        statusCode: 201,
        success: true,
        message: "User Created",
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "node Server Error",
      });
    }
  },
  getUser: async (req, res) => {
    const getAllUser = await SignupUser.find({});
    try {
      return res.status(200).send({
        statusCode: 200,
        success: true,
        data: getAllUser,
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
};
