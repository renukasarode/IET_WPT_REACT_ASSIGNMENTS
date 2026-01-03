function display(callback)
{
    console.log("we are in display");
    callback();

}
function output()
{
    console.log("display output");
}
display(output);