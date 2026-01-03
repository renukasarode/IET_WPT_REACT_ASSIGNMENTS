console.log("enter your choice");
console.log("1: add the element at last");
console.log("2: add the element at beginning");
console.log("3: delete the element from first");
console.log("4:  delete the element from last");
console.log("5: combine part of the array");
let str=["abc","xyz"];
// let str1  ="xyz";
let v = 5;
switch(v)
{
    case 1:
    {
        str.push("a");
      console.log(str);
      break;
    }
    case 2:
    {
       str.unshift("a");
      console.log(str);
      break;
    }
    case 3:
    {
       str.shift("abc");
      console.log(str);
      break;
    }
    case 4:
    {
       str.pop("a");
      console.log(str);
      break;
    }
    case 5:
    // {
    //    str.replace("a","b");
    //   console.log(str);
    //   break;
    // }
    {

str[0].replace("a", "b");
console.log(str);  
str = str[0].replace("a", "b");
console.log(str);  
break;
    }
    default:
    {
      console.log("no case is matching");
      break;
    }
}