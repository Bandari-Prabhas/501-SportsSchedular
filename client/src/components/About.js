import React from 'react';

function About() {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-extrabold text-white">
            SportifyZone
          </a>
          <nav>
            <ul className="flex space-x-8 text-white text-lg">
              <li>
                <a href="/" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-blue-600 mb-10">
            About Us
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Welcome to SportifyZone, a platform dedicated to revolutionizing
            the way sports events are managed. With powerful tools for team
            management, scheduling, tracking statistics, and providing a
            seamless experience for event organizers, we have been empowering
            sports communities worldwide.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-16"
          >
            <div
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src="https://randomuser.me/api/portraits/men/35.jpg"
                alt="User 1"
                className="w-32 h-32 rounded-full object-cover mb-6"
              />
              <h3 className="text-3xl font-semibold text-blue-600">
                1000+
              </h3>
              <p className="text-lg text-gray-500">Happy Users</p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src="https://randomuser.me/api/portraits/women/15.jpg"
                alt="User 2"
                className="w-32 h-32 rounded-full object-cover mb-6"
              />
              <h3 className="text-3xl font-semibold text-green-600">
                20+
              </h3>
              <p className="text-lg text-gray-500">Successful Events</p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt="User 3"
                className="w-32 h-32 rounded-full object-cover mb-6"
              />
              <h3 className="text-3xl font-semibold text-red-600">
                500+
              </h3>
              <p className="text-lg text-gray-500">Likes and Shares</p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt="User 4"
                className="w-32 h-32 rounded-full object-cover mb-6"
              />
              <h3 className="text-3xl font-semibold text-yellow-600">
                Teamwork
              </h3>
              <p className="text-lg text-gray-500">
                Our dedicated team is always ready to support you!
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
              Our Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Team Management
                </h3>
                <p className="text-lg text-gray-500 mb-6">
                  Easily create and manage your teams, track players, and
                  assign roles with ease. Perfect for any sports event.
                </p>
                <img
                  src="https://via.placeholder.com/200"
                  alt="Team Management"
                  className="w-full rounded-xl object-cover"
                />
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">
                  Live Scoring & Stats
                </h3>
                <p className="text-lg text-gray-500 mb-6">
                  Track real-time scores, statistics, and performance analytics
                  to keep your teams informed and engaged.
                </p>
                <img
                  src="https://via.placeholder.com/200"
                  alt="Live Scoring"
                  className="w-full rounded-xl object-cover"
                />
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-red-600 mb-4">
                  Event Scheduling
                </h3>
                <p className="text-lg text-gray-500 mb-6">
                  Plan, schedule, and manage your events effortlessly with our
                  easy-to-use calendar and reminders.
                </p>
                <img
                  src="https://via.placeholder.com/200"
                  alt="Event Scheduling"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-12 rounded-xl shadow-xl">
            <h3 className="text-3xl font-extrabold mb-6">
              Join the Movement Today!
            </h3>
            <p className="text-xl mb-6">
              Be part of our growing community of sports enthusiasts,
              organizers, and players. Sign up today to take your events to the
              next level!
            </p>
            <a
              href="#sign-up"
              className="bg-yellow-500 text-black py-3 px-8 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 SportifyZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
