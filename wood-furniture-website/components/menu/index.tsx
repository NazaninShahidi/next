import Image from "next/image";
import Link from "next/link";

function Menu() {
  return (
    <nav className="h-[80px] bg-white shadow-md px-4 py-1">
      <div className="flex justify-between items-center">
        <Image
          src="/image/furniture-logo 2.png"
          alt="logo"
          width={70}
          height={70}
        />

        <ul className="flex flex-row gap-6 font-Montserrat">
          <li>
            <Link legacyBehavior href="/">
              <a
                id="link"
                className="font-[400]  text-xl leading-4 text-[#ECA52F]"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
              <a id="link" className="font-[400] text-xl leading-4">
                Products
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
              <a id="link" className="font-[400] text-xl leading-4">
                Shop
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
              <a id="link" className="font-[400] text-xl leading-4">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
              <a id="link" className="font-[400] text-xl leading-4">
                Contact
              </a>
            </Link>
          </li>
        </ul>

        <div className="flex gap-2">
          <Image
            src="/image/icon/bell-outline.png"
            alt="bell"
            width={34}
            height={34}
          />
          <Image
            src="/image/icon/person-outline.png"
            alt="person"
            width={34}
            height={34}
          />
        </div>
      </div>
    </nav>
  );
}

export default Menu;
