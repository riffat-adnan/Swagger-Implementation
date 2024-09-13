module.exports = {
  components: {
    schemas: {
      signup: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            example: "firstname",
          },
          lastName: {
            type: "string",
            example: "lastname",
          },
          phoneNumber: {
            type: "string",
            example: "123456",
          },
          email: {
            type: "string",
            example: "exampl@email.com",
          },
          password: {
            type: "string",
            example: "123456",
          },
          confirmPassword: {
            type: "string",
            example: "123456",
          },
          role: {
            type: "string",
            example: "admin",
          },
        },
      },

      // login model
      login: {
        type: "object", // data type
        properties: {
          email: {
            type: "string", // data-type
            example: "example@email.com", // example
          },
          password: {
            type: "string",
            example: "123456",
          },
        },
      },

      resetPassword: {
        type: "object",
        properties: {
          password: {
            type: "string",
            example: "123456",
          },
        },
      },

      //OTP Verify
      otp: {
        type: "object",
        properties: {
          email: {
            type: "string",
            example: "example@email.com",
          },
          phoneNumber: {
            type: "string",
            example: "12345",
          },
          type: {
            type: "string",
            example: "gmail || number",
          },
        },
      },

      //OTP Verify
      verifyOtp: {
        type: "object",
        properties: {
          otp: {
            type: "string",
            example: "123456",
          },
          email: {
            type: "string",
            example: "example@email.com",
          },
          phoneNumber: {
            type: "string",
            example: "12345",
          },
          type: {
            type: "string",
            example: "gmail || number",
          },
        },
      },

      verifyNumber: {
        type: "object",
        properties: {
          otp: {
            type: "string",
            example: "123456",
          },
          phoneNumber: {
            type: "string",
            example: "12345",
          },
          type: {
            type: "string",
            example: "number",
          },
        },
      },

      verifyEmail: {
        type: "object",
        properties: {
          otp: {
            type: "string",
            example: "123456",
          },
          email: {
            type: "string",
            example: "example@email.com",
          },
          type: {
            type: "string",
            example: "email",
          },
        },
      },

      // Upload Image Schema
      uploadImage: {
        type: "object", // data type
        properties: {
          image: {
            type: "string",
            format: "binary",
          },
        },
      },
    },

    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  }
};
