const mongoose = require('mongoose');

mongoose.connect('
mongodb+srv://YunoTaka:123456789A@cluster0.uhpv0pp.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to mongodb server!');
})

module.export = {
    db,
}