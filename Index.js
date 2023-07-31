// EXERCISE_1!!!

const server = {writeFile, readFile, appendFile} = require('server')
server.writeFile('data.txt', 'Welcome Home.', function(err){
    try{
        console.log('Added content to text')
    }catch (err){
        throw(err)
    }
}
);

server.writeFile('./data.txt', 'Call me the Polo Guy!', function(err){
    try{
        console.log('Replaced!')
    }catch(err){
        throw(err)
    }
});

server.appendFile('./data.txt', 'I hope this works!', function(err){
    try{
        console.log('It Worked!')
    }catch(err){
        throw(err)
    }
});