import React from 'react';
import PayPal from 'react-native-paypal';
import { useNavigation } from 'react-router-dom';

const App = ({route}) => {
    const { material_type } = route.params;
    //databse conn
  return (
    <PayPal
      clientId="YOUR_CLIENT_ID"
      environment={PayPal.SANDBOX}
      intent={PayPal.SALE}
      price="9.99"
      currency="USD"
      description="Your description here"
      onSuccess={(payment) => console.log('Payment succeeded', payment)}
      onCancelled={() => console.log('Payment cancelled')}/> 
    // const nav=useNavigation();
    // nav.navigate("Screen",{material_price,material_type})
  );
};

export default App;

