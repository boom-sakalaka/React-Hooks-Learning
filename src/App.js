/*
 * @Author: GZH
 * @Date: 2021-06-30 15:54:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-04 16:44:18
 * @FilePath: \my-app\src\App.js
 *  学习链接  https://juejin.cn/book/6945998773818490884/section/6959910136202657823
 */
import './App.css';
// import Counter from './pages/Counter';
// import MemoTest from './pages/MemoTest';
// import UseReducerTest from './pages/UseReducerTest'
// import UseLayoutEffect from './pages/base/UseLayoutEffect';
// import MousePosition from './pages/MousePosition';
import ParentCom from './pages/memo/ParentCom';
// import ParentComTwo from './pages/memo/ParentComTwo';
// import ParentComThree from './pages/memo/ParentComThree';
// import JsxSource from './pages/jsxSource/index';
// import StateSouce from './pages/state/index';
// import PropsSource from './pages/props/index';
// import Rform from './pages/Rform';
// import BigData from './pages/bigData';

// import ReactRouterTest from './pages/mini-router/index.js';
// import FormData from './pages/FormData/index';

function App() {
  return (
    <div className='App'>
      {/* <Counter number={3}/> */}
      {/* memo useMemo useCallback 的使用  加上了useFomatList的使用，配合useMemo useCallBack 提高性能*/}
      {/* <MemoTest /> */}
      {/* UseReducer 的使用 类似于redux */}
      {/* <UseReducerTest /> */}
      {/* <UseLayoutEffect /> */}
      {/* <MousePosition /> */}
      <ParentCom />
      {/* <ParentComThree /> */}

      {/* jsx 解析原理 */}
      {/* <JsxSource /> */}

      {/* state 原理相关 */}
      {/* <StateSouce /> */}

      {/* porps的原理相关 */}
      {/* <PropsSource>
        <div>123</div>
      </PropsSource> */}

      {/* react 表单 */}
      {/* <Rform /> */}

      {/* 大数据时间分片 */}
      {/* <BigData /> */}

      {/* 实现react的  mini-router */}
      {/* <ReactRouterTest /> */}

      {/* 自定义表格组件 */}
      {/* <FormData /> */}
    </div>
  );
}

export default App;
