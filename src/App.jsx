import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 CSS
import './App.css'

function App() {
  const data = [
    {
      author: "Daniel",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat laboriosam error soluta, officiis tempore suscipit magni deserunt.",
      imgUrl: "https://images.unsplash.com/photo-1717501218511-768944e2c325?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      boxText: "Hello World!",
    },
    {
      author: "Ken",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat laboriosam error soluta, officiis tempore suscipit magni deserunt.",
      imgUrl: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      boxText: "Hello hello",
    }
  ];

  function showText (text) {
    alert(text)
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <form className="container-fluid justify-content-center">
              <div className="nav justify-content-center">
                <h5>React Team Work - Group6 - W2,W4</h5>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <div className="container mt-3">
        <div className="row">
        {data.map((item, index)=> {
          return(
        <div className="card col-md-4" key={index}>
          <div className="subWrap">
              <div className="imgFrame mt-3">
                  <img src={item.imgUrl} className="card-img w-100 h-100 text-start object-fit-cover" alt="副圖" />
              </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.author}</h5>
            <p className="card-text">{item.content}</p>
            <button type="button" onClick={()=> showText(item.boxText)} className="btn btn-primary">Show Text</button>
          </div>
        </div>)
        }
        )} 
        </div>
      </div> 
    </>
  )
}

export default App
