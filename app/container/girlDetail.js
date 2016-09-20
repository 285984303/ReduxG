/**
 * Created by gaocai on 16/9/20.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,

} from 'react-native';

import Dimensions from 'Dimensions';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class GirlDetail extends Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        const {navigator} = this.props;
    }

    render() {
        const {rowData, navigator} = this.props;
        return (
            <Image
                source={{uri: rowData.url}}
                style={styles.image}/>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height,
    }
});

export default GirlDetail;