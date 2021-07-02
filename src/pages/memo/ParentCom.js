/*
 * @Author: GZH
 * @Date: 2021-07-02 13:51:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-02 14:14:07
 * @FilePath: \my-app\src\pages\memo\ParentCom.js
 * @Description:
 */

import React, { memo, useState, useCallback, useMemo } from 'react';

const Children = memo(function Children({ name: { name }, changeAge }) {
  console.log('childRender');
  return (
    <div>
      {name}
      <button
        onClick={() => {
          changeAge();
        }}
      >
        修改名字
      </button>
    </div>
  );
});

export default function ParentCom() {
  const [name, setName] = useState('张三');
  const [age, setAge] = useState(18);

  const handleChangeAge = useCallback(() => {
    setName('李四' + Math.random());
  }, []);

  const childName = useMemo(
    () => ({
      name,
    }),
    [name]
  );
  return (
    <div>
      <h1>{age}</h1>
      <Children name={childName} changeAge={handleChangeAge} />
      <button onClick={() => setAge(age + 1)}>修改年龄</button>
    </div>
  );
}
