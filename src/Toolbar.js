import './Toolbar.css';
export default function Toolbar(props){
    const styles={
        toolbar:{
            marginBottom:20,
            border:'1px solid red',
        },
        dark:{
            background:'purple',
            color:'white'
        }
    };
    return (
        <div style={styles.toolbar , styles.dark}>
            {props.children}
        </div>
    );
}