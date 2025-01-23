import React from 'react';
import jacob from '../../images/man1.jpg'; // Replace with actual image paths
import alice from '../../images/man2.jpg';
import edward from '../../images/man3.jpg';
import isabella from '../../images/man4.jpg';
import rosalie from '../../images/man5.jpg';

function Footer() {
  const organizers = [
    { name: 'Jacob', image: jacob },
    { name: 'Alice', image: alice },
    { name: 'Edward', image: edward },
    { name: 'Isabella', image: isabella },
    { name: 'Rosalie', image: rosalie },
  ];

  return (
    <div className="footer-container mt-64 sm:mt-24 lg:mt-4 text-center py-8 bg-white">
      {/* Title */}
      <h1 className="text-2xl lg:text-4xl font-bold mb-4">Meet the Masters :)</h1>

      {/* Organizer Cards */}
      <div className="organizer-cards flex justify-center gap-8 flex-wrap mb-8">
        {organizers.map((organizer, index) => (
          <div key={index} className="organizer-card flex flex-col items-center">
            <img
              src={organizer.image}
              alt={organizer.name}
              className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover border-4 border-gray-200"
            />
            <h2 className="text-lg font-semibold mt-2">{organizer.name}</h2>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="footer-description">
        <h2 className="text-xl lg:text-3xl font-bold mb-4">Top Community Event Organizers</h2>
        <p className="text-sm lg:text-base text-gray-600">
          Join with our compassionate team! <br />
          Who are dedicated organizers who lend their time and passion to support and manage vibrant vegan communities and organize heartwarming vegan events.
        </p>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition">
          Learn More <span className="ml-2">&#10142;</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
