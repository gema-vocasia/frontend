import PropTypes from 'prop-types';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const DonorList = ({ donors, showDonors, toggleShow }) => (
  <div className="w-full p-4 mt-4 bg-white rounded-lg shadow-lg">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-[#5E84C5]">Donatur</h2>
      <div onClick={toggleShow} className="text-[#5E84C5] cursor-pointer ml-2">
        {showDonors ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
      </div>
    </div>
    {showDonors && (
      <div>
        {donors.map((donor, index) => (
          <div key={index} className="flex items-center pb-4 mt-4 border-b">
            <img src={donor.avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <p className="font-semibold text-gray-800">{donor.name}</p>
              <p className="text-sm text-gray-600">
                Berdonasi Rp {donor.amount.toLocaleString()}
              </p>
              <p className="text-sm italic text-gray-500">{donor.message}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

DonorList.propTypes = {
  donors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      message: PropTypes.string,
    })
  ).isRequired,
  showDonors: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default DonorList;