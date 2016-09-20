/**
 * Created by gaocai on 16/9/19.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    Text,
    Image,
    TouchableOpacity,
    BackAndroid,
    Platform
} from 'react-native';


/**
 * 触发Action
 */
import {fetchGirl} from '../action/girlAction';
/**
 * 用于将UI和Reducer绑定
 */
import {connect} from 'react-redux';


import GirlDetail from '../container/girlDetail';

import Dimensions from 'Dimensions';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 2;

class Girl extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.dataSource = new ListView.DataSource({
            rowHasChanged: ((row1, row2) => row1 !== row2)
        })
    }

    /**
     * 调用数据 :
     *      1. 当触发Action方法请求数据反馈到Reducer中
     *      2. Reducer通过ActionType判断该更新哪个UI中的State
     *      3. 最后刷新界面显示数据
     */
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchGirl(index = 26));

        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => this.onBackAndroid());
        }
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => this.onBackAndroid());
        }
    }

    /**
     * 监听Android返回按键
     * @returns {boolean}
     */
    onBackAndroid() {

        const {navigator} = this.props;
        if (navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;

    }


    render() {
        //此reducer为index注册中的,取指定reducer取数据
        const {girlReducer} = this.props;

        if (!girlReducer.loading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}>加载中...</Text>

                </View>
            )
        }
        return (
            <ListView
                //取数据
                dataSource={this.dataSource.cloneWithRows(girlReducer.girlList)}
                renderRow={this.renderRow.bind(this)}
            />
        )

    }

    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={() => this.onItemClick(rowData)}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image
                        source={{uri: rowData.url}}
                        style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }


    /**
     * Item点击事件
     */
    onItemClick(rowData) {

        const {navigator} = this.props;

        if (navigator) {
            navigator.push({
                component: GirlDetail,
                params: {
                    rowData
                }
            })
        }

    }


}

const styles = StyleSheet.create(
    {
        image: {
            width: width,
            height: height,
            margin: 5,
            shadowColor: 'gray',
            shadowRadius: 15,
        }
    }
)

function mapStateToProps(state) {
    const {girlReducer} = state;
    return {
        girlReducer
    }
}
export default connect(mapStateToProps)(Girl);