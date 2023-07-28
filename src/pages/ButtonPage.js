import Button from "../components/Button";
import { FaAndroid } from "react-icons/fa";
import { DiApple, DiJsBadge } from "react-icons/di";
import { CiBatteryFull } from "react-icons/ci";
import { FaAccessibleIcon } from "react-icons/fa6";

function ButtonPage() {
    const handleClick = () => {
        console.log("clicked");
    }
    const handleEnter = () => {
        console.log("entered");
    }
    const handleLeft = () => {
        console.log("Left");
    }
    return (
        <div >
            <div>
                <Button primary rounded outline onClick={handleClick}>
                    <FaAndroid />
                    Click me</Button>
            </div>
            <div>
                <Button secondary onMouseEnter={handleEnter}>
                    <DiApple />
                    Buy now</Button>
            </div>
            <div>
                <Button warning>
                    <DiJsBadge onMouseLeave={handleLeft} />
                    See Deal</Button>
            </div>
            <div>
                <Button success>
                    <CiBatteryFull />
                    Hide Adds</Button>
            </div>
            <div>
                <Button danger outline rounded>
                    <FaAccessibleIcon />
                    Eww!!</Button>
            </div>
        </div>
    )
}

export default ButtonPage