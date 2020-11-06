let airplane = require('./airplane.png');
let cactus = require('./cactus.png');
let fridge = require('./fridge.png');
let soccer = require('./soccer.png');
let truck = require('./truck.png');
let building = require('./building.png');

export const getPhotos = () => {
  const photos = [
    { photo: airplane, name: 'Airplane' },
    { photo: building, name: 'Mori Tower' },
    { photo: cactus, name: 'Cactus' },
    { photo: fridge, name: 'Fridge' },
    { photo: soccer, name: 'Soccer Field' },
    { photo: truck, name: 'Truck' },
  ];
  return photos;
};
