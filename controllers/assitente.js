var AssistantV1 = require('watson-developer-cloud/assistant/v1')

module.exports = function (app) {

 

    var assistant = new AssistantV1({

        username: '-------',

        password: '-----------',

        url: 'https://gateway.watsonplatform.net/assistant/api',

        version: '',

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

            workspace_id: '--------',

            context,

        };

        assistant.message(params, (err, response) => {

            if (err) res.status(500).json(err);

            res.json(response);

        });

    });

 

}
