export const fetchCars = () => {
  return Promise.resolve([
    {
      id: 1,
      image: 'https://picsum.photos/seed/bmw/600/400',
      title: 'BMW X5',
      price: 28000,
      year: 2018,
      engine: '3.0L Diesel',
      condition: 'მეორადი',
      type: 'ჯიპი',
    },
    {
      id: 2,
      image: 'https://picsum.photos/seed/audi/600/400',
      title: 'Audi A6',
      price: 25000,
      year: 2017,
      engine: '2.0L Benzin',
      condition: 'მეორადი',
      type: 'სედანი',
    },
    {
      id: 3,
      image: 'https://picsum.photos/seed/lexus/600/400',
      title: 'Lexus RX 350',
      price: 32000,
      year: 2019,
      engine: '3.5L ბენზინი',
      condition: 'ახალი',
      type: 'კროსოვერი',
    },
  ]);
};
