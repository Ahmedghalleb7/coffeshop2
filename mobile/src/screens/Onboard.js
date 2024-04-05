import { OnboardFlow } from 'react-native-onboard';
import React from 'react'


export default function Onboard({navigation}) {
    
  return (
    <OnboardFlow
      pages={[
        {
          title: 'Coffee so good your taste buds will love it',
          
          subtitle: 'The best grain, the finest roas, the most powerful flavor.',
          imageUri: 'https://lh3.googleusercontent.com/pw/AP1GczPKu9EmK4jSCnl-jYWKIOG_8AN1DI7h8DYhge-WFFDI3v2NuxBBArlNMr0bxvZPdKBv22AY4fkW2g09aBZ-tj-DcApvUQavnKM8TtXW1dmeLrzf_VL7QyWcboldbWs7v5qTC_uiE3zOvGtEVjZ1qo_-LKLyTouWjS0m9vvm5lzywcUMCKjjfxIl_OLNZaxyubadScWL8tZd0MQJWfGH6CwBRYEogy_WzjZIAZR6Mo57QZkQzujLoZDfpTf8Ryt3N8yfuGCUhjZ41GpJt_FBMI0HJIo6BFxEI4KWT5HCQp8LKftWbp5x8Txw3WEiKlLYCC-VNIml8IWnpGp90J2iE-HvBE8fseeMc_lhjj77mMotZL9UFXOJ2BUB8croPXWy11Q0FJId-DuvcTu2UmCE4YVZf2K7GHivPQSAdoyI4NjuCiKT1p5Wd1xEQSYk4HcSfvLB_0nKkJAhEOpZmbwOyLLPm9NY_dAK7kWdVkO_WRqcmROy7QpkZDmwMnMI42wkJ0WOFThaytZn2wIgqXHw3S0IJHldDHZBUrA4wXeW4Pe-KqPridXS3KzcCfoO8Rd6kGuqdhxVyvdZ-pcB1NZOCoFqNJVKxCf2DBjyu298nVE4Pk4cuWoQL5VVNqafHxwZSAFYTbS1ncfSS6ZovW86Rri5us64OJtl8CuYfIjz0RCuGFNf4L_BNcHod3rAUTsWsvBBcK7JtRLCDapr3cw-f4Nr8m1Rbn6Nm9m6FRaSSOdQLxH7U5k7xIWHvn-PcJ6fPK9U8WMl4uE0uT7qM2Gf740VumNFNTwuAYggdD8dfbZ0BQKRmh9FY7-PtYVNgbFF3Dk9u0k8U6DTb9dh61VI9mzs7DAvA8Kkq4-hkUVBoneompr5pO6M2XGU9v4aFmPZEwfFyR5YS4L5Xts7ZexOAM-7=w1369-h913-s-no-gm?authuser=0',
          
        },
        {
          title: 'Start Your Life With a Coffee  ',
          subtitle: 'THE BEST COFFEE ALWAYS',
          imageUri: 'https://lh3.googleusercontent.com/pw/AP1GczOR5mxOHsPTKVkqDfrPuv8CvR2FBWn91gFFt9gWwNzjBMbDWvHBtQ7TFlLwCNp7UuZAheUbInMZsSkBrWVEqS2ieaYtAdtTOUrjDwlZsGq1fbE2Kxk9rI558Q544_wgp7hoyApMH2sEXkbvELwHXFz-juTHPcYi7_Fu2de5WufkYq1uJtsyqO5md8EkqzEYLVw4xsTuESKsbyL-FuuQoR5fx3crOrPV1QTn6AV8S3yPNfeYcNc0lTe8knoxedAwETq8Dtmj329zhrIsoTkIjxE7zFbQwHD7yl5JgvxA3Rvto-xiwVojuW3dhhnW-HXcnBScTQz9vly3NK-AuRllCPIcjqC9KCauoAllnz2j0-s2hA2VClGMuaI6Q_eyTZMya_W2G5wAnjwpTpBquNH8thA7SiirEdB_mxqqVn87VzBNiM5eQ6hWCwIz6jBMOe_WxM4m7DOrdq5Rjn9AAzqmRzju3YVU9wwzHvTdJ8Y_BLfdgFiAe4DUPRpa8vrDDPDzmDE1nf-uII3SpnxECfP6MihRcVdndKwx6_Gtu3TFdI4Q7QkvFXKMzUf6QJybf6kQUP-cX9AygXldU9qugEhcrs0c0RAUuWqs1obYYYriRm-mBPmU0MSEUztQIAcvjeAiTTfni2CbSOpXzkghWEaWpghNxnaFu6sjfs7g_4PsasstJ9bYzNb9Ak4C8-x0qUVv3UlFnJHiW1r-4W8nLY3pyUd_CevJ2HzuObXnGO8ezHz7UQqO2J18jGXiZ-lr41ObcrFEHkQJeb9cvpt7yscXuSWQzIq4FffbR-P4c8zWzp5JeARd_lsKrP8Q5lv2WjmaCtDFhMEB86QWlHk2eIqwKOU0RwnyztpsaS9EhG2jMOmX5YjEJa_HPoPjempG2itvGeXiDbwLj-4ICA1-ppmDC0wy=w467-h534-s-no-gm?authuser=0',
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