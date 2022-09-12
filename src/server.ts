import express from 'express'

const app = express()

// ROTA ADS(ANÚNCIO)
app.get('/ads', (request, response) => {
    console.log('Método GET - OK')
    // Envia para aplicação assim que acessada 
    return response.json([
        { id: 1, name: 'Anúncio 1'},
        { id: 1, name: 'Anúncio 2'},
        { id: 1, name: 'Anúncio 3'}
    ])
    
})

app.listen(3333)