let obj  ={
    var:"hello",
    show:function()
    {
        console.log("hello from show",this.var);
    }
}
let f1 = obj.show;
console.log(f1);
console.log(obj.show);
f1(); //undefined
 f1 = obj.show(); //hello from show hello
 
 f1 = obj.show.bind(obj);
 f1();
f1 = f1.bind(obj);

f1();
console.log(f1);


