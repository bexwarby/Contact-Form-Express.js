/*
* controllers/index.js - Controller index
*/

const Contact = require("../models/contact")

const index = {

    /* Home page view */
    homePage: (req, res) => {
        res.render('index', {
            title: 'DW Photography',
            subtitle: 'Please don\'t hesitate to get in touch'
        });
    },

    /* posting results of contact form with date */
    contactCard: (req, res) => {

        const newContact = new Contact({
            firstName: req.body.firstName,
            surname: req.body.surname,
            email: req.body.email,
            msg: req.body.msg,
        });

        newContact.save((err) => {
            if (err) {
                console.log(err);
                res.render("index", {
                    title: "Contact form",
                    subtitle: "An error occured, please check the input"
                });
                return
            }
            res.render("index", {
                title: "Contact form",
                subtitle: "Awesome - be in touch soooon"
            });
            
        });
    }
}

module.exports = index;