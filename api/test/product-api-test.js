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
                    item: product.name,
                    isAlcoholic: product.isAlcoholic
                })
                done()
            })
    })
});