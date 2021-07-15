/*
 * @Author: GZH
 * @Date: 2021-06-30 15:54:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-15 10:43:52
 * @FilePath: \my-app\src\App.js
 */
import './App.css';
// import Counter from './pages/Counter';
// import MemoTest from './pages/MemoTest';
// import UseReducerTest from './pages/UseReducerTest'
// import UseLayoutEffect from './pages/base/UseLayoutEffect';
// import MousePosition from './pages/MousePosition';
// import ParentCom from './pages/memo/ParentCom';
// import ParentComTwo from './pages/memo/ParentComTwo';
// import ParentComThree from './pages/memo/ParentComThree';
// import JsxSource from './pages/jsxSource/index';
// import StateSouce from './pages/state/index';
import PropsSource from './pages/props/index';

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
      {/* <ParentCom /> */}
      {/* <ParentComThree /> */}

      {/* jsx 解析原理 */}
      {/* <JsxSource /> */}

      {/* state 原理相关 */}
      {/* <StateSouce /> */}

      {/* porps的原理相关 */}
      <PropsSource>
        <div>123</div>
      </PropsSource>
    </div>
  );
}

export default App;
