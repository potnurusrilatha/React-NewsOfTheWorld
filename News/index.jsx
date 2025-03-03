

const News = () => {
    return (
<div className="max-w-7xl mx-auto p-4">
      {/* Header Section */}
      {/* <header className="bg-gray-800 text-white p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-center mb-2">Top Stories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Story 1", "Story 2", "Story 3", "Story 4"].map((story, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded-lg text-center">
              {story}
            </div>
          ))}
        </div>
      </header> */}

      {/* Main Layout */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left - Recent News */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">Recent News</h3>
          {["Recent Story 1", "Recent Story 2", "Recent Story 3", "Recent Story 4"].map((news, index) => (
            <div key={index} className="bg-white p-3 rounded-lg mb-2 shadow">
              {news}
            </div>
          ))}
        </section>

        {/* Middle - Main Article */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Main Article"
            className="w-full h-auto rounded-lg mb-3"
          />
          <h2 className="text-xl font-semibold">Main Article Title</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio...
          </p>
        </section>

        {/* Right - Sports News */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">Sports News</h3>
          {[1, 2].map((_, index) => (
            <div key={index} className="bg-white p-3 rounded-lg mb-3 shadow">
              <img
                src="https://via.placeholder.com/300x150"
                alt="Sports"
                className="w-full h-auto rounded-lg mb-2"
              />
              <p>Sports News Content {index + 1}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default News;