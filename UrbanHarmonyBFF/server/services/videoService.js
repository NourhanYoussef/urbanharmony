const localConfig = require('../config/local.json')
const fetch = require("node-fetch");
const jsonata = require("jsonata");
const url = localConfig.CMS_URL || process.env.CMS_URL;

class VideosService {

    getAllVideos(callback) {
        fetch(url + 'videos')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                let expression = jsonata('$.{"id":_id,"channel":Channel,"title":ProgramName,"guests":GuestNames,"date":date,"description":Description,"url":URL,"moreDetails":MoreDetails}');
                let videosObject = expression.evaluate(myJson);
                callback(videosObject);
            });
    }
}

module.exports = function (app, serviceManager) {
    var videoservice = new VideosService();
    serviceManager.set("videos-services", videoservice);
};