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
                                src="https://www.abcdacomunicacao.com.br/wp-content/uploads/Softtek-logo-E814D93EA8-seeklogo.com_.png"
                                title="Softtek"
                                alt="Softtek"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="/login" >
                            <LoginIcon style ={{color:"#adrvW" }} />
                        </Link>
                    </div>
                </nav>
            </header>
        </div>

    )

};

export default Header