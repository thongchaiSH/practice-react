const ResultComponent =(props)=>{
    return (
        <div>
            <input id="display" type="text" value={props.result} name="display" placeholder="0" readOnly/>
        </div>
    )
}

export default ResultComponent;