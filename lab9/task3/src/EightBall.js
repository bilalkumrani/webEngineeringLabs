import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



 function EightBall()
 {


const [data,setData] = useState({msg:'Think of question', color:'black'})
const [no,setNo]= useState({green:0, goldenrod:0, red:0})




const change = ()=>{

    const val = ((Math.random()*19).toFixed());
    


    setNo((preVal)=>{ 
        return {
            ...preVal,
            [ans[val].color]:preVal[ans[val].color]+1
        }
    })
    console.log(no)
    setData({
        msg:ans[val].msg,
        color:ans[val].color
    })
}
    const ans = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod"
    },
    { msg: "Reply hazy, try again.", color:
    "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color:
    "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod"
    },
    { msg: "Concentrate and ask again.", color:
    "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
    ]
    function reset()
    {
        setData({msg:'Think of question', color:'black'})
    }



    return (
        <>
        <div className="container text-center" style={{marginTop:200}}>
        <span className=" border text-center " style={{backgroundColor:data.color,color:"white", cursor:"pointer",padding:100, borderRadius:500 }} onClick={change}>{data.msg}</span>
        </div>

        <button className="btn btn-danger" onClick={reset}> reset </button>
        </>
    )

}


export default EightBall;