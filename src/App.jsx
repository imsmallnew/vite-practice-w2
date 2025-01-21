import { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 CSS
// import 'bootstrap'; // 引入js
import { Modal } from 'bootstrap';
import Chart from 'chart.js/auto';
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

  const [text, setText] = useState(null)
  const [modalText, setModalText] = useState(null)
  const [state, setState] = useState(false) // 避免按下open後二次觸發
  
  // 錯誤寫法 let myModal => useState更新渲染後失效會報錯 Uncaught TypeError: Cannot read properties of undefined (reading 'show')
  const modalRef = useRef(null);
  const modalMethodRef = useRef(null);

  useEffect(() => {
    modalMethodRef.current = new Modal(modalRef.current); 
  }, [])

  const openModal = (item) => {
    setState(true);
    setTimeout(()=>{
      setModalText(item.author + " says: " + item.boxText)
      // modalMethodRef.current.show() // 卡斯伯老師寫法
      Modal.getInstance(modalRef.current).show(); // 助教教學寫法
      // myModal.show() // 原始寫法
      setState(false);
    }, 500)
  }

  const closeModal = () => {
    modalMethodRef.current.hide()
    // myModal.hide()
  }

  const acquisitionsRef = useRef(null);

  useEffect(() => {
    const data = [
      { year: 2020, count: 10 },
      { year: 2021, count: 20 },
      { year: 2022, count: 15 },
      { year: 2023, count: 25 },
      { year: 2024, count: 22 },
      { year: 2025, count: 30 },
    ];
  
    new Chart(
      acquisitionsRef.current,
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  }, []);
   

  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <form className="container-fluid justify-content-center">
              <div className="nav justify-content-center">
                <h5 className='text-success'>React Team Work - Group6 - W2,W3,W4</h5>
              </div>
            </form>
          </div>
        </nav>
      </div>
      
      <div className="container mt-3">
        <div className="mb-3">
          搜尋: <input type="text" onChange={(e) => {
            setText(e.target.value)
          }}></input>
          {text}
        </div>
        <div className="row">
        {data.map((item, index)=> {
          return(
        <div className="col-md-4 col-12" key={index}>
          <div className='card'>
            <div className="subWrap">
                <div className="imgFrame">
                    <img src={item.imgUrl} className="card-img-top object-fit-cover" alt="副圖" />
                </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.author}</h5>
              <p className="card-text">{item.content}</p>
              <div className='row row-cols-2 d-flex justify-content-between'>
                  <div className='col'>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                      原始Modal
                    </button>
                  </div>
                  <div className='col'>
                    <button type="button" className="btn btn-success float-end" onClick={() => { openModal(item) }} disabled={state}>
                      JS觸發Modal
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>)
        }
        )} 
        </div>
        {/***  Char ***/}
        <canvas ref={acquisitionsRef} className='mt-5 mb-5'/>
        {/***  Modal ***/}
        <div className="modal fade" id="myModal" ref={modalRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {modalText}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-secondary" onClick={() => { closeModal() }}>JS Close</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
