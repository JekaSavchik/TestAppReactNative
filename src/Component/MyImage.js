import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import unsplashService from './service/unspleshService'

export default class MyImage extends Component{
    componentDidMount() {
        // const unsplash = new Unsplash({
        //     accessKey: "{jRcp8a2ynUpKhXOCXw0u6GVoHrJS2tG-gnZmQxkrEdA}"
        //   });
         // console.log(unsplashService);

          unsplashService.listPhotos(1, 15)
          .then(unsplashService.toJson)
          .then(json => {
            console.log(json[14]);
          })
          .catch((error) => {
              console.log(error)
          });
    }

    render() {
        return (
            <View>
                <Text>OK!!!</Text>
                <Image 
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://images.unsplash.com/photo-1584126320509-aee4b0c69775?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDUwNH0'}}></Image>
            </View>
        )
    }
}
