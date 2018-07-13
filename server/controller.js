module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {
                console.log(err)
                res.status(500).send({errorMessage: "Something went wrong"});
            }) 
    },
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_product([req.body.name, req.body.price, req.body.image_url])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send({errorMessage: 'Something went wrong.'});
            })
            
    }
}