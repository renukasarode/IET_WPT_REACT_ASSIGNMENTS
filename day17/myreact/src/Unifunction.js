function UniFunction(props)
{
    let msg = "hello from uniFunction";
    return (
        <>
        <p>{msg} {props.data}</p>
        <Function1></Function1>
        </>
    )
}
 function Function1()
 {
    return(
        <p>helllo from Function1</p>
    );
 }

 export default UniFunction;