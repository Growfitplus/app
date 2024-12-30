import React from 'react';
import { Pressable } from 'react-native';
import UserSVG from '../SVG/User';

const ProfileHeader: React.FC<{ handleProfile: () => void }> = ({ handleProfile }) => {
  return (
    <>
      <Pressable
        style={{
          marginRight: 40,
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleProfile}
      >
        <UserSVG />
      </Pressable>
    </>
  );
};

export default ProfileHeader;
