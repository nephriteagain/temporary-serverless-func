
const items = require('../assets/data')

exports.handler = async ( event, context ) => {
    console.log(event)
    return {
        statusCode: 200,
        // body: JSON.stringify(person)
        // body: 'Our Basic API Example'
        body: JSON.stringify(items)
    }
}