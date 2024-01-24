export default function Babu(params) {
  let arr2 = ["😀", "😁", "😂", "🤣", "😄", "😍", "🙂"];
  let ind = Math.floor(Math.random() * 6);
  return (
    <div>
      <h1> hi you are my {params.name}</h1>
      <h1> tere ka {params.gali} </h1>
      <h1> {arr2[ind]}</h1>
      {arr2.map((item, index) => {
        return (
          <h1 key={index}>
            your emoji is{item} at {index}
          </h1>
        );
      })}
      {ind === 3 ? arr2[3] : <h1>naa</h1>}
    </div>
  );
}

// params hota h ek object ab tum bc is object ka
// kuch bi karo
