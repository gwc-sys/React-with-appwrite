import express from 'express';

const app = express();

app.get('/api/jokes', (req , res) => {
        const jokes = [
            {
                id : 1 , 
                title : ' first joke',
                content : 'This is first joke'
            } ,

            {
                id : 2 , 
                title : ' second joke',
                content : 'This is first joke'
            } ,

            {
                id : 3 , 
                title : ' thread joke',
                content : 'This is first joke'
            } ,

            {
                id : 4 , 
                title : ' fourth joke',
                content : 'This is first joke'
            } 
        ];
        
        res.send(jokes);
});
app.get('/', (req, res) => {
    res.sendFile(app(__dirname, 'pages/index.html'));
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('serve at http://localhost:${port}');
});