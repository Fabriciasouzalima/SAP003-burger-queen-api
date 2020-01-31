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
                    id: 1,
                    item: product.item,
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
   

