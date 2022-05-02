// import logo from './logo.svg';
import './App.css';
export default App;

let input=[
  {
    state:"FREE",
    price:4,
    con1:"Single User",
    con2:"5GB Storage",
    con3:"Unlimited Public Projects",
    con4:"Community Access",
    con5:"Unlimited Private Projects",
    con6:"Dedicated Phone Support",
    con7:"Free Subdomain",
    con8:"Monthly Status Reports"

  },
  {
    state:"PLUS",
    price:9,
    con1:"5 User",
    con2:"50GB Storage",
    con3:"Unlimited Public Projects",
    con4:"Community Access",
    con5:"Unlimited Private Projects",
    con6:"Dedicated Phone Support",
    con7:"Free Subdomain",
    con8:"Monthly Status Reports"

  },
  {
    state:"PRO",
    price:49,
    con1:"unlimited User",
    con2:"150GB Storage",
    con3:"Unlimited Public Projects",
    con4:"Community Access",
    con5:"Unlimited Private Projects",
    con6:"Dedicated Phone Support",
    con7:"Unlimited Free Subdomain",
    con8:"Monthly Status Reports"

  }
]
function App() {
  return (
    <div className="App">
      <div className="full">
        <Tag state={input[0].state} price={input[0].price} con1={input[0].con1} con2={input[0].con2} con3={input[0].con3} con4={input[0].con4} con5={input[0].con5} con6={input[0].con6} con7={input[0].con7} con8={input[0].con8} />
       <Tag2 state={input[1].state} price={input[1].price} con1={input[1].con1} con2={input[1].con2} con3={input[1].con3} con4={input[1].con4} con5={input[1].con5} con6={input[1].con6} con7={input[1].con7} con8={input[1].con8}/>
       <Tag3 state={input[2].state} price={input[2].price} con1={input[2].con1} con2={input[2].con2} con3={input[2].con3} con4={input[2].con4} con5={input[1].con5} con6={input[1].con6} con7={input[1].con7} con8={input[2].con8}/>
      </div>
    </div>
  );
}

function Tag({state,price,con1,con2,con3,con4,con5,con6,con7,con8}){
  return(
    <div className='border'>
      <div className='state'><h3>{state}</h3></div>
      <div className='price'>
        <h1>${price}<small>/month</small></h1>
      </div>
      <div className='hr'>
        <hr>
        </hr>
      </div>
      <div className='con'>
      ✔ {con1}
      </div>
      <div className='con'>
      ✔ {con2}
      </div>
      <div className='con'>
      ✔ {con3}
      </div>
      <div className='con'>
      ✔ {con4}
      </div>
      <div className='condull'>
      ✖ {con5}
      </div>
      <div className='condull'>
      ✖ {con6}      </div>
      <div className='condull'>
      ✖ {con7}
      </div>
      <div className='condull'>
      ✖ {con8}
      </div>
      <div className='btn'>
        <button > BUTTON </button>
      </div>

    </div>
  )
}
function Tag2({state,price,con1,con2,con3,con4,con5,con6,con7,con8}){
  return(
    <div className='border'>
      <div className='state'><h3>{state}</h3></div>
      <div className='price'>
        <h1>${price}<small>/month</small></h1>
      </div>
      <div className='hr'>
        <hr>
        </hr>
      </div>
      <div className='con'>
      ✔ <strong>{con1}</strong>
      </div>
      <div className='con'>
      ✔ {con2}
      </div>
      <div className='con'>
      ✔ {con3}
      </div>
      <div className='con'>
      ✔ {con4}
      </div>
      <div className='con'>
      ✔ {con5}
      </div>
      <div className='con'>
      ✔ {con6}      </div>
      <div className='con'>
      ✔ {con7}
      </div>
      <div className='condull'>
      ✖ {con8}
      </div>
      <div className='btn'>
        <button > BUTTON </button>
      </div>

    </div>
  )
}

function Tag3({state,price,con1,con2,con3,con4,con5,con6,con7,con8}){
  return(
    <div className='border'>
      <div className='state'><h3>{state}</h3></div>
      <div className='price'>
        <h1>${price}<small>/month</small></h1>
      </div>
      <div className='hr'>
        <hr>
        </hr>
      </div>
      <div className='con'>
      ✔ <strong>{con1}</strong>
      </div>
      <div className='con'>
      ✔ {con2}
      </div>
      <div className='con'>
      ✔ {con3}
      </div>
      <div className='con'>
      ✔ {con4}
      </div>
      <div className='con'>
      ✔ {con5}
      </div>
      <div className='con'>
      ✔ {con6}      </div>
      <div className='con'>
      ✔ <strong>Unlimited</strong> {con7}
      </div>
      <div className='con'>
      ✔ {con8}
      </div>
      <div className='btn'>
        <button > BUTTON </button>
      </div>
    </div>
  )
}
