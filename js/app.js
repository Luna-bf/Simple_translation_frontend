const translations = {
    fr: {
        select : "Sélectionner une langue",
        h3 : "Faits intéressants sur les chats",
        firstPar : "Selon les résultats de travaux menés en 2006 et 2007, le chat domestique est une sous-espèce du chat sauvage issue d’ancêtres appartenant à la sous-espèce du chat sauvage d’Afrique (Felis silvestris lybica). Les premières domestications ont probablement lieu il y a 8 000 à 10 000 ans au Néolithique dans le Croissant fertile, époque correspondant au début de la culture de céréales et à l'engrangement de réserves susceptibles d'être attaquées par des rongeurs, le chat devenant alors pour l’Homme un auxiliaire utile se prêtant à la domestication.",
        secondPar : "Le chat domestique est l’un des principaux animaux de compagnie et compte aujourd’hui une cinquantaine de races différentes reconnues par les instances de certification. Dans de très nombreux pays, le chat entre dans le cadre de la législation sur les carnivores domestiques à l’instar du chien et du furet. Essentiellement territorial, le chat est un prédateur de petites proies comme les rongeurs ou les oiseaux. Les chats ont diverses vocalisations dont les ronronnements, les miaulements, les feulements ou les grognements, bien qu’ils communiquent principalement par des positions faciales et corporelles et des phéromones.",
        thirdPar : "Tout d’abord vénéré par les Égyptiens, il est diabolisé en Europe au Moyen Âge et ne retrouve ses lettres de noblesse qu’au XVIIIe siècle. En Asie, le chat reste synonyme de chance, de richesse ou de longévité. Ce félin laisse son empreinte dans la culture populaire et artistique, tant au travers d’expressions populaires que de représentations diverses au sein de la littérature, de la peinture ou encore de la musique. À partir de la fin du XXe siècle, les dommages qu'il occasionne à la biodiversité sont mieux compris, et il fait partie des cent espèces envahissantes parmi les plus nuisibles du monde.",
    },
    en: {
        select : "Select a language",
        h3 : "Interesting facts about cats",
        firstPar : "According to the results of work carried out in 2006 and 2007, the house cat is a subspecies of the wild cat descended from ancestors belonging to the subspecies of the African wild cat (Felis silvestris lybica). The first domestications probably took place 8,000 to 10,000 years ago during the Neolithic in the Fertile Crescent, a period corresponding to the beginning of cereal cultivation and the accumulation of reserves likely to be attacked by rodents, the cat becoming then for man a useful auxiliary suitable for domestication.",
        secondPar : "The house cat is one of the main pets and today has around fifty different breeds recognized by certification bodies. In many countries, cats fall within the scope of legislation on domestic carnivores such as dogs and ferrets. Essentially territorial, the cat is a predator of small prey such as rodents or birds. Cats have a variety of vocalizations, including purrs, meows, howls, or growls, although they communicate primarily through facial and body positions and pheromones.",
        thirdPar : "First venerated by the Egyptians, it was demonized in Europe in the Middle Ages and only regained its nobility in the 18th century. In Asia, the cat remains synonymous with luck, wealth or longevity. This feline leaves its mark on popular and artistic culture, both through popular expressions and various representations in literature, painting and even music. From the end of the 20th century, the damage it causes to biodiversity has been better understood, and it is one of the hundred most harmful invasive species in the world.",
    }
};

const languageSelector = document.querySelector("select");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("#h3");
let firstPar = document.querySelector("#par-1");
let secondPar = document.querySelector("#par-2");
let thirdPar = document.querySelector("#par-3");

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (language) => {
    if(language == "fr") {
        h1.innerText = translations.fr.select;
        h3.innerText = translations.fr.h3;
        firstPar.innerText= translations.fr.firstPar;
        secondPar.innerText= translations.fr.secondPar;
        thirdPar.innerText= translations.fr.thirdPar;
        
    } else if(language == "en") {
        h1.innerText = translations.en.select;
        h3.innerText = translations.en.h3;
        firstPar.innerText= translations.en.firstPar;
        secondPar.innerText= translations.en.secondPar;
        thirdPar.innerText= translations.en.thirdPar;
    }
};
