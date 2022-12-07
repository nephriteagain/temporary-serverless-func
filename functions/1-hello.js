exports.handler = async ( event, context ) => {
    console.log(event)
    return {
        statusCode: 200,
        // body: JSON.stringify(person)
        body: 'My first netlify function'
    }
}