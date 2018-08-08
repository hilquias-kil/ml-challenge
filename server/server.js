const express = require('express')
const path = require('path')
const app = express()
const request = require('request')
const port = process.env.PORT || 5000

const apiUrl = 'https://api.mercadolibre.com/'

// API calls
app.get('/api/items/:id', (req, res) => {
  request(`${apiUrl}items/${req.params.id}`, function(error, response, body) {
    let data = JSON.parse(body)
    if (!error && response.statusCode === 200) {
      request(`${apiUrl}items/${req.params.id}/description`, function(
        _error,
        _response,
        _body
      ) {
        let _data = JSON.parse(_body)
        if (!_error && _response.statusCode === 200) {
          res.send({
            author: {
              name: '',
              lastname: '',
            },
            item: {
              id: data.id,
              title: data.title,
              price: {
                currency: data.currency_id,
                amount: data.price,
                decimals: 0,
              },
              picture: data.pictures[0].url,
              condition: data.condition,
              free_shipping: data.shipping.free_shipping,
              sold_quantity: data.sold_quantity,
              description: _data.plain_text,
            },
          })
        } else {
          res.send(_data)
        }
      })
    } else {
      res.send(data)
    }
  })
})

app.get('/api/items', (req, res) => {
  if (req.query.q) {
    request(`${apiUrl}sites/MLA/search?q=/${req.query}`, function(
      error,
      response,
      body
    ) {
      let data = JSON.parse(body)
      if (!error && response.statusCode === 200) {
        res.send({
          author: {
            name: '',
            lastname: '',
          },
          categories: data.available_filters
            .find(item => item.id === 'category')
            .values.map(item => item.name),
          items: data.results.map(item => {
            return {
              id: item.id,
              title: item.title,
              price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 0,
              },
              picture: item.thumbnail,
              condition: item.condition,
              free_shipping: item.shipping.free_shipping,
            }
          }),
        })
      } else {
        res.send(data)
      }
    })
  } else {
    res.send({})
  }
})

// Serve any static files
app.use(express.static(path.join(__dirname, '../public/')))
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))
