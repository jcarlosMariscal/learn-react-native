import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#f7f6f7',
  green: '#47a311',
  red: '#c54642',
  textPrimary: '#3f3e3f',
  textSecondary: '#666666',
  background: '#fdfdfc',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    backgroundColor: colors.background,
  },
  resultContainer: {paddingHorizontal: 30, paddingBottom: 20},
  mainResult: {
    color: colors.textPrimary,
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 25,
    textAlign: 'right',
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 24,
    color: colors.textPrimary,
    fontWeight: 500,
  },
});
