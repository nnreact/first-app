function Box({fill ="black",curved,text}) {
    // const boxColor = props.fill;
    // const boxRadius = props.curved;
    // const boxText = props.text;

    return <div style={{ height: "200px", width: "200px", backgroundColor: fill, borderRadius: curved, display: "flex", justifyContent: "center", alignItems: "center" }}>

        {text}

    </div>
}



Box.defaultProps = {
    fill: "black"
}

export default Box;