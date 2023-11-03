const db = require('../models')
const fs = require('fs');
const pdf = require('html-pdf');
const json2html = require('json2html');

const User = db.users;

const getAllUsers = async (req, res) => {

    let users = await User.findAll({})
    const data = {
        users:users
    }
    res.status(200).send(users)
    console.log("data is:",data);
   
    let info=[]

    users.forEach((element,array) => {
        // users[index]=["name","email","address","age"]
        info.push([element.name,element.email,element.address,element.age])
    });

    
    
    let htmlData = json2html.render(info);

    let options = { format: 'Letter' };  // Configure page format, sizes, etc.

    pdf.create(htmlData, options).toFile('./test.pdf', function (err, res) {
        if (err) return console.log(err);
    });


}


module.exports = {
    getAllUsers
}
