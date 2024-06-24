import { OnboardFlow } from 'react-native-onboard';
import React from 'react'


export default function Onboard({navigation}) {
    
  return (
    <OnboardFlow
      pages={[
        {
          title: 'Coffee so good your taste buds will love it',
          
          subtitle: 'The best grain, the finest roas, the most powerful flavor.',
          imageUri: 'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/430050646_314819404681321_4203005859617454289_n.png?stp=dst-png_p1080x2048&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u3sn0UkZmJoAb6Aal0G&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdUcft__f5f0gtvkDc7r-1-S5Pf1N7QXIemFZU1lwGWKhA&oe=66377C99',
          
        },
        {
          title: 'Start Your Life With a Coffee  ',
          subtitle: 'THE BEST COFFEE ALWAYS',
          imageUri: 'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/433147711_931554138464471_230158226599194098_n.png?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QUNnNVBZN0UAb6mvii5&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdXNVVI_OpPjUPsgGdcyBjtE-a50kYpRNZ6rCwDg7VliaQ&oe=66375E8B',
        }
      ]}
      type={'fullscreen'}
    //   onNext={()=>navigation.navigate("login")}
    //   onBack={()=>navigation.navigate('onboard')}
       onDone={()=>navigation.navigate("login")}
      onBack={()=>navigation.navigate('onboard')}
     
     backgroundImageUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71fJwuoweyKSX45Toi4t4IjaPwMPDmluGQYCmNvsoyFNn4QxsKDKxhfArACGWGeUZhXs&usqp=CAU'

    />
  )
}