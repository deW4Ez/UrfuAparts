import styles from "./defButton.module.scss"

export default function DefButton({value, view, onClick}){
    return <button onClick={ view === "disabled"? undefined: onClick} className={
        view === "disabled"? styles.disabled : 
        view === "blue"? styles.blue: styles.default}>
        {value}
    </button>
}