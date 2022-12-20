const Trip = require('../models/Trip');


async function getAll() {
    return Trip.find({});
}

async function getByUserId(userId) {
    return Trip.find({ _ownerId: userId });
}

async function getById(id) {
    return Trip.findById(id);
}

async function create(item) {
    return Trip.create(item);
}

async function update(id, item) {
    const existing = await Trip.findById(id);

    existing.make = item.make;
    existing.model = item.model;
    existing.year = item.year;
    existing.description = item.description;
    existing.price = item.price;
    existing.img = item.img;
    existing.material = item.material;

    return existing.save();
}

async function deleteById(id) {
    return Trip.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    deleteById
};