import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return (
        <>
        <Link href="/">
                <Image 
                src="/title.svg"
                alt="メインロゴ"
                width={58}
                height={70}
                className="logo"
                />
        </Link>
        </>
    );
}