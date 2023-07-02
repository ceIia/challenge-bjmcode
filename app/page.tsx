"use client";
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { cloneElement, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRightSquareIcon,
  QuoteIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import clsx from "clsx";

const Search: React.FC<{ onSearch: (input: string) => void }> = ({
  onSearch,
}) => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-slate-100 p-6 relative">
      <SearchIcon className="absolute top-1/2 left-9 transform -translate-y-1/2 text-[#0098ff]" />
      <input
        type="text"
        placeholder="Rechercher un produit"
        className="w-full bg-white p-2 rounded pl-12 h-14 text-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <XIcon
        onClick={() => setSearch("")}
        className="absolute top-1/2 right-9 transform -translate-y-1/2 text-slate-400 cursor-pointer hover:text-slate-500"
      />
    </div>
  );
};

const ProductCard: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <a className="block space-y-1.5 p-5 hover:bg-slate-100 cursor-pointer rounded transition-colors">
      <p className="font-semibold">{title}</p>
      <p className="text-slate-400">{description}</p>
    </a>
  );
};

const Products = () => {
  const [selectedSubtab, setSelectedSubtab] = useState("Nos best sellers");

  const subtabs = [
    "Nos best sellers",
    "Je souhaite",
    "Nom de domaine",
    "Hébergement et Cloud",
    "kSuite",
    "Sauvegarde & Stockage",
    "Marketing",
    "Billeterie",
    "Multimedia",
  ];

  return (
    <div className="container mx-auto rounded-b-lg shadow-md overflow-hidden">
      <div className="flex w-full">
        <div className="p-7 bg-gradient-to-br from-[#3D68D8] to-[#2047a8] space-y-2 max-w-xs w-screen">
          {subtabs.map((subtab) => (
            <motion.div
              key={subtab}
              className={clsx(
                "px-5 py-4 rounded hover:bg-white/10 flex items-center justify-between group cursor-pointer gap-4",
                selectedSubtab === subtab && "bg-white/10"
              )}
              onHoverStart={() => setSelectedSubtab(subtab)}
            >
              <p className="text-white text-lg">{subtab}</p>
              <ChevronRightSquareIcon
                className={clsx(
                  "text-white h-4 w-4 hidden group-hover:block",
                  selectedSubtab === subtab && "!block"
                )}
              />
            </motion.div>
          ))}
        </div>
        <div className="w-full">
          <Search onSearch={() => void 0} />

          <div className="flex w-full">
            <div className="w-full p-5 space-y-4 border-r border-slate-400 border-solid w-3/4">
              <p>Nos produits phares du moment</p>

              <div className="w-full">
                <div className="w-full grid grid-cols-3">
                  <div className="col-span-1 space-y-2">
                    <a className="text-lg text-[#0098ff] cursor-pointer">
                      kSuite
                    </a>

                    <div className="space-y-1">
                      <ProductCard
                        title="kDrive"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                      <ProductCard
                        title="Service Main"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                      <ProductCard
                        title="kChat"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                    </div>
                  </div>
                  <div className="col-span-1 space-y-2">
                    <a className="text-lg text-[#0098ff] cursor-pointer">
                      Grand Public
                    </a>

                    <div className="space-y-1">
                      <ProductCard
                        title="kDrive"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                      <ProductCard
                        title="Service Main"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                      <ProductCard
                        title="kChat"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                      <ProductCard
                        title="kDrive"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                    </div>
                  </div>
                  <div className="col-span-1 space-y-2">
                    <a className="text-lg text-[#0098ff] cursor-pointer">
                      Cloud Computing
                    </a>

                    <div className="space-y-1">
                      <ProductCard
                        title="kDrive"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                      <ProductCard
                        title="Service Main"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                      <ProductCard
                        title="kChat"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                      <ProductCard
                        title="kDrive"
                        description="Ipsum pariatur aliquip pariatur et cillum nisi eiusmod sint."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/4 p-5 flex flex-col justify-between gap-20">
              <div className="space-y-6">
                <p className="text-[#0098ff]">Actions rapides</p>

                <div className="flex flex-col gap-4">
                  <a className="hover:text-[#0098ff] cursor-pointer">
                    Transférer un domaine →
                  </a>
                  <a className="hover:text-[#0098ff] cursor-pointer">
                    Comparer nos solutions cloud et d&apos;hébergement →
                  </a>
                  <a className="hover:text-[#0098ff] cursor-pointer">
                    Migrer des adresses mail →
                  </a>
                  <a className="hover:text-[#0098ff] cursor-pointer">
                    Renewal Warranty →
                  </a>
                  <a className="hover:text-[#0098ff] cursor-pointer">
                    Payer une facture →
                  </a>
                  <a className="hover:text-[#0098ff] cursor-pointer">
                    Guides et questions fréquentes →
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[#0098ff]">Études de cas</p>

                <div className="rounded overflow-hidden">
                  <img
                    src="https://news.infomaniak.com/wp-content/uploads/2022/12/infomaniak-ethical-cloud.jpg"
                    alt="etude cas"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-sm block">Infomaniak, le Cloud Éthique</p>

                  <a className="text-[#0098ff] text-sm block">
                    Lire l&apos;article →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [selectedSubtab, setSelectedSubtab] = useState(0);

  const subtabs = [
    {
      title: "Vision et valeurs",
      description: "Notre vision, nos engagements",
    },
    {
      title: "L'équipe",
      description: "Infomaniak, c'est avant tout une aventure humaine",
    },
    {
      title: "Engagement écologique",
      description: "Nous polluons et nous agissons pour atténuer notre impact",
    },
    {
      title: "Infomaniak recrute",
      description: "Envie de contribuer à un Web plus éthique ?",
    },
    {
      title: "Presse et communications",
      description: "Logos, communiqués de presse, etc",
    },
    {
      title: "Blog et actualités",
      description: "Découvrez les dernières évolutions de nos services",
    },
    {
      title: "Partenaires et revendeurs",
      description: "Travaillez avec Infomaniak et découvrez tous les avantages",
    },
  ];

  return (
    <div className="container mx-auto rounded-b-lg shadow-md overflow-hidden">
      <div className="flex w-full">
        <div className="p-7 bg-gradient-to-br from-[#3D68D8] to-[#2047a8] space-y-2 max-w-md w-screen">
          {subtabs.map((subtab, index) => (
            <motion.div
              key={subtab.title}
              className={clsx(
                "px-5 py-4 rounded hover:bg-white/10 flex items-center justify-between group cursor-pointer",
                selectedSubtab === index && "bg-white/10"
              )}
              onHoverStart={() => setSelectedSubtab(index)}
            >
              <div className="space-y-1">
                <p className="text-white text-lg">{subtab.title}</p>
                <p className="text-slate-200 text-sm">{subtab.description}</p>
              </div>
              <ChevronRightSquareIcon
                className={clsx(
                  "text-white h-4 w-4 hidden group-hover:block",
                  selectedSubtab === index && "!block"
                )}
              />
            </motion.div>
          ))}
        </div>
        <div className="w-full relative">
          <div className="absolute w-full h-full -z-10">
            <img
              src="https://www.infomaniak.com/g/static/14ab5bceed3ddb7a31b96574f2f0f3f7/83fb8/boris.webp"
              alt="vision et valeurs"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex items-center h-full w-full p-16">
            <div className="space-y-3 text-white max-w-md relative">
              <QuoteIcon className="text-white absolute -top-2 -left-6 w-5 h-5" />
              <p className="text-2xl font-light leading-9">
                Choisir Infomaniak, c&apos;est être engagé dans l&apos;économie
                de demain. Vie privée, local et durable sont les valeurs
                d&apos;Infomaniak depuis 29 ans.
              </p>
              <p>Boris Siegenthaler, Co-fondateur et CSO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Support = () => {
  const [selectedSubtab, setSelectedSubtab] = useState(0);

  const subtabs = [
    {
      title: "Questions fréquentes",
      description: "1 000 FAQ, 500 tutoriels et vidéos explicatives",
    },
    {
      title: "Documentation pour les développeurs",
      description: "Intégrez nos services et créez vos apps avec notre API.",
    },
    {
      title: "À propos du support",
      description: "Proche de nos clients et à l'écoute",
    },
    {
      title: "Offre Support Premium",
      description: "Un support dédié à vos besoins",
    },
  ];

  return (
    <div className="mx-auto rounded-b-lg shadow-md overflow-hidden w-fit">
      <div className="flex w-full">
        <div className="p-7 bg-gradient-to-br from-[#3D68D8] to-[#2047a8] space-y-2 max-w-md w-screen">
          {subtabs.map((subtab, index) => (
            <motion.div
              key={subtab.title}
              className={clsx(
                "px-5 py-4 rounded hover:bg-white/10 flex items-center justify-between group cursor-pointer",
                selectedSubtab === index && "bg-white/10"
              )}
              onHoverStart={() => setSelectedSubtab(index)}
            >
              <div className="space-y-1">
                <p className="text-white text-lg">{subtab.title}</p>
                <p className="text-slate-200 text-sm">{subtab.description}</p>
              </div>
              <ChevronRightSquareIcon
                className={clsx(
                  "text-white h-4 w-4 hidden group-hover:block",
                  selectedSubtab === index && "!block"
                )}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const tabs = [
  {
    name: "Produits",
    tab: <Products />,
  },
  {
    name: "À propos",
    tab: <About />,
  },
  {
    name: "Support",
    tab: <Support />,
  },
];

// #0098ff

const Page: NextPage = () => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <motion.nav className="relative" onHoverEnd={() => setHoveredTab(null)}>
      <div className="flex container mx-auto h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <img
            src="https://www.infomaniak.com/g/static/bfd204f2c114deee99212a7d55778f0d/logo-infomaniak.svg"
            alt="Infomaniak"
            className="h-6 w-auto"
          />

          <ul className="flex items-center h-20">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className="h-full flex items-center bg-white px-4"
                onHoverStart={() => setHoveredTab(tab.name)}
              >
                <div className="relative h-full flex items-center">
                  <a className="cursor-pointer">
                    <li className="font-semibold">{tab.name}</li>
                  </a>

                  <AnimatePresence>
                    {hoveredTab === tab.name && (
                      <motion.div
                        className="absolute w-full bottom-0 h-0.5 bg-[#0098ff]"
                        layoutId="underline"
                        layout
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>

      {hoveredTab &&
        cloneElement(
          tabs.find((tab) => tab.name === hoveredTab)?.tab ?? <></>,
          {
            key: hoveredTab,
          }
        )}
    </motion.nav>
  );
};

export default Page;
