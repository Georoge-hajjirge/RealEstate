import React from 'react';
import { Heart } from 'react-feather';

interface WishlistIconProps {
  isFavorite: boolean;
  onClick: () => void;
}

const WishlistIcon: React.FC<WishlistIconProps> = ({ isFavorite, onClick }) => {
  return (
    <Heart
      onClick={onClick}
      className={`cursor-pointer ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'} w-6 h-6`}
    />
  );
};

export default WishlistIcon;
