import Head from "next/head";
import Image from "next/image";

function ProductGrid({ title, items }) {
  return (
    <section className="gallery">
      <h2>{title}</h2>

      <div className="grid">
        {items.map((p, i) => (
          <div key={i} className="card">
            <img src={p.img} alt={p.name} />

            <h3>{p.name}</h3>

            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const decor = [
  {
    name: "Caixa do amor",
    desc: "Impressão temática do dia dos namorados. Perfeita para presentes elaborados e ocasiões especiais.",
    img: "/products/heart.png",
  },
  {
    name: "Tulipa 3d",
    desc: "Decoração elegante para qualquer ambiente. Pode ser impressa em qualquer cor, além de outros modelos de rosas disponíveis.",
    img: "/products/rosa.png",
  },
  {
    name: "Miniatura de coração",
    desc: "As pernas articuladas permitem que se adeque ao ambiente. Outras decorações e brinquedos articulados são ideais para a diversão das crianças!",
    img: "/products/legheart.png",
  },
  {
    name: "Presépio iluminado",
    desc: "Uma cena 3D detalhada representando a Sagrada Família sob a proteção de grandes asas de anjo. Perfeita como luminária de Natal ou decoração de presépio.",
    img: "/products/presepio.png",
  },
];

const diversos = [
  {
    name: "Suporte para livros",
    desc: "Um simples suporte para 3 livros grandes, ou mais.",
    img: "/products/books.png",
  },
  {
    name: "Coletor de pó de furadeira",
    desc: "Deve ser anexada a parede furada para coletar rapidamente os resíduos",
    img: "/products/poeira.png",
  },
  {
    name: "Escorredor de Pratos Compacto",
    desc: "Escorredor de pratos robusto para guardar pratos de cerâmica ou de jantar na vertical. Ideal após a lavagem para secar ou para uma organização que economiza espaço na bancada da cozinha. Design simples, funcional e adequado para o uso diário.",
    img: "/products/pratos.png",
  },
  {
    name: "Caixa pequena com ímãs",
    desc: "Caixa de armazenamento com tampa magnética.",
    img: "/products/caixaima.png",
  },
];

const nerd = [
  {
    name: "Vaporeon",
    desc: "Miniatura Pokemon impressa em PLA. Temos arquivos low poly de todos os pokemons da primeira geração disponíveis!",
    img: "/products/vaporeon.png",
  },
  {
    name: "Ocarina of Time",
    desc: "Prop para cosplay ou decoração inspirada em Zelda",
    img: "/products/ocarina.png",
  },
  {
    name: "Pokebola",
    desc: "Feita com a mesma proporção retratada na obra",
    img: "/products/pokeball.png",
  },
  {
    name: "Hollow Knight e Hornet",
    desc: "Miniaturas dos protagonistas dos jogos Hollow Knight e Silksong",
    img: "/products/hkh.png",
  },
];

const props = [
  {
    name: "Máscara do Receptáculo Puro",
    desc: "Prop de cosplay do jogo Hollow Knight",
    img: "/products/pure_vessel.png",
  },
  {
    name: "Máscara do espírito azul do Príncipe Zuko",
    desc: "Impressa e pintada exatamente como a retratada na obra Avatar: A Lenda de Aang",
    img: "/products/bluespirit.png",
  },
  {
    name: "Máscara da Reze",
    desc: "Prop de cosplay do mangá de Chainsaw Man",
    img: "/products/reze.png",
  },
  {
    name: "Lamparina do Link",
    desc: "Réplica fiel do item do jogo The Legend of Zelda: Twilight Princess",
    img: "/products/lamp.png",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Impressões 3D Personalizadas</title>
        <meta
          name="description"
          content="Peças decorativas, props para cosplay e diversos, impressos em 3D sob encomenda."
        />
      </Head>

      <main>
        <section className="hero">
          <div className="logo">
            <Image src="/logo.png" alt="Warp3D logo" width={220} height={220} />
          </div>

          {/* HERO */}
          <h1>Moldando as impressões 3D para toda a imaginação</h1>
          <p>
            Personagens, props de cosplay e peças decorativas feitas sob
            encomenda.
          </p>

          <div className="buttons">
            <a href="https://wa.me/558496903777" target="_blank">
              Falar no WhatsApp
            </a>

            <a href="https://www.instagram.com/warp3d.print/" target="_blank">
              Ver Instagram
            </a>
          </div>
        </section>

        <main>
          <ProductGrid title="Peças decorativas" items={decor} />
          <ProductGrid title="Diversos" items={diversos} />
          <ProductGrid title="Cultura Nerd" items={nerd} />
          <ProductGrid title="Props para cosplay" items={props} />
        </main>

        <section className="process">
          <h2>Como funciona:</h2>

          <div className="steps">
            <div>
              <h3>1</h3>
              <p>Você envia sua ideia ou modelo</p>
            </div>
            <div>
              <h3>2</h3>
              <p>➡️ Eu preparo o modelo e realizo a impressão</p>
            </div>

            <div>
              <h3>3</h3>
              <p>➡️ Peça pronta para coleção, cosplay ou decoração</p>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="cta">
          <h2>Quer criar algo único?</h2>

          <p>Entre em contato e transforme sua ideia em uma peça real.</p>

          <a
            className="whatsapp"
            href="https://wa.me/558496903777"
            target="_blank"
          >
            Pedir orçamento
          </a>
        </section>
      </main>
    </>
  );
}
