// src/api/carsData.js

const carsDataArray = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    price: 18500,
    mileage: 45000,
    fuelType: "ბენზინი",
    // 💥 საიმედო ფოტო ლინკი 1
    imageUrl: "https://picsum.photos/id/111/400/220", 
    description: "კარგ მდგომარეობაში, რეგულარული სერვისით. მცირე დაზიანება.",
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2018,
    price: 24000,
    mileage: 30000,
    fuelType: "დიზელი",
    // 💥 საიმედო ფოტო ლინკი 2
    imageUrl: "https://picsum.photos/id/111/400/220", 
    description: "სრული კომპლექტაცია, უპრობლემო. გერმანიიდან ჩამოყვანილი.",
  },
  {
    id: 3,
    brand: "BMW",
    model: "X5",
    year: 2022,
    price: 55000,
    mileage: 12000,
    fuelType: "ჰიბრიდი",
    // 💥 საიმედო ფოტო ლინკი 3
    imageUrl: "https://picsum.photos/id/111/400/220", 
    description: "ახალივით, გარანტიით. მაქსიმალური კომპლექტაცია.",
  },
  {
    id: 4,
    brand: "Honda",
    model: "Civic",
    year: 2016,
    price: 9500,
    mileage: 80000,
    fuelType: "ბენზინი",
    // 💥 საიმედო ფოტო ლინკი 4
    imageUrl: "https://picsum.photos/id/111/400/220", 
    description: "ეკონომიური და გამძლე მანქანა. კარგი საბურავებით.",
  }
];

export const fetchCars = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carsDataArray);
    }, 500);
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
    }, 500); 
  });
};