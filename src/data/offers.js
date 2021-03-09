import transformer from "../assets/icons/transformer.svg";
import powerLine from "../assets/icons/power-line.svg";
import windmill from "../assets/icons/windmill.svg";
import plugs from "../assets/icons/plugs.svg";

export const offers = [
  {
    id: 1,
    img: powerLine,
    description: [
      `Budowa napowietrznych linii wysokiego napięcia 110kV, 220kV i 400kV, linii kablowych wysokiego napięcia 110kV i 220kV, napowietrznych i kablowych linii 20kV, stacji transformatorowych 20/0,4kV, linii niskiego napięcia napowietrznych i kablowych.`,
      `Prowadzenie prac pod napięciem na liniach napowietrznych 220kV i 400kV.`,
    ],
    showDesc: true,
  },
  {
    id: 2,
    img: transformer,
    description: [
      `Budowa i modernizacja stacji transformatorowych 400/220/110kV.`,
      `Renowacja izolacji transformatorów 110/20kV w ciągłym ruchu.`,
    ],

    showDesc: false,
  },
  {
    id: 3,
    img: windmill,
    description: [
      `Budowa i uruchomienie farm wiatrowych na bazie powierzonej dokumentacji jak i w systemie "projektuj i buduj".`,
      `Budowa i uruchomienie przemysłowych instalacji fotowoltaicznych w systemie "pod klucz."`,
    ],
    showDesc: false,
  },
  {
    id: 4,
    img: plugs,
    description: [
      `Budowa obiektów energetycznych w systemie "pod klucz" wraz z projektem technicznym.`,
      `Badania i uruchomienie automatyki energetycznej.`,
    ],
    showDesc: false,
  },
];
