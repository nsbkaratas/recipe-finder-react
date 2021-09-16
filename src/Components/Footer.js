import logo from "C:/Users/nsbka/Desktop/Homework/Projects/mod2-project/src/Images/facebook.png"


const Footer = () => {
    return (
        <div className="footer">
            <h3>Purr-fect Foods</h3>
            <p>Follow the Purr-fect Foods to become the purr-fect masterchef!</p>
            <ul>
                <li><a href=""><img src={logo} alt="facebook" /></a></li>
                <li><a href="#"><i className="twitter"></i></a></li>
                <li><a href="#"><i className="instagram"></i></a></li>
            </ul>
        </div>
    )
}

export default Footer
