// const connectToMongo = require('./config');
// const bodyParser = require('body-parser')
// const express = require('express')
// const cors = require('cors')
// const path = require('path');

// const auth = require('./routes/auth');
// const cart = require('./routes/cart')
// const wishlist = require('./routes/wishlist')
// const product = require('./routes/product')
// const review = require('./routes/review')
// const paymentRoute = require('./routes/paymentRoute')
// const forgotPassword = require('./routes/forgotPassword')
// const AdminRoute = require('./routes/Admin/AdminAuth')
// const dotenv = require('dotenv');
// const checkOrigin = require('./middleware/apiAuth');
// dotenv.config()

// connectToMongo();

// // // rzp_test_UIo6lYUU86hw1v/
// // // LquTniwWFCLyxEvACsJZVQwA
 
// const port = 5000

// const app = express()

// app.use(cors());

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: true }))



// app.use(express.json())

// app.use(express.static(path.join(__dirname, 'build')));



// app.use(checkOrigin);

// app.use('/api/auth', auth)

// app.use('/api/product', product)

// app.use('/api/cart', cart)

// app.use('/api/wishlist', wishlist)

// app.use('/api/review', review)

// app.use('/api/admin', AdminRoute)

// app.use('/api', paymentRoute)

// app.use('/api/password', forgotPassword)
// // http.createServer(req,res=>{
// //     res.write('hello')
// //     res.end();
// // }).listen(3000);


// // Enable All CORS Requests
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // Set the appropriate origin or '*' for all
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

// app.listen(port, () => {
//     console.log(`E-commerce backend listening at http://localhost:${port}`)
// })




const connectToMongo = require('./config');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const auth = require('./routes/auth');
const cart = require('./routes/cart');
const wishlist = require('./routes/wishlist');
const product = require('./routes/product');
const review = require('./routes/review');
const paymentRoute = require('./routes/paymentRoute');
const forgotPassword = require('./routes/forgotPassword');
const AdminRoute = require('./routes/Admin/AdminAuth');
const dotenv = require('dotenv');
const checkOrigin = require('./middleware/apiAuth');

dotenv.config();
connectToMongo();

const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // Use the CORS middleware here

app.use(express.static(path.join(__dirname, 'build')));
// app.use(checkOrigin);

app.use('/api/auth', auth);
app.use('/api/product', product);
app.use('/api/cart', cart);
app.use('/api/wishlist', wishlist);
app.use('/api/review', review);
app.use('/api/admin', AdminRoute);
app.use('/api', paymentRoute);
app.use('/api/password', forgotPassword);

app.listen(port, () => {
    console.log(`E-commerce backend listening at http://localhost:${port}`);
});

