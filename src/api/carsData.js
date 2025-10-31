const carsDataArray = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    price: 18500,
    mileage: 45000,
    fuelType: "ბენზინი",
    imageUrl: "/car.webp",
    description: "კარგ მდგომარეობაში...",
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2018,
    price: 24000,
    mileage: 30000,
    fuelType: "დიზელი",
    imageUrl: "/car.webp",
    description: "სრული კომპლექტაცია...",
  },

];

export const fetchCars = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carsDataArray);
    }, 100);
  });
};

export const fetchCarById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const car = carsDataArray.find(c => c.id.toString() === id);
      
      if (car) {
        resolve(car);
      } else {
        reject(new Error(`Car with ID '${id}' was not found.`));
      }
    }, 1500); 
  });
};