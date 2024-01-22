function Item(){
  return <li>Content</li>;
}
export default function App(){
  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        <Item />
        <Item />
      </ul>
    </div>
    );
}