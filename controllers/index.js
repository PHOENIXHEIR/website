/*
* controllers/index.js - Controller index
*/

const Contact = require ("../models/contact")

const index = {

    /* Home page view */
    homePage: (req, res) => {
        res.render('index', {
            title: 'Contact Me',
            subtitle: 'Please don\'t hesitate to get in touch'
        });
    },

    /* posting results of contact form with date */
    contactCard: async (req, res) => {
        try
        {
            const newContact = new Contact({
                fullname: req.body.fullname,
                email: req.body.email,
                message: req.body.message,
            });

            // Save contact to the database using Mongoose save() method with await
            await newContact.save();

            res.render("index", {
                title: "Contact form",
                subtitle: "Awesome - be in touch soon",
                alertMessage: "Data submitted successfully!", 
            });
        } catch (err)
        {
            console.error('Error saving contact data:', err);
            res.render("index", {
                title: "Contact form",
                subtitle: "An error occurred, please check the input",
            });
        }
    }

}

module.exports = index;