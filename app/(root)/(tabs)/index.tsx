import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text className='font-bold text-lg my-10'>Home! welcome to you</Text>
            <Link href='/sign-in'>Sign In</Link>
            <Link href='/explore'>Explore</Link>
            <Link href='/profile'>Profile</Link>
        </View>
    );
}
