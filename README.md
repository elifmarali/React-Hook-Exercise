#useEffect
//component didMount
useEffect(() => {
console.log("componentler 12093712");
}, []);
//all components didUpdate
useEffect(() => {
console.log("componentler calisti");
});
//counter component didUpdate
useEffect(() => {
console.log("component laslkd");
}, [counter]);

//cleanUp gerektiren durumlarda return ile sagliyoruz
useEffect(() => {
const interval = setInterval(() => {
console.log("Ben iki saniyede bir calisiyorum");
}, 2000);

    return () => {
      clearInterval(interval);
    };

}, []);

//all componentDidMount
useEffect(() => {
console.log("Mount");
}, []);
//Name componentDidMount and name componentDidUpdate
useEffect(() => {
console.log("Name Mount");
}, [name]);

//componentDidMount and componentDidUpdate
useEffect(() => {
document.title = `${counter} kez tiklandi`;
});
