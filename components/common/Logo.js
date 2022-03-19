import Image from "next/image";


const Logo = (props) => {
    return (
        <div>
            <style jsx>
                {`
                  .logoImage {
                  max-width: 150px;
                  }
                `}
            </style>
            <Image className="logoImage" src={props.src.src} width={150} height={30} objectFit={"contain"}/>
        </div>
    );
};

export default Logo;

