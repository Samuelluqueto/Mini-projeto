const { useState } = React;

function Produto({ dados }) {
    const [mostrarDescricao, setMostrarDescricao] = useState(false);

    function alternar() {
        setMostrarDescricao(!mostrarDescricao);
    }

    return (
        <div className="produto-card" onClick={alternar}>

            <img
                src={dados.imagem}
                alt={dados.nome}
                className="produto-imagem"
            />

            <h2 className="produto-nome">{dados.nome}</h2>
            <p className="produto-preco">R$ {dados.preco}</p>

            {mostrarDescricao && (
                <p className="produto-descricao">{dados.descricao}</p>
            )}

        </div>
    );
}

function App() {
    const produtos = [
        {
            nome: "Notebook Inspiron 15",
            preco: "2699,00",
            imagem: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3530-intel/media-gallery/black/notebook-inspiron-15-3530-nt-plastic-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full",
            descricao: "Notebook Dell Inspiron 15 com tela de 15,6″ Full HD, processador Intel de última geração, 8 GB de RAM (expansível), SSD rápido, ideal para estudos, trabalho e uso diário. Leve, moderno e com conectividade completa (USB, HDMI, Wi-Fi). Sistema Windows 11."
        },
        {
            nome: "Apple iPhone 16 (128 GB) – Preto",
            preco: "4364,10",
            imagem: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OXJ2ZmJPL0RPUUo3QVV2SDlVcFh6VGJWU3RPOURZS0RCaG1weXBRYytNTEZIMVU3blhIMm9GdXVFaFpISW1jUFBjVXh4d3Jwc2ppTG5KajBIdzdxOHVaNkR4amhRYktYVU5hSUlOMU9QbE13&traceId=1",
            descricao: "iPhone 16 de 128 GB na cor preta: design em alumínio com frente em Ceramic Shield, tela Super Retina XDR OLED de 6,1″, chip A18, 8 GB de RAM, câmera dupla (48 MP + 12 MP), resistência à água/dust IP68, conectividade 5G, USB‑C, botão de ação personalizável e iOS 18 com suporte a Apple Intelligence."
        },
        {
            nome: "Headphone JBL Tune 720BT",
            preco: "335,99",
            imagem: "https://images6.kabum.com.br/produtos/fotos/477246/headphone-jbl-tune-720bt-bluetooth-bateria-de-ate-76-horas-preto-jblt720btblk_1721821220_gg.jpg",
            descricao: "Fone de ouvido over‑ear sem fio com som JBL Pure Bass, Bluetooth 5.3, até 76 horas de bateria e carregamento rápido (5 minutos rendem ~3 h). Tem conexão multiponto, design dobrável, microfone integrado para chamadas e cabo de áudio destacável para uso com fio."
        }
    ];

    return (
        <div className="container">
            {produtos.map((p, i) => (
                <Produto key={i} dados={p} />
            ))}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
