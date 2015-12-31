var dateFormat = require('dateformat');

exports.homePage = function(req, res, next) {

    res.render('index', { title: 'Express' });
}

exports.timeStamp = function(req, res, next) {
   
   // variables that will be send to the user
   var unix, natural;
   
   // regex to check if only numbers were provided on the string
   var numbersOnly = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g;
   
   //function to check if string has a valid date
   function isStringValidDate(string) {
    var date =new Date(string);
        if(date && date.getFullYear() > 0) {
            
            return true;
        }
        else {
            return false;
            
        }
    }
    
   // check if the input was unix numbers
   // match for number only and length more than 10 to confirm unix time input
   if (req.params.date.match(numbersOnly) && req.params.date.length >= 10) {
       unix = req.params.date;
       natural = dateFormat(new Date(req.params.date * 1000), 'mmmm d, yyyy');
   // if is a string, make sure is not a number only string and if the date is valid
   } else if (!req.params.date.match(numbersOnly) && isStringValidDate(req.params.date)) {
       unix = Math.round(+new Date(req.params.date)/1000);
       natural = dateFormat(new Date(req.params.date), 'mmmm d, yyyy');
    // if the two checks before didnt pass, assign null to the variables       
   } else {
       unix = null;
       natural = null;
   }
       
   res.send({unix: unix, natural: natural });
   
};