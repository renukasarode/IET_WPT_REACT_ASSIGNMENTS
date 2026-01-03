let arr =[12,13,14,16,17]

// function max(arr)
// {
//     let l = arr[0];
//     for(let i=0;i<4;i++)
//     {
//         if(arr[i]>l)
//         {
//             l = arr[i];
//         }
//     }
//     console.log("maximum ele is : " + l);
// }
// max(arr);
// let max = arr[0];
// arr.forEach((ele)=> {
//     if(ele > max)
//     {
//         max = ele;
//     }
// })
// console.log(max);
function f1(arr)
{
    arr.sort((a,b)=> {
        a-b
    });
    console.log(arr[arr.length-1])
}
f1(arr);


