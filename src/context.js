import {createContext,useContext} from "react";
const MyContext=createContext();

export default function App(){
    return (
        <MyContext.Provider value="Hello Context">
            <Header />
        </MyContext.Provider>
    );
}
function Header(props){
    return <Title />;
}
function Title(props){
    const value=useContext(MyContext);
    return <h1>{value}</h1>;
}