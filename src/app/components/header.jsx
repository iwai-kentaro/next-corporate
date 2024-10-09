import Logo from "./logo";
import Title from "./title";

export default function Header() {
    return (
        <>
        <header className="header">
            <div className="header-title">
                <Logo />
                <Title
                title="Wise Rock"
                />
            </div>
            <div className="header-list">
                
            </div>
        </header>
        </>
    );
  }