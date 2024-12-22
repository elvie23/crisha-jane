import ESPRESSO from '/src/assets/image/ESPRESSO.jpg'
import LATTE from '/src/assets/image/LATTE.jpg'
import CAPPUCINO from '/src/assets/image/CAPPUCCINO.jpg'
import ICEDCOFFEE from '/src/assets/image/ICEDCOFFEE.jpg'
import MOCHA from '/src/assets/image/MOCHA.jpg'
import FLATWHITE from '/src/assets/image/FLATWHITE.jpg'


const Content = () => {
  return (
    <div className="bg-gray-50 py-10 px-5">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-brown-900 mb-2">
          Welcome 
        </h1>
      </header>

      {/* Menu Section */}
      <section className="bg-[#6F4E37] p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-brown-800 text-center mb-4">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src={ESPRESSO} alt="" />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">ESPRESSO</h3>
            <p className="text-gray-600">A rich, full-bodied coffee brewed with finely ground beans.</p>
            <p className="font-semibold text-brown-700 mt-2">₱20.00</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src={LATTE} alt="" />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">LATTE</h3>
            <p className="text-gray-600">A smooth espresso blended with steamed milk for a creamy treat.</p>
            <p className="font-semibold text-brown-700 mt-2">₱30.00</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src={CAPPUCINO} alt="" />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">CAPPUCCINO</h3>
            <p className="text-gray-600">A perfect mix of espresso, steamed milk, and frothy foam.</p>
            <p className="font-semibold text-brown-700 mt-2">₱40.00</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src={ICEDCOFFEE} alt="" />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">ICEDCOFFEE</h3>
            <p className="text-gray-600">A chilled, refreshing coffee drink served over ice.</p>
            <p className="font-semibold text-brown-700 mt-2">₱50.00</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src={MOCHA} alt="" />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">MOCHA</h3>
            <p className="text-gray-600">Espresso with chocolate syrup and steamed milk.</p>
            <p className="font-semibold text-brown-700 mt-2">₱60.00</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src={FLATWHITE} alt="" />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">FLATWHITE</h3>
            <p className="text-gray-600">A velvety smooth coffee with rich espresso and steamed milk.</p>
            <p className="font-semibold text-brown-700 mt-2">₱70.00</p>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold text-brown-800 mb-4">About Us</h2>
        <p className="text-gray-700">
          We bring you the finest coffee experience. Our
          beans are sourced from local farmers and roasted to perfection. Enjoy a
          warm cup in our cozy shop or take it to go!
        </p>
      </section>

      
    </div>
  );
};

export default Content;
