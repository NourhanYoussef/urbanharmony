const localConfig = require('../config/local.json')
const fetch = require("node-fetch");
const jsonata = require("jsonata");
const url = localConfig.CMS_URL || process.env.CMS_URL;
class LawsService {


    getAllLaws(callback) {
        fetch(url + 'conditionsandlaws?type=Laws')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                let expression = jsonata('$.{"id":_id,"title":Title,"detail":Descrption, "PDF":pdf.url}');
                let lawObject = expression.evaluate(myJson);
                callback(lawObject);
            });
    }



    getAllBorders(callback) {
        fetch(url + 'conditionsandlaws?type=Borders')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                let expression = jsonata('$.{"id":_id,"title":Title,"detail":Descrption, "PDF":pdf.url}');
                let borderObject = expression.evaluate(myJson);
                callback(borderObject);
            });
    }
}

module.exports = function (app, serviceManager) {
    var lawservice = new LawsService();
    serviceManager.set("laws-services", lawservice);
};