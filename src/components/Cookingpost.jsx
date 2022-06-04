import "./Cookingpost.css";

function Cookingpost(props) {
    const {cooking} = props;
    return (
        <div className="cooking-post">
            <div className="cooking-post-bg" />
            <div className="cooking-post-content">
            <img src="/images/01.jpeg" />
            <h1>cook</h1>
            </div>           
        
        </div>

    )
}
export default Cookingpost;