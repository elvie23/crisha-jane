const ProductPage = () => {
  const menuItems = [
    {
      id: 1,
      name: 'ESPRESSO',
      description: 'A rich, full-bodied coffee brewed with finely ground beans.',
      price: '₱20.00',
      image: '/src/assets/image/ESPRESSO.jpg',
    },
    {
      id: 2,
      name: 'LATTE',
      description: 'A smooth espresso blended with steamed milk for a creamy treat.',
      price: '₱30.00',
      image: '/src/assets/image/LATTE.jpg',
    },
    {
      id: 3,
      name: 'CAPPUCCINO',
      description: 'A perfect mix of espresso, steamed milk, and frothy foam.',
      price: '₱40.00',
      image: '/src/assets/image/CAPPUCCINO.jpg',
    },
    {
      id: 4,
      name: 'ICEDCOFFEE',
      description: 'A chilled, refreshing coffee drink served over ice.',
      price: '₱50.00',
      image: '/src/assets/image/ICEDCOFFEE.jpg',
    },
    {
      id: 5,
      name: 'MOCHA',
      description: 'Espresso with chocolate syrup and steamed milk.',
      price: '₱60.00',
      image: '/src/assets/image/MOCHA.jpg',
    },
    {
      id: 6,
      name: 'FLATWHITE',
      description: 'A velvety smooth coffee with rich espresso and steamed milk.',
      price: '₱70.00',
      image: '/src/assets/image/FLATWHITE.jpg',
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-5">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-brown-900 mb-2">Welcome</h1>
      </header>

      {/* Menu Section */}
      <section className="bg-[#6F4E37] p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-brown-800 text-center mb-4">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-4 rounded-lg text-center"
            >
              <img src={item.image} alt={item.name} className="mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-brown-700 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="font-semibold text-brown-700 mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default ProductPage;
