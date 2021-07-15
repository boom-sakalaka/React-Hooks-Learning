/*
 * @Author: GZH
 * @Date: 2021-06-30 17:03:42
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-13 17:38:17
 * 执行时机不同，useLayoutEffect 是修改数据后，组件未发生渲染的时候
 * @FilePath: \my-app\src\pages\base\UseLayoutEffect.js
 */
import { useLayoutEffect, useEffect, useState } from 'react';
export default function LayoutEffect() {
  const [color, setColor] = useState('red');
  useLayoutEffect(() => {
    // alert(color);
  });
  useEffect(() => {
    console.log('color', color);
  }, [color]);
  return (
    <>
      <div id='myDiv' style={{ background: color }}>
        颜色
      </div>
      <button onClick={() => setColor('red')}>红</button>
      <button onClick={() => setColor('yellow')}>黄</button>
      <button onClick={() => setColor('blue')}>蓝</button>
    </>
  );
}
