import 'react-native-reanimated';

import { CalculatorView } from './presentation/calculatorView';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
      <CalculatorView/>
  );
}
