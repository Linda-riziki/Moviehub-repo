import { useEffect, useState } from "react";

function Apipage() {
  const [movies, setMovies] = useState([]);

  const fetchFromApi = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setMovies(data.slice(0, 12)); // Limit to the first 12 movies
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFromApi();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <h2 className="text-2xl font-bold text-center mb-6">My Movies World</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {movies.map((item, index) => (
            <div
              key={index}
              className="w-1/4 p-3 flex flex-col items-center"
            >
              <img
                src={item.image?.medium}
                alt={item.name}
                className="w-40 h-56 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500"
              />
              <h1 className="text-lg font-semibold mt-2">{item.name}</h1>
              <h1 className="text-sm text-gray-600">{item.genres.join(", ")}</h1>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Apipage;
