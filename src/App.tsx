import React from 'react';
import { Building2, Users2, BarChart3, Globe2 } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 right-0 p-4 z-50">
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business
                <span className="block text-blue-400">With Innovation</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                We help businesses grow through strategic planning, digital transformation, 
                and innovative solutions tailored to your needs.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
                <button className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We deliver exceptional results through our comprehensive suite of services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Strategic Planning",
                description: "Develop comprehensive strategies aligned with your business goals"
              },
              {
                icon: <Users2 className="w-8 h-8" />,
                title: "Expert Team",
                description: "Dedicated professionals with years of industry experience"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Data Analytics",
                description: "Make informed decisions with powerful data insights"
              },
              {
                icon: <Globe2 className="w-8 h-8" />,
                title: "Global Reach",
                description: "Connect with customers and partners worldwide"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;