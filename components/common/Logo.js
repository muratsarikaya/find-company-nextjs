import Image from "next/image";


const Logo = (props) => {
    return (
        <div>
            <Image src={props.src.src} width={150} height={30} style={{maxWidth:"150px"}}/>
        </div>
    );
};

export default Logo;

