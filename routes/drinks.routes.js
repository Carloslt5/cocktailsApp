const express = require('express');
const router = express.Router();

const cocktailApiHandler = require('../services/cocktail-api.service');


//Alcohol render
router.get("/alcohol", (req, res, next) => {

    cocktailApiHandler
        .getAlcoholic()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});


//Non Alcohol render
router.get("/non-alcohol", (req, res, next) => {

    cocktailApiHandler
        .getNonAlcoholic()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Rum render
router.get("/rum", (req, res, next) => {

    cocktailApiHandler
        .getRum()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Vodka render
router.get("/vodka", (req, res, next) => {

    cocktailApiHandler
        .getVodka()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Gin render
router.get("/gin", (req, res, next) => {

    cocktailApiHandler
        .getGin()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Tequila render
router.get("/tequila", (req, res, next) => {

    cocktailApiHandler
        .getTequila()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Alcohol render cocktail detail
router.get("/cocktail-details/:id", (req, res, next) => {

    const { id } = req.params

    cocktailApiHandler
        .getById(id)
        .then(({ data }) => res.render('filterApi/cocktails-details', data))
        .catch(err => next(err))
});



module.exports = router