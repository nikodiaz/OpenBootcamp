import React, {useState} from 'react'
import Square from './Square'

export default function Container(props) {

    const [rgb, setRGB] = useState({
        red: 0,
        green: 0,
        blue: 0,
    })
    const [manageInterval, setManageInterval] = useState(0);

    const squareStyle = {
        width : '255px',
        height : '255px',
        backgroundColor : `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`
    }

    const handlerChangeColor = () => {
        setRGB({
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255),
        })
    }

    const changeColor = () => {
        setManageInterval(setInterval(handlerChangeColor, 1000))
    }

    const stopChangeColor = () => {
        clearInterval(manageInterval)
    }

    return (
        <div>
            <Square
                square={squareStyle}
                changeColor={changeColor}
                stopChangeColor={stopChangeColor}
            />
        </div>
    )
}
