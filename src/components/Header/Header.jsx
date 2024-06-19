import './Header.css';

export default function Header() {
    return (
        <div className={style.header}>
            <img className={style.logo} src={logo} alt={"logo"} />
            <div className={style.headerText}>Learning English Words</div>
            {/* <nav className={style.navigator}>
                <div>Home</div>
                <div>Game</div>
                <div>Table</div>
            </nav> */}
        </div>
    )
}
