import React, 
{ useState,
  useContext, 
  useReducer, 
  useEffect, 
  useRef, 
  useImperativeHandle, 
  useCallback, 
  useMemo } from 'react';

const Father = React.createContext({})

export default function Button () {
    const [buttonText, setButtonText] = useState('点我 +1')
    const inp = useRef(null);
    const child = useRef(null);
    const myReducer = (state, action) => {
        switch(action.type){
            case 'ADD': return {
                count: state.count + 1
            };
            default: return state
        }
    }
    const [state, dispatch] = useReducer(myReducer, {count: 0})
    
   
    function handleClick(){
        dispatch({
            type: 'ADD'
        })
        console.log(inp.current.value)
        console.log(child.current.childFunc())
    }

    const callback =  useCallback(() => {
        console.log('我出发了缓存的回调' + state.count)
    }, [state])

    useEffect(() => {
        console.log('state改变了')
        callback()
    }, [state])

    useMemo(() => {
        state.count++
    }, [state])


    return  (
        <Father.Provider value={{
            userName: '我是父级的Context'
        }}>
            <div>
               <button onClick={handleClick}>{buttonText}</button>
               {state.count}
                <input type="text" ref={inp} placeholder="value"/>
               <Child ref={child}></Child>
            </div>
        </Father.Provider>
    )
}

// const Child = () => {
//     const {userName} = useContext(Father)
//     return (
//       <div>
//         我是子组件的内容，( {userName} )
//       </div>
//     )
// }

const Child = React.forwardRef((prop, ref) => {
    const {userName} = useContext(Father)
    function childFunc(){
        console.log('我是子组件中的方法')
        return '子组件方法的返回值'
    }
    useImperativeHandle(ref, () => ({
        childFunc
    }))

    return (
      <div>
        我是子组件的内容，( {userName} )
      </div>
    )
})
