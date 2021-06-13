import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
export default function Search(){
   
   
    const [val,setVal] = useState()
    const [url,setUrl] = useState([])
    
    
    const myfunc = (e) =>{
        setVal(e.target.value)
    }
    const done = () =>{
        searched().then(res=>res.json()).then(result=>{

            setUrl((preVal)=>{
               return [...preVal,result.data[0].images.original.url]
            })
        })
    }


    async function searched(){
        try {
            const result = await fetch(`http://api.giphy.com/v1/gifs/search?q=${val}&api_key=dc6zaTOxFJmzC`)
            return result;
            
        } catch (error) {
            throw new Error(error)
        }
    }


    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="input-group">
                        <input onChange={myfunc} className="form-control" type="text" name=""  id=""/>
                        <button className="btn btn-success" onClick={done} > search </button>
                    </div>

                </div>
            </div>

            <div className="row">
                {
                    url.map(item=>{
                       return <div className="col-md-3 ml-5 mr-5 mt-5 mb-5"><img src={item} alt=""/></div>
                    })
                
                }
            </div>
        </div>
        </>
    )
}