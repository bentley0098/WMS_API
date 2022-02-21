// Load the MySQL pool connection
const { poolPromise } = require('../data/config');

const router = app => {

    // *******  Orders  ****** //

    // GET - Display all orders
    app.get('/api/v1/orders', async (request, response) => {
        try {
            const pool = await poolPromise
            const result = await pool.request()
            
            .query(`SELECT * FROM SO_HEADER`)      

            response.json(result.recordset)
        } catch (err) {
            response.status(500)
            response.send(err.message)
        }
    });
    
}

// Export the router
module.exports = router;