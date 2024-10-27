//项目的根组件
//app-》idnex.js->publc/index.html(root)

function App() {
  // 事件参数e
  const handClick = (neme,e) => {
    console.log("button 被点击了", e,neme)
  }
  return (
    <div className="App">
      <button onClick={(e)=>handClick('66677',e)}>click me</button>
    </div>
  );
}

export default App;
