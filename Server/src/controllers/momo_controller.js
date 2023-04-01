const {getOption} = require("./handleMoMo")
const https = require('https');
class payMentController {
    getMomo(req, response) {
        try {
            // let userId = req.params.id;
            let momoOption = getOption("177013");
            const request = https.request(momoOption.options, res => {
                let data = '';
                res.setEncoding('utf8');
                res.on('data', (body) => {
                    data = (JSON.parse(body).payUrl);
                    response.redirect(data);
                });
                res.on('end', () => {
                    console.log('No more data in response.');
                });
            })
            request.on('error', (e) => {
                console.log(`problem with request: ${e.message}`);
            });
            console.log("Sending....")
            request.write(momoOption.requestBody);
            request.end();
        }
        catch (ex) {
            console.log(ex.message);
        }
    }
    async momo_callBack(req,res){
        console.log("về r nè :))");
        res.redirect('http://127.0.0.1:5173/');
    }
}


module.exports = new payMentController();