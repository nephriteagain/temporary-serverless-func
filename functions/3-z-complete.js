require('dotenv')
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appBCGoPXBitDrh8q')
  .table('products')


exports.handler = async ( event, context ) => {
    const { id } = event.queryStringParameters
    if ( id ) {
        try {
            const product = await airtable.retrieve(id)
            if (product.error) {
                return {
                    statusCode: 404,
                    body: `No Product with id: ${id}`
                }
            }
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(product)
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: `Server Error`
            }
        }
        
    }
    try {
        const { records } = await airtable.list()

        const products = records.map((product) => {
            const { id } = product
            const { name, image, price, description } = product.fields
            const url = image[0].url
            return { id, name, url, price, description }
            console.log(products)
        })
        return {
            statusCode: 200,
            body: JSON.stringify(products)

        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server Error'
        }
    }
}