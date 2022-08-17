import React, { useMemo } from 'react';

/**
 * useMemo 计算属性
 */


export default function App() {


    const name = useMemo( () => {
        return "计算属性得来的值，具有记忆功能"
    }, [] )  // 数组里面是依赖，上面的方法体里面有什么状态，级写在第二个参数数组里面


    return(
        <div>
            { name }
        </div>
    )
}
