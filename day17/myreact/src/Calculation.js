export default function Calculation(props)
{
    console.log(props.num1);
    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2);

    function Addition()
    {
        return n1+n2;
    }
    function Substraction()
    {
        return n1-n2;
    }
    function Multi()
    {
        return n1*n2;
    }
    function Division()
    {
        return n1/n2;
    }
    return(
        <>
         <p>Addition is:{Addition()}</p>
         <p>Substraction is:{Substraction()}</p>
         <p>Multi is:{Multi()}</p>
         <p>Division is:{Division()}</p>
        </>
    );

}