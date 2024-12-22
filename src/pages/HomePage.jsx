

function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center space-y-3">
    <div className="text-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold  mb-4">
        Welcome to Sweet Treats!
      </h1>
      <p className="text-lg md:text-xlmb-8">
        Discover the most delicious cakes in town, freshly baked just for you.
      </p>
      <button className="bg-[#6F4E37]  text-white py-3 px-6 rounded-lg shadow-lg text-lg mt-4">
        Explore Our Menu
      </button>
    </div>
    <div className="hidden lg:block">
      <img
        src="https://source.unsplash.com/600x400/?cake,dessert"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
  )
}

export default HomePage