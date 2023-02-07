const {connection}= require("../dataBaseConfig/config")
module.exports = {
    addNewPost:((req,res)=>{
        const query=`INSERT INTO post(title,description,image,views,likes) VALUES ("${req.body.title}","${req.body.description}","${req.body.image}","${req.body.views}","${req.body.likes}")`
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send("done")
        })
    }),
    getAllPost:((req,res)=>{
        const query = `SELECT * FROM post`
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send(result)
    })

}),
    updatePost:((req,res)=>{
        const query=`UPDATE post SET title="${req.body.title}",description="${req.body.description}" ,image="${req.body.image}",views="${req.body.views}",likes="${req.body.likes}" WHERE id=${req.params.id} `
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send("update success")
    })
    }),
    deletePost:((req,res)=>{
        const query=`DELETE FROM post WHERE id=${req.params.id}`
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send("delete success")
    })
    })
     
}
