import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // Using react-router instead of react-router-dom

const Recipe = () => { // Renamed the function to Recipe
  const [quote, setQuote] = useState(null); // State to hold the quote
  const [loading, setLoading] = useState(true);

  // Fetch random quote
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        setQuote(data); // Set the quote data to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl text-[#6F4E37]">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-16 space-y-3 h-screen flex flex-col items-center justify-center">
  <p className="text-7xl font-[Oswald] font-light tracking-widest text-center">
    Random Quote
  </p>

  <div className="text-center mt-10">
    <p className="text-2xl font-[Oswald] font-light tracking-widest">
      {quote && quote.quote}
    </p>
    <small className="text-xs text-gray-500 mt-4">- {quote && quote.author}</small>
  </div>
</div>

  );
};

export default Recipe; // Export the Recipe function
