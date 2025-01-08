import React from 'react';
import { Pressable } from 'react-native';
import { UserSVG } from '../SVG';

const ProfileHeader: React.FC<{ handleProfile: () => void }> = ({ handleProfile }) => {
  return (
    <>
      <Pressable
        style={{
          alignItems: 'center',
          height: 40,
          justifyContent: 'center',
          marginRight: 40,
          width: 40,
        }}
        onPress={handleProfile}
      >
        <UserSVG />
      </Pressable>
    </>
  );
};

export default ProfileHeader;
