
let usersModel = require('../models/users.model')


//return one users
exports.oneUser = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}


//create one contact - used in users signUp
exports.createUser = function (req, res) {

    //TODO check for already added number in DB

    var newUser = new usersModel();

    newUser.name.firstName = req.body.firstName;
    newUser.name.lastName = req.body.lastName;
    newUser.number = parseInt(req.body.number);
    newUser.save(function(err, inserted_user){
        if(err){
            res.send({ret: false});
            console.log("err in adding new user: " + err);  
        } 
        else{
            res.send({ret: true});
        }
    });
}


// return all contacts info
exports.allContacts = function (req, res) {

    //find the specific user's contacts in DB
    usersModel.findOne({'_id':req.query.id},'links', function(err, userLinks){
        if (err){
            console.log("err in finding all contacts for user: " + id + err);
            res.send({ret: false});
        } 
        else{
            //map Id's to their names
            usersModel.find({'_id':{$in: userLinks.links}},'_id name', function(err, contacts){
                if (err){
                    console.log("err in finding all contacts for user: " + id + err);
                    res.send({ret: false});
                } 
                else res.send(contacts);
            });
        } 
    });  

}

//add new contact to User's contacts (Links)
exports.addContact = function (req, res) {
    console.log(req.body.number);
    console.log(req.body.adderId);
    
    //find new contact DB_id by it number
    usersModel.findOne({'number': parseInt(req.body.number)}).lean().exec(function (err, newContactDoc) {
        if (err){
            console.log("err in finding all contacts for user: " + id + err);
            res.send({ret: false});
        } 
        else if(newContactDoc == null){
            res.send({ret: false});
        } 
        else{
            
            //add the found Id to requester user Links and contacts
            usersModel.findById(req.body.adderId, function(err, userDoc){
                if (err){
                    console.log("err in finding adder user's ID " + id + err);
                    res.send({ret: false});
                } 
                userDoc.links.push(newContactDoc._id.toString());     
                userDoc.save(function(err){           
                    if (err){
                        console.log("err in changing user's data: " + id + err);
                        res.send({ret: false});
                    }
                    else{
                        res.send({ret: true});
                    } 
                });
            });
        } 
    });  
}

//delete one contact
exports.deleteContact = function (req, res) {
    usersModel.findOne({'_id':req.body.id},'links', function(err, userDoc){
        if (err){
            console.log("err in finding all contacts for user: " + id + err);
            res.send({ret: false});
        } 
        else{
            var TempList= [];
            for(var i=0; i < userDoc.links.length; i++){
                
                 if(userDoc.links[i] != req.body.deletingContactId){
                    TempList.push(userDoc.links[i]);
                 }
                 
            }
            if (TempList.length == userDoc.links.length)
                res.send({ret: fasle});                
            else {
                userDoc.links = TempList;
                userDoc.save(function(err){           
                    if (err){
                        console.log("err in changing user's data: " + id + err);
                        res.send({ret: false});
                    }
                    else{
                        res.send({ret: true});
                    } 
                });
            }
        } 
    });  
}