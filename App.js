


const parent = React.createElement ( "div", { id: "parent"}, [ 
    React.createElement("div", { id: "child"} , 


            [React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag"),
            React.createElement("h3", {}, "I am h3 tag")]), 
            
            
            React.createElement("div", { id: "child2"} , 
            [React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag"),
            React.createElement("h3", {}, "I am h3 tag")])]
)




// const heading = React.createElement("h1", {id:"heading",xyz : "abc"} , "Hello Worls from react !");

console.log(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));
     
root.render(parent);
      