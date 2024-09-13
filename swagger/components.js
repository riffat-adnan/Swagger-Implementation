module.exports = {
  components: {
    schemas: {
      // Mielstone-1 Schemas
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

      // Milestone-2 Schemas

      tournament: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "Test Tournament",
          },
          date: {
            type: "date",
            example: "03/05/2024",
          },
          startTime: {
            type: "time",
            example: "03:00",
          },
          location: {
            type: "string",
            example: "xyz location",
          },
          style: {
            type: "string",
            example: "123456",
          },
          tournamentType: {
            type: "string",
            example: "Individual | Team",
          },
          registrationType: {
            type: "string",
            example: "Team login",
          },
          tournamentDirectors: {
            type: "object",
            properties: {
              name: {
                type: "string",
                example: "John",
              },
              email: {
                type: "string",
                example: "John@email.com",
              },
              phoneNumber: {
                type: "string",
                example: "03441122334",
              },
            },
          },
          tournamentAdministrator: {
            type: "object",
            properties: {
              name: {
                type: "string",
                example: "John",
              },
              email: {
                type: "string",
                example: "John@email.com",
              },
              phoneNumber: {
                type: "string",
                example: "03441122334",
              },
            },
          },
          tournamentCategory: {
            type: "object",
            properties: {
              eventCategory: {
                type: "string",
                example: "John",
              },
              governingBodyId: {
                type: "string",
                example: "",
              },
              eventLevel: {
                type: "string",
                example: "",
              },
              agreeTo: {
                type: "string",
                example: "",
              },
            },
          },
        },
      },

        team:{
            type: "object",
            properties: {
              governingBodyId: {
                type: "string",
                example: "123456789",
              },
              governingSubBodyId: {
                type: "string",
                example: "123456789",
              },
              teamName: {
                type: "string",
                example: "Lahore-Lions",
              },
              teamAbbreviation: {
                type: "string",
                example: "L-L",
              },
              city: {
                type: "string",
                example: "Indiana",
              },
              stateId: {
                type: "string",
                example: "123456789",
              },
          },
      },

        group:{
          type: "object",
          properties: {
            tournamentId: {
              type: "string",
              example: "123456789",
            },
            name: {
              type: "string",
              example: "Lahore-Lions",
            },
            weightClassType: {
              type: "string",
              example: "Madison Block",
            },
        },
      },

        division:{
          type: "object",
          properties: {
            teamIds:{
              type: "array",
              example: ["5d787090-fb41-4dcc-bcd5-f6a601830a63","5d787090-fb41-4dcc-bcd5-f6a601830a64","5d787090-fb41-4dcc-bcd5-f6a601830a65"],
            },
            name: {
              type: "string",
              example: "D1",
            },
        
        },
      },

      tournamentBracket:{
        type: "object",
        properties: {
          bracketPresetIds:{
            type: "array",
            example: ["5d787090-fb41-4dcc-bcd5-f6a601830a63","5d787090-fb41-4dcc-bcd5-f6a601830a64","5d787090-fb41-4dcc-bcd5-f6a601830a65"],
          },
          tournamentId: {
            type: "strin",
            example: "5d787090-fb41-4dcc-bcd5-f6a601830a63",
          },
      
      },
    },

    bracketPresets:{
      type: "object",
      properties: {
        bracketPresetsData:{
          type: "array",
          example: [
             {
              "name": "2-Man, Front Side Bracket",
              "size": 2,
              "format": "Front Side",
              "placement": 2,
              "description": "2-Man front side bracket. Single elimination",
             },
             {
              "name": "2-Man, Best of 3",
              "size": 2,
              "format": "Round Robin",
              "placement": 2,
              "description": "2-Man round robin. Best of three matches",
             },
             {
              "name": "3-Man, Round Robin",
              "size": 3,
              "format": "Round Robin",
              "placement": 3,
              "description": "3-Man round robin. Wrestle everyone in the bracket",
             },
             {
              "name": "4-Man, Consolation, WB 2nd",
              "size": 4,
              "format": "Consolation",
              "placement": 4,
              "description": "4-Man consolation bracket. Wrestle back to 2nd place",
             },
             {
              "name": "4-Man, Consolation, WB 3rd",
              "size": 4,
              "format": "Consolation",
              "placement": 4,
              "description": "4-Man consolation bracket. Wrestle back to 3rd place",
             },
          ],
        },
       
    
    },
    },

      weightClass:{
        type: "object",
        properties: {
          groupId: {
            type: "string",
            example: "123456789",
          },
          name: {
            type: "string",
            example: "G",
          },
          maxWeight: {
            type: "integer",
            example: 80,
          },
          weightUnit: {
            type: "string",
            example: "LBS | KG",
          },
      },
  },

        statistician:{
          type: "object",
          properties: {
            teamId: {
              type: "string",
              example: "123456789",
            },
            firstName: {
              type: "string",
              example: "John",
            },
            lastName: {
              type: "string",
              example: "wick",
            },
            email: {
              type: "string",
              example: "john@gmail.com",
            },
        },
      },

      mat:{
        type: "object",
        properties: {
          tournamentId: {
            type: "string",
            example: "123456789",
          },
          name: {
            type: "string",
            example: "M1",
          },
      },
  },

  state:{
    type: "object",
    properties: {
      name: {
        type: "string",
        example: "Arizona",
      },
  },
},
// Athlete
athlete:{
  type: "object",
  properties: {
    pinTvId: {
      type: "integer",
      example: 12345,
    },
    firstName: {
      type: "string",
      example: "John",
    },
    lastName: {
      type: "string",
      example: "Doe",
    },
    grade: {
      type: "string",
      example: "F",
    },
    gender: {
      type: "string",
      example: "male",
    },
    dateOfBirth: {
      type: "string",
      example: "03/05/2024",
    },
    email: {
      type: "string",
      example: "johndoe1@gmail.com",
    },
    phoneNumber: {
      type: "string",
      example: "+1000000000",
    },
    homeTown: {
      type: "string",
      example: "LA",
    },
    wins: {
      type: "integer",
      example: 5,
    },
    losses: {
      type: "integer",
      example: 3,
    },
    skinFoldTest: {
      type: "string",
      example: "NONE",
    },
    biaElectronicTest: {
      type: "string",
      example: "NONE",
    },
    hydroStaticTest: {
      type: "string",
      example: "NONE",
    },
    teamId: {
      type: "integer",
      example: "71e32835-beb1-4317-be7f-63ce141b30d8",
    },
    weightClassId: {
      type: "integer",
      example: "6ad5c4b8-3579-4df7-957c-430b8a819e53",
    },
    stateId: {
      type: "integer",
      example: "6ad5c4b8-3579-4df7-957c-430b8a819e53",
    }
},
},

