import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator, {Operator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    calculatorOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <TextInput
          autoFocus={true}
          value={formula}
          caretHidden={false}
          showSoftInputOnFocus={false}
          selectionColor={'green'}
          style={styles.mainResult}
        />

        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
          {prevNumber === '0' || formula === prevNumber ? '' : prevNumber}
        </Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={clean} label="C" colorText={colors.red} />
        <CalculatorButton
          onPress={() => calculatorOperation(Operator.percent)}
          label="%"
          colorText={colors.green}
        />
        <CalculatorButton
          onPress={deleteOperation}
          label="⌫"
          colorText={colors.green}
        />
        <CalculatorButton
          onPress={() => calculatorOperation(Operator.divide)}
          label="÷"
          colorText={colors.green}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => calculatorOperation(Operator.multiply)}
          label="×"
          colorText={colors.green}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => calculatorOperation(Operator.subtract)}
          label="-"
          colorText={colors.green}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => calculatorOperation(Operator.add)}
          label="+"
          colorText={colors.green}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={toggleSign} label="+/-" />
        <CalculatorButton onPress={() => buildNumber('0')} label="0" />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.green}
          colorText={colors.background}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
