/**
 * Created by gaocai on 16/9/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    View,
} from 'react-native';

import Girl from '../container/girl';

class Home extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'girl', component: Girl}}
                renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
                }}
            />
        )
    }
}
export default Home;