skinFoldCalculation:{
  type: "object",
  properties: {
    athleteId: {
      type: "string",
      example: "6ad5c4b8-3579-4df7-957c-430b8a819e53",
    },
    date: {
      type: "string",
      example: "2024-07-18T16:36:23.712Z",
    },
    weight: {
      type: "number",
      example: 50,
    },
    tricep1: {
      type: "number",
      example: 10,
    },
    tricep2: {
      type: "number",
      example: 15,
    },
    tricep3: {
      type: "number",
      example: 10,
    },
    scapula1: {
      type: "number",
      example: 5,
    },
    scapula2: {
      type: "number",
      example: 7,
    },
    scapula3: {
      type: "number",
      example: 3,
    },
    abdominal1: {
      type: "number",
      example: 5,
    },
    abdominal2: {
      type: "number",
      example: 3,
    },
    abdominal3: {
      type: "number",
      example: 4,
    }
},
},

athleteCompliances:{
  type: "object",
  properties: {
    athleteId: {
      type: "string",
      example: "075b182c-d9c6-4270-9002-0359061942bf",
    },
    gender: {
      type: "string",
      example: "male",
    },
    miniWeightClass: {
      type: "number",
      example: "74.5",
    },
    eligible: {
      type: "boolean",
      example: true,
    },
    hydrationTest: {
      type: "string",
      example: "NONE",
    },
    notes: {
      type: "string",
      example: "Note",
    },
},
},

governingBody:{
  type: "object",
  properties: {
    governingBodyName: {
      type: "string",
      example: "TEST",
    },
    userId: {
      type: "UUID",
      example: "6ad5c4b8-3579-4df7-957c-430b8a819e53",
    },
    stateId: {
      type: "UUID",
      example: "6ad5c4b8-3579-4df7-957c-430b8a819e53",
    },
    message: {
      type: "string",
      example: "message",
    },
},
},

    taiBreaker:{
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "Head to Head",
        },
    },
  },

  tournamentTaiBreaker:{
    type: "object",
    properties: {
      tournamentId: {
        type: "string",
        example: "123456789",
      },
      tieBreakerId: {
        type: "string",
        example: "123456789",
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
