import clearD from "../assets/icons/01d.png";
import clearN from "../assets/icons/01n.png";

function BigIcon({data}) {
    // const weather = data.weather[0].main;
    let img;

    // switch (weather) {
    //     case "clear":
    //         img = "{clearD}";
    // }



    return ( 
        <div>
            <img className="BigIconImg" src={clearD} alt="" />
        </div>
     );
}

export default BigIcon;