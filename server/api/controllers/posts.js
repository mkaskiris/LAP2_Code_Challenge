const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.get('/:id', async (req,res) =>{
    try{
        const post = await Post.findByPath(parseInt(req.params.id));
        res.json(post);
    }catch(err){
        res.status(404).json({err});
    }
})

router.post('/', async (req,res) =>{
    try{
        const post = await Post.create(req.body.title, req.body.name, req.body.body);
        res.status(201).json(post);
    }catch (err){
        res.status(404).json({err});
    }
})