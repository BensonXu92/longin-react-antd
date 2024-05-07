import { BrowserRouter, Routes, Route } from "react-router-dom";

// 导入页面组件
import Login from "./views/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        {/* 这里可以继续添加路由 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
