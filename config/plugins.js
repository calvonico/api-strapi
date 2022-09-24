module.exports = ({ env }) => ({
    // ...
    // email: {
    //     config: {
    //       provider: 'sendgrid',
    //       providerOptions: {
    //         apiKey: env('SENDGRID_API_KEY'),
    //       },
    //       settings: {
    //         defaultFrom: 'myemail@protonmail.com',
    //         defaultReplyTo: 'myemail@protonmail.com',
    //       },
    //     },
    //   },
    // ...
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('dljc6cim6'),
            api_key: env('327962174141493'),
            api_secret: env('QeoyDTVbnMHInFUZMxLJne_Q-14'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
  });