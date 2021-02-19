let airplane = require("./airplane-min.png");
let cactus = require("./happygo.png");
let fridge = require("./fridge-min.png");
let soccer = require("./soccer-min.png");
let truck = require("./truck-min.png");
let building = require("./building-min.png");

export const getPhotos = () => {
  const photos = [
    { photo: airplane, name: "Airplane" },
    { photo: building, name: "Mori Tower" },
    { photo: cactus, name: "Cactus" },
    { photo: fridge, name: "Fridge" },
    { photo: soccer, name: "Soccer Field" },
    { photo: truck, name: "Truck" },
  ];
  return photos;
};
