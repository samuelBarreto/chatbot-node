var AssistantV1 = require('watson-developer-cloud/assistant/v1')

module.exports = function (app) {

 

    var assistant = new AssistantV1({

        username: '43e13771-6c4e-457d-a8a3-aa6fbd238d3e',

        password: '4BtT3Ih0A5hF',

        url: 'https://gateway.watsonplatform.net/assistant/api',

        version: '2018-02-16',

    });

 

    app.post('/conversation/', (req, res) => {

 

        const {

            text,

            context = {}

        } = req.body;

        const params = {

            input: {

                text

            },

            workspace_id: 'b7cf5de8-1731-492b-9ee5-62359acac8fa',

            context,

        };

        assistant.message(params, (err, response) => {

            if (err) res.status(500).json(err);

            res.json(response);

        });

    });

 

}