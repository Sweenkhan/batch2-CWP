import React from 'react';

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User profile"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-sm text-gray-500">Frontend Developer</p>

        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
