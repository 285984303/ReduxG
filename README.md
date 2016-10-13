# ReduxG  博客地址： http://blog.csdn.net/u014360817


![这里写图片描述](http://img.blog.csdn.net/20161013223223599)

####	Redux刚开始我也是一头雾水，文章看着也是懵懵懂懂，经过多方查看别人写的文章，自己在动手实现在回头看别人写的也就那么回事。这里还是使用干活集中营的妹子接口来真实操作下Redux，建议一定要动手写写，理解不动就动手写几遍，再回头看应该会清晰很多。 这篇也是我看博客结合自己的理解记录的，DEMO地址：https://github.com/shuncaigao/ReduxG

###Redux是什么：

简单来说Redux就是一个javascript状态管理器， 可以构建一致化应用。Redux在React的基础上（state和props），增加了Store，Action，Reducer，**组件通过dispatch触发描述发生什么的Action，Reducer根据原来的state以及Action返回新的state，最后界面根据新的state更新界面** 它们之间是怎么串起来的代码中会有体现。

###Redux三个名词，Store，Action，Reducer

####Store：

- store是唯一的，程序中所有的state都存储在store中.store重要维持state，提供dispatch方法更新state，**界面得以更新的源头就在组件调用dispatch**

####Action: 

-  action描述用户做了哪些操作。比如用户进入界面要请求网络了，下拉刷新了，上拉加载了等等等这一些列操作，它会有一个ActionType(名字随意起的，就是一些列常量用于区分用户的哪种操作)进行分门别类。
 
 ####Reducer
 
- reducer处理如何更新state，本身就是个函数。通过旧的state和action来返回新的state从而更新界面

###分析程序

![这里写图片描述](http://img.blog.csdn.net/20160922073150669)

- 和明显代码结构中多出来三个文件，我们下面会跟据store，action，和reducer这三个文件来串串流程。

####首先是store

![这里写图片描述](http://img.blog.csdn.net/20160922073714985)

- 代码中主要注意点第五行我们导入Provider，在第十六行通过Provider将其包裹作为程序的入口，至于配置的store就看在第六行导入的文件。 其实这两个文件写法基本是固定的开始不必纠结

![这里写图片描述](http://img.blog.csdn.net/20160922074728693)

这里值得注意的是第六行导入所有到所reducer集，所有的reducer编写都会统一放到index中。

####其次是action

![这里写图片描述](http://img.blog.csdn.net/20160924062246326)

- 其实这个actionType应该 归到常量包里面的，这个文件的意思就是一些用户操作的常量类型，比如这个GIRL_LIST请求妹子列表，再比如刷新，删除，reducer会根据类型去区分用户的action操作。

![这里写图片描述](http://img.blog.csdn.net/20160924062920443)

- 这个girlAction文件就是用户的一些具体操作，就像第七行的fetchGirl方法就是一个具体的action，用户想要做的一些事，这个action会在用户girl组件中被调用，也就是说用户触发这个事件。第二十行type:types.GIRL_LIST给type赋值，也就是和action进行关联，一个type对应一个action。

####再其次是reducer

![这里写图片描述](http://img.blog.csdn.net/20160924064019590)

- 首先看girlReducer，有多少个模块就对应多少个reducer分类处理代码也就更简洁。第七行到第十行初始化一些初始值，比如否正在加载，初始时的数据，再看第十二行的girlReducer函数这里就是通过之前定义的actionType去处理action返回结果更新state，从而更新界面。

![这里写图片描述](http://img.blog.csdn.net/20160924065310258)

- 这个index文件就是通过combineReducers()将所有reducer组合到一块，这也就将所有reducer和store建立关联（看configureStore.js文件）

####最后看girl.js

![这里写图片描述](http://img.blog.csdn.net/20160924070113175)

- 这里就是用户触发action事件的起源

![这里写图片描述](http://img.blog.csdn.net/20160924072332610)

- 这里就是就是将Gril这个组件与store相关联

###这也是我练习时的一些记录和自己理解的东西，肯定有些东西理解有所偏差望指正。。。。girl代码比较多我也就不全贴出来了，具体的看DEMO吧，我已经托管到Github。

https://github.com/shuncaigao/ReduxG
