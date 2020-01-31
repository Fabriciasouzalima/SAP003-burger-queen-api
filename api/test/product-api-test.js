import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../index'
chai.use(chatHttp)
const { expect } = chai


describe('Testing the product endpoints:', () => {
    it('It should create a product', (done) => {
        const product = {
            item: 'Product Name',
            price: 10.00,
            isAlcoholic: true
        }
        chai.request(app)
            .post('/api/product')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, res) => {
                expect(res.status).to.equal(201)
                expect(res.body.data).to.include({
                    id: 3,
                    item: product.item,
                    price: '10',
                    isAlcoholic: product.isAlcoholic
                })
                done()
            })
    })
});

it('It should not create a product with incomplete parameters', (done) => {
    const product = {
        isAlcoholic: true
    }
    chai.request(app)
        .post('/api/product')
        .set('Accept', 'application/json')
        .send(product)
        .end((err, res) => {
            expect(res.status).to.equal(400)
            done()
        })
})



it('It should get all product', (done) => {

    const product = {
        item: 'Product Name',
        price: 10.00,
        isAlcoholic: true
    }

    chai.request(app)
        .post('/api/product')
        .set('Accept', 'application/json')
        .send(product)
        .end((err, res) => {
            chai.request(app)
                .get('/api/product')
                .set('Accept', 'application/json')
                .end((err, res) => {                   
                    expect(res.status).to.equal(200)
                    res.body.data[0].should.have.property('id')
                    res.body.data[0].should.have.property('item')
                    res.body.data[0].should.have.property('price')
                    res.body.data[0].should.have.property('isAlcoholic')
                    done()
                })
        })
})

it('It should get a particular product', (done) => {

    const product = {
        ProductId: 1,
        item: 'Product Name',
        price: 10.00,
        isAlcoholic: true
    }

    chai.request(app)
        .post('/api/product')
        .set('Accept', 'application/json')
        .send(product)
        .end((err, res) => {
            chai.request(app)
                .get('/api/product')
                .set('Accept', 'application/json')
                .end((err, res) => {
                    expect(res.status).to.equal(200)
                    res.body.data[0].should.have.property('id')
                    res.body.data[0].should.have.property('item')
                    res.body.data[0].should.have.property('price')
                    res.body.data[0].should.have.property('isAlcoholic')
                    done()
                })
        })

})

it('It should not get a particular product with invalid id', (done) => {
    const ProductId = 8888
    chai.request(app)
        .get(`/api/product/${ProductId}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            expect(res.status).to.equal(404)
            res.body.should.have.property('message')
                .eql(`Cannot find Product with the id ${ProductId}`)
            done()
        })
})

it('It should not get a particular product with non-numeric id', (done) => {
    const ProductId = 'aaa'
    chai.request(app)
      .get(`/api/product/${ProductId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
        .eql('Please input a valid numeric value')
        done()
      })
  })

it('It should update a product', (done) => {
    const ProductId = 1

    const updatedProduct = {
        ProductId: 1,
        item: 'Product Name',
        price: 10.00,
        isAlcoholic: true
    }

    chai.request(app)
        .put(`/api/product/${ProductId}`)
        .set('Accept', 'application/json')
        .send(updatedProduct)
        .end((err, res) => {
            expect(res.status).to.equal(200)
            expect(res.body.data.id).equal(updatedProduct.id)
            expect(updatedProduct.item).equal(updatedProduct.item)
            expect(updatedProduct.isAlcoholic).equal(updatedProduct.isAlcoholic)
            done()
        })
})

it('It should not update a product with invalid id', (done) => {

    const ProductId = 9999


    const updatedProduct = {
        Id: ProductId,
        item: 'Product Name',
        price: 10.00,
        isAlcoholic: true
    }


    chai.request(app)
        .put(`/api/product/${ProductId}`)
        .set('Accept', 'application/json')
        .send(updatedProduct)
        .end((err, res) => {
            expect(res.status).to.equal(404)
            res.body.should.have.property('message')
                .eql(`Cannot find product with the id: ${ProductId}`)
            done()
        })
})
