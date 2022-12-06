// domain/.netlify/1-hello

// const person = {name: 'john', age: '10'}


exports.handler = async ( event, context ) => {
    console.log(event)
    return {
        statusCode: 200,
        // body: JSON.stringify(person)
        body: 'My first netlify function'
    }
}