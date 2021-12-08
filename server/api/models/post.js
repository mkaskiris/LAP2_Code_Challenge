const db = require('../dbConfig')

class Post{
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.body = data.body;
        this.path = data.path;
    }

    static findByPath(path){
        return new Promise(async (res,rej) =>{
            try{
                let postData = await db.query(`SELECT * 
                                                FROM posts
                                                WHERE path = $1;`, [path])
                let post = new Post(postData.rows[0])
                res(post);
            }catch (err){
                rej('Entry not found')
            }
        })
    }

    static create(title, name, body){
        return new Promise (async (res,rej))
    }
}

module.exports = Post