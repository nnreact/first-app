import "./app.css"
import Counter from "./components/Counter.jsx";
import Box from "./components/Box.jsx";
function App() {
    return <div>
        <Box text="Box 1" curved="50px" />
        <Box text="Box 2" curved="15px" />
        <Box text="Box 3" fill="blue" curved="20px" />
        <Box text="Box 4" fill="plum" curved="20px" />
        {/* <Counter /> */}
    </div>
}

{/* <div>
        <h1 className="heading" style={{ color: "yellow", backgroundColor: "pink" }}>Hello World</h1>
        <h1 className="heading">Hello World</h1>
    </div> */}

export default App;


