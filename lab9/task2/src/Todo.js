import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function Todo(props){

console.log(props.text)
    return(
        <>
    <div className="col-md-4 p-5 border">
        <h2>{props.text}</h2>
    </div>

        </>
    )

}