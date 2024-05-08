import { StyleSheet } from 'react-native';

export const stylescotton = StyleSheet.create({
  subcontainer:{
    margin:20,
    padding:20,
    borderWidth:1,
    borderRadius: 10,
    // backgroundColor: '#FDFAFA', e4c1f9,fff0f3.e0b1cb
    backgroundColor: '#e4c1f9',
    borderColor: 'black',
    alignItems: 'center',

},
  subcontainerMaterial:{
    margin:5,
    marginHorizontal:15,
    marginBottom: 200,
    padding:5,
    borderWidth:1,
    borderRadius: 10,
    backgroundColor: '#F2EFEE',
    // backgroundColor: '#e0b1cb',
    borderColor: 'black',
    alignItems: 'center',
  },
  title:{
    color: '#414833',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'italic',
    marginTop: 20,
    margin: 25,
    padding: 5,
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