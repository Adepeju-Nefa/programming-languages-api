const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

router.get('/', async function(request, response, next){
    try{
        response.json(await programmingLanguages.getMultiple(request.query.page));
    } catch(err){
        console.error('Error while getting programming Languages ', err.message);
        next(err)
    }
});

router.post('/', async function(request, response, next){
    try{
        response.json(await programmingLanguages.create(request.body));
    } catch(err){
        console.error('Error while adding programmng languages', err.message);
        next(err);
    }
})

router.put('/:id', async function(request,response, next){
    try{
        response.json(await programmingLanguages.update(request.params.id, request.body));
    } catch(err){
        console.error('Error while updating programming language', err.message);
        next(err)
    }
})

router.delete('/:id', async function(request, response, next){
    try{
        response.json(await programmingLanguages.remove(request.params.id));
    } catch(err){
        console.error('Error while deleting programming language', err.message);
        next(err)
    }
})


module.exports = router;