import { resetState } from '@/contexts/user/actions';
import { useUserContext } from '@/contexts/user/context';
import useStorage from '@/hooks/useStorage';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Training = () => {
  const [user, userDispatch] = useUserContext();
  const { deleteStorage, getStorage } = useStorage();
  const [data, setData] = useState<string | undefined>();

  useEffect(() => {
    void printStorage();
  }, [user]);

  const handleDelete = async () => {
    await deleteStorage();

    userDispatch(resetState());
  };

  const printStorage = async () => {
    const info = await getStorage();

    setData(JSON.stringify(info, null, 2));
  };

  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => {
          handleDelete().catch(error => console.error(error));
        }}
      >
        <Text>Remove Storage</Text>
      </Pressable>
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Training;
