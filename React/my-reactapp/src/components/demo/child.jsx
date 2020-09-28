import React, {useContext } from 'react';

export default function Child() {
    const {userName} = useContext(Father)
    return (
      <div>
        我是子组件的内容，=》{userName}这是父组件的value
      </div>
    )
}