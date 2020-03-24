const connection = require('../../src/database/connection')

module.exports = {
    async create(req, resp) {
        const { id } = req.body
        const ong = await connection('ongs').where('id', id).select('name').first()

        if(!ong){
            return resp.status(400).json({error: 'No NGO found with this id'})
        }

        return resp.json(ong)
    }
}   