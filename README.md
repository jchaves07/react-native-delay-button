# React-Native-FlatList-Slider
Button with delay execute action.


### Install
```
npm i react-native-delay-button
```

### Import 
```
import DelayButton from 'react-native-delay-button';
```

### Usage



![Screenshot](https://github.com/jchaves07/react-native-delay-button/blob/master/src/screenshots/rn-delay-button.gif)

```
  <DelayButton delayColorActive="#dc3545" customButtonStyle={{width: 250, alignSelf: 'center', textAlign: 'center'}} delayColorInactive="#28a745" buttonMessageInactive="Process" buttonMessageDelayCancel="Cancel action" actionOnClick={()=>Alert.alert('Execute Action')} DelayTime={5}  />
```


### Props for Customization

| Prop                    | Type         | Default      | Description                                                        |
| :---------------------: | :----------: | :----------: | :----------------------------------------------------------------: |
| delayColorActive        | String       |              | Color when the delay started                                       |
| delayColorInactive      | String       |              | Color when the button is not delayed                               |
| customButtonStyle       | Object       |              | Button Style                                                       |
| buttonMessageInactive   | String       |              | Text in the button when the button is not delayed                  |
| buttonMessageDelayCancel| String       |              | Text when the delayed started                                      |
| actionOnClick           | Function     |              | The function to execute when the delayed remain time is equal to 0 |
| DelayTime               | Number       | 0            | Delay seconds to started to execute the actionOnClick Function     |
| animation               | Boolean      | true         | Animate indicator change                                           |\

