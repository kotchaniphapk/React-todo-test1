import "./Item.css";

function Item (props) {
    const {cooking}  =  props;

    return (
        <div className="cooking-item">
        < img src ={cooking.tumbnailurl} />
        <h1> {cooking.title} </h1>
        </div>


    )
}
export default Item;