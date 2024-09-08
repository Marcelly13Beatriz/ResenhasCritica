let dados = [
    {
        titulo: "A Culpa é das Estrelas",
        autor: "John Green",
        descricao: "Uma história de amor emocionante e inspiradora...",
        link: "https://www.google.com.br/search?q=a+culpa+é+das+estrelas",
        resenha: "https://www.skoob.com.br/livro/resenhas/247555" // Exemplo de resenha
    },
    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        descricao: "Um clássico atemporal que nos convida a refletir sobre a vida...",
        link: "https://www.google.com.br/meta/o_pequeno_príncipe",
        resenha: "https://www.recantodasletras.com.br/resenhas/196309" // Exemplo de resenha
    },
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling",
        descricao: "Uma saga mágica que acompanha as aventuras de um jovem bruxo...",
        link: "https://www.pottermore.com/",
        resenha: "https://cnsd.com.br/blog/resenha-sobre-saga-harry-potter/" // Exemplo de resenha
    },
    {
        titulo: "Percy Jackson e os Olimpianos",
        autor: "Rick Riordan",
        descricao: "Uma série de aventuras que misturam mitologia grega com a vida de um adolescente semideus...",
        link: "https://www.rickriordan.com/",
        resenha: "https://www.naauladeportugues.com.br/post/percy-jackson-resenha-e-atividades" // Exemplo de resenha
    },
    {
        titulo: "As Crônicas de Nárnia",
        autor: "C.S. Lewis",
        descricao: "Uma saga épica que nos transporta para um mundo mágico, onde crianças descobrem um reino secreto.",
        link: "https://www.cslewis.com/",
        resenha: "https://leitordossonhos.com/2020/12/22/resenha-as-cronicas-de-narnia-c-s-lewis/" // Exemplo de resenha
    },
    {
        titulo: "Os Instrumentos Mortais",
        autor: "Cassandra Clare",
        descricao: "Uma série de fantasia urbana que acompanha as aventuras de Caçadores de Sombras...",
        link: "https://www.cassandraclare.com/",
        resenha: "https://www.skoob.com.br/livro/resenhas/537698/edicao:611116" // Exemplo de resenha
    },
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        descricao: "Uma épica jornada para destruir o Um Anel e salvar a Terra Média.",
        link: "https://www.tolkienlibrary.com/",
        resenha: "https://leitordossonhos.com/2021/01/26/resenha-o-senhor-dos-aneis-j-r-r-tolkien/" // Exemplo de resenha
    },
    {
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        descricao: "Um clássico da literatura inglesa que explora temas como amor, classe social e casamento.",
        link: "https://www.gutenberg.org/ebooks/1342",
        resenha: "https://www.bibliotecapublica.mg.gov.br/resenha-da-semana-orgulho-e-preconceito-de-jane-austen/" // Exemplo de resenha
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        descricao: "Uma distopia clássica que explora temas como totalitarismo e vigilância.",
        link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
        resenha: "https://www.planocritico.com/critica-mil-novecentos-e-oitenta-quatro-1984/" // Exemplo de resenha
    },
    {
        titulo: "O Nome do Vento",
        autor: "Patrick Rothfuss",
        descricao: "Um épico de fantasia que acompanha a vida de um jovem mago.",
        link: "https://patrickrothfuss.com/",
        resenha: "https://www.skohttps://www.planocritico.com/critica-o-nome-do-vento-de-patrick-rothfuss/ob.com.br/livro/resenhas/14196" // Exemplo de resenha
    },
    {
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        descricao: "Uma jornada espiritual em busca do seu destino pessoal.",
        link: "https://paulocoelho.com/",
        resenha: "https://www3.unicentro.br/petfisica/2018/08/28/resenha-de-o-alquimista/" // Exemplo de resenha
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        descricao: "Uma aventura épica que precede O Senhor dos Anéis.",
        link: "https://www.tolkienlibrary.com/",
        resenha: "https://cartolacultural.wordpress.com/2021/08/09/resenha-o-hobbit-j-r-r-tolkien/" // Exemplo de resenha
    },
    {
        titulo: "O Caçador de Pipas",
        autor: "Khaled Hosseini",
        descricao: "Uma história comovente sobre amizade e traição em um Afeganistão em guerra.",
        link: "https://khaledhosseini.com/",
        resenha: "https://www.skoob.com.br/livro/resenhas/24994" // Exemplo de resenha
    },
    {
        titulo: "O Iluminado",
        autor: "Stephen King",
        descricao: "Um clássico do terror que se passa em um hotel isolado.",
        link: "https://stephenking.com/",
        resenha: "https://www.skoob.com.br/livro/resenhas/2245" // Exemplo de resenha
    },
    {
        titulo: "A Metamorfose",
        autor: "Franz Kafka",
        descricao: "Uma alegoria existencial sobre a alienação e a burocracia.",
        link: "https://en.wikipedia.org/wiki/The_Metamorphosis",
        resenha: "https://www.skoob.com.br/livro/resenhas/2846" // Exemplo de resenha
    },
    {
        titulo: "O Pequeno Livro da Felicidade",
        autor: "Matthieu Ricard",
        descricao: "Um guia prático para cultivar a felicidade e o bem-estar.",
        link: "https://www.matthieuricard.org/",
        resenha: "https://www.skoob.com.br/livro/resenhas/68674" // Exemplo de resenha
    },
    {
        titulo: "O Nome da Rosa",
        autor: "Umberto Eco",
        descricao: "Um mistério medieval que combina filosofia, teologia e investigação criminal.",
        link: "https://en.wikipedia.org/wiki/The_Name_of_the_Rose",
        resenha: "https://www.skoob.com.br/livro/resenhas/24963" // Exemplo de resenha
    },
    {
        titulo: "A Cabana",
        autor: "William P. Young",
        descricao: "Uma história sobre fé e perdão que se passa em uma cabana isolada.",
        link: "https://thecabinbook.com/",
        resenha: "https://www.infoescola.com/livros/a-cabana/" // Exemplo de resenha
    }
];