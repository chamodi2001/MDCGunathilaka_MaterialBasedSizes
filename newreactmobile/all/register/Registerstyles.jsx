import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: '#FDFAFA', e4c1f9,fff0f3.e0b1cb
    backgroundColor: '#FDFAFA',
    // justifyContent: 'flex-start',
    alignItems: 'center',

  },

  title:{
    color: '#414833',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 45,
    fontStyle: 'italic',
    marginTop: 40,
    margin: 25,
    padding: 10,
  },
  input: {
    padding: 5,
    marginTop: 25,
    marginBottom: 25,
    width: '80%',
    color: 'black',
    textAlign: 'center',
    alignContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },

  button: {
    // backgroundColor: '#ffafcc', #8e7dbe
    backgroundColor: '#9d4edd',
    padding: 15,
    paddingHorizontal: 60,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 18,
  },
});