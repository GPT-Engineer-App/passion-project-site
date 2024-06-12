import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-4">
        <h1 className="text-4xl font-bold text-center">Welcome to My Personal Website</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <section className="text-center p-8">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hello! I'm a web developer with a passion for creating beautiful and functional websites.
          </p>
        </section>
        <section className="text-center p-8">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="text-lg mb-4">
            Check out some of my projects below.
          </p>
        </section>
        <section className="text-center p-8">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-lg mb-4">
            Feel free to reach out to me via email at example@example.com.
          </p>
        </section>
      </main>
      <footer className="w-full bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2023 My Personal Website</p>
      </footer>
    </div>
  );
};

export default Home;