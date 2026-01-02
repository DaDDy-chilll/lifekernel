import { IconSymbol } from 'apps/mobile/components/ui/icon-symbol';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const colorScheme = 'light'; // Simplified for now

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'light' ? '#007AFF' : '#0A84FF',
        headerShown: false,
        // tabBarButton: (props) => <View {...props} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
