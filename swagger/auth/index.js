const login = require("./loginUser");
const singUp = require("./signUp");
const sendOtp = require("./sendOtp");
const VerifyPhone = require("./verifyNumber");
const VerifyEmail = require("./verifyEmail");
const verifyEmailInvitation = require("./verifyEmailInvitation");
const VerifyUser = require("./isVerifiedUser");
const resetPassword = require("./resetPassword");
const verifyForgetPassword = require("./verifyForgetPassword");

module.exports = {
  "/sign-up": {
    ...singUp,
  },
  "/login": {
    ...login,
  },
  "/send-otp": {
    ...sendOtp,
  },
  "/verify-phone": {
    ...VerifyPhone,
  },
  "/verify-email": {
    ...VerifyEmail,
  },
  "/verify-invitation": {
    ...verifyEmailInvitation,
  },
  "/verify-user": {
    ...VerifyUser,
  },

  "/verify-forget-password": {
    ...verifyForgetPassword,
  },
  "/reset-password": {
    ...resetPassword,
  },
};
