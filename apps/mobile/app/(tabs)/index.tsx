// app/(tabs)/index.tsx
import { FC } from 'react';
import { Text, View } from 'react-native';
import { useDynamicColors } from '../../hooks/useDynamicColors';

const Page: FC = () => {
  const { bgBackground, textPrimary } = useDynamicColors();

  return (
    <View
      style={[
        bgBackground,
        { flex: 1, justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <Text className={`text-[${textPrimary.color}]`}>
        This is a simple page
      </Text>
    </View>
  );
};

export default Page;
