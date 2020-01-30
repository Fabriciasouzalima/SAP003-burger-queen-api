import express from 'express'
import bodyParser from 'body-parser'
import ProductRoutes from './server/routes/MenuRoutes';
import TableRoutes from './server/routes/TableRoute';
import OrderRoutes from './server/routes/OrderRoute';
import ItemRoutes from './server/routes/ItemRoute';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/product', ProductRoutes);
app.use('/api/table', TableRoutes);
app.use('/api/item', ItemRoutes);
app.use('/api/order', OrderRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app