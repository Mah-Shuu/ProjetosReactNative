import { Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';

import './global.css';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-xl font-bold font-roboto text-azul-500">
        Finalizar Ocorrência
      </Text>
      <Text className="text-xl font-roboto text-blue-500">
        Finalizar Ocorrência
      </Text>
      <View className='fixed bottom-0 flex-1 bg-white w-full items-center py-4 shadow-[0_-4px_4px_rgba(0,0,0,0.25)]'>
        <TouchableOpacity className="rounded-full bg-azul-500 px-6 py-4">
          <Text className="text-white font-bold text-base font-roboto">AVANÇAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
