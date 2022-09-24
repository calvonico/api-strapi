module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'mailgun',
        providerOptions: {
          key: env('MAILGUN_API_KEY'), // Required
          domain: env('MAILGUN_DOMAIN'), // Required
          url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
        },
        settings: {
          defaultFrom: 'myemail@protonmail.com',
          defaultReplyTo: 'myemail@protonmail.com',
        },
      },
    },
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