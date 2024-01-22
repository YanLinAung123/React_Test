function Item(props){
  return <li>{props.name}, ${props.price}</li>;
}
export default function App(){
  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        <Item name="Apple" price="0.99" />
        <Item name="Orange" price="0.89" />
      </ul>
    </div>
    );
}