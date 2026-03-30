import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="font-bold text-lg">VinShare</h2>
          <p className="text-gray-600 mt-2">
            Hackathon project built at SparkHacks 2026.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="font-bold text-lg">uPlate (In Progress)</h2>
          <p className="text-gray-600 mt-2">
            AI-powered dining hall nutrition app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;