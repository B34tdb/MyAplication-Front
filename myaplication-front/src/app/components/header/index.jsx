import Link from "@mui/material/Link";
import "./style.css";
import LoginIcon from "@mui/icons-material/Login";

function Header() {

    return (
        <div>
            <header>
                <nav className="img">
                    <div>
                        <Link href="/">
                            <img
                            className="Imagem"
                                src="https://fetis.group/wp-content/uploads/2022/02/LOGO_SRA-1024x454.png"
                                title="Softtek"
                                alt="Softtek"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="/Login" >
                            <LoginIcon />
                        </Link>
                    </div>
                </nav>
            </header>
        </div>

    )

};

export default Header