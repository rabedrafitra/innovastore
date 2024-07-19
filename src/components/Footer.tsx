import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">INNOVAS STORE</div>
          </Link>
          <p>
            Villa Amparihy Malaho, Andoharanofotsy 
            Tana 102, Madagascar
          </p>
          <span className="font-semibold">innovasmode@gmail.com</span>
          <span className="font-semibold">+261 34 76 020 77</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">BOUTIQUE</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">A Propos</Link>
              <Link href="/list">Boutique en ligne</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Service Client</Link>
              <Link href="/">Nous Contacter</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="list?cat=interior-design">Décoration Intérieur</Link>
              <Link href="/list?cat=high-tech">Technologie</Link>
              <Link href="/ist?cat=accesoires">Accessoire</Link>
              <Link href="/list?cat=fashion-style">Style & Mode</Link>
              <Link href="/list?cat=all-products">Tous les produits</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">AIDE</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Service Client</Link>
              <Link href="">Compte</Link>
              <Link href="">Rechercher Magasin</Link>
              <Link href="">Conditions Générales de Vente</Link>
              <Link href="">Offres et Cadeaux</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">INSCRIPTION</h1>
          <p>
          Pour être constamment informé des nouvelles offres promotionnelles.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-innovas text-white">JOINDRE</button>
          </div>
          <span className="font-semibold">Paiement sécurisé</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Innvas Store</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Devise</span>
            <span className="font-medium">Ar Ariary</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
