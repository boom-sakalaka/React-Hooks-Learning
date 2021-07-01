/*
 * @Author: GZH
 * @Date: 2021-06-30 15:54:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-01 14:23:34
 * @FilePath: \my-app\src\App.js
 */
import './App.css';
// import Counter from './pages/Counter';
// import MemoTest from './pages/MemoTest';
// import UseReducerTest from './pages/UseReducerTest'
// import UseLayoutEffect from './pages/UseLayoutEffect';
import MousePosition from './pages/MousePosition';

function App() {
  return (
    <div className='App'>
      {/* <Counter number={3}/> */}

      {/* memo useMemo useCallback 的使用  加上了useFomatList的使用，配合useMemo useCallBack 提高性能*/}
      {/* <MemoTest /> */}

      {/* UseReducer 的使用 类似于redux */}
      {/* <UseReducerTest /> */}

      {/* <UseLayoutEffect /> */}

      <MousePosition />
    </div>
  );
}

export default App;
