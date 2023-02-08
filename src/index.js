//1. 导入包
import React from 'react';//react 提供最核心的react组件功能
import App from './components/App'
import {createRoot} from "react-dom/client";

//渲染页面
const root = createRoot(document.getElementById('root'))
root.render(<App/>)
