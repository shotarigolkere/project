// ლოკალური მონაცემთა ბაზის იმიტაცია
const carsDataArray = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    price: 18500,
    mileage: 45000,
    fuelType: "ბენზინი",
    // დროებითი ფოტოები, რომლებიც ჩაიტვირთება ლოკალურად
    imageUrl: "https://via.placeholder.com/300x200/4682B4/FFFFFF?text=Toyota+Camry", 
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
    imageUrl: "https://via.placeholder.com/300x200/36454F/FFFFFF?text=Mercedes+C-Class",
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
    imageUrl: "https://via.placeholder.com/300x200/8B0000/FFFFFF?text=BMW+X5",
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
    imageUrl: "https://via.placeholder.com/300x200/556B2F/FFFFFF?text=Honda+Civic",
    description: "ეკონომიური და გამძლე მანქანა. კარგი საბურავებით.",
  }
];

/**
 * Fake API-ს ფუნქციის იმიტაცია, რომელიც მასივს აბრუნებს Promise-ის გამოყენებით.
 * ეს იმიტაცია აუცილებელია, რომ React კომპონენტები "ფიქრობდნენ", რომ ქსელური მოთხოვნა მიდის.
 * @returns {Promise<Array>} მანქანების სია
 */
export const fetchCars = () => {
  return new Promise((resolve) => {
    // 500ms დაყოვნება, ქსელის ლოდინის იმიტაციისთვის
    setTimeout(() => {
      resolve(carsDataArray);
    }, 500);
  });
};