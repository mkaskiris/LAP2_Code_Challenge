const db = require('../dbConfig/init');

class Post{
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.body = data.body;
        //this.path = data.path;
    }

    static get all(){
        return new Promise( async (res,rej) =>{
            try{
                const postData = await db.query(`SELECT * FROM posts;`);
                const posts = postData.rows.map(d=>new Post(d));
                res(posts);
            }catch(err){
                rej('error retrieving posts')
            }
        })
    }
    static findByPath(path){
        return new Promise(async (res,rej) =>{
            try{
                let postData = await db.query(`SELECT * 
                                                FROM posts
                                                WHERE id = $1;`, [path])
                let post = new Post(postData.rows[0])
                res(post);
            }catch (err){
                rej('Entry not found')
            }
        })
    }

    static create(title, name, body){
        return new Promise (async (res,rej) =>{
            try{
                let postData = await db.query(`INSERT INTO posts (title, name, body, path)
                                                VALUES ($1,$2,$3)
                                                RETURNING *;`[title, name, body]);
                let post = new Post(postData.rows[0])
                res(post);                   
            }catch (err){
                rej('counldnt create')
            }
        })
    }
}

module.exports = Post