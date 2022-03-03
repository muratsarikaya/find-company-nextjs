import styles from "./videoSection.module.css"
const PlayButton = (props) => {
    return (
        <>
            <div className={styles.player_icon}><i className="fa fa-play"></i></div>
        </>
    );
};


export default PlayButton;
