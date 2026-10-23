import Country from "../models/countries";
import VacationLocation from "../models/VacationLocation";

export const COUNTRIES = [
  new Country("c1", "United States", "#00A6FB"),
  new Country("c2", "France", "#4361EE"),
  new Country("c3", "Italy", "#2EC4B6"),
  new Country("c4", "Japan", "#E63946"),
  new Country("c5", "United Kingdom", "#7B2CBF"),
  new Country("c6", "Australia", "#FF9F1C"),
  new Country("c7", "Canada", "#D62828"),
  new Country("c8", "Spain", "#F4A261"),
  new Country("c9", "Mexico", "#386641"),
  new Country("c10", "Thailand", "#588157"),
];

export const VACATION_LOCATIONS = [
  // United States
  new VacationLocation(
    "v1", "c1", "Grand Canyon",
    "Arizona, United States",
    "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
    1200, 1919, 4.9
  ),
  new VacationLocation(
    "v2", "c1", "Walt Disney World",
    "Orlando, Florida, United States",
    "https://images.unsplash.com/photo-1597466599360-3b9775841aec",
    1800, 1971, 4.8
  ),

  // France
  new VacationLocation(
    "v3", "c2", "Eiffel Tower",
    "Paris, France",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    1500, 1889, 4.8
  ),
  new VacationLocation(
    "v4", "c2", "Palace of Versailles",
    "Versailles, France",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    1400, 1682, 4.8
  ),

  // Italy
  new VacationLocation(
    "v5", "c3", "Colosseum",
    "Rome, Italy",
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    1300, 80, 4.8
  ),
  new VacationLocation(
    "v6", "c3", "Leaning Tower of Pisa",
    "Pisa, Italy",
    "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
    1100, 1372, 4.7
  ),

  // Japan
  new VacationLocation(
    "v7", "c4", "Tokyo Disneyland",
    "Urayasu, Japan",
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    1600, 1983, 4.8
  ),
  new VacationLocation(
    "v8", "c4", "Kinkaku-ji Golden Pavilion",
    "Kyoto, Japan",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    1200, 1397, 4.8
  ),

  // United Kingdom
  new VacationLocation(
    "v9", "c5", "Tower of London",
    "London, England",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    1700, 1066, 4.7
  ),
  new VacationLocation(
    "v10", "c5", "Stonehenge",
    "Wiltshire, England",
    "https://images.unsplash.com/photo-1599833975787-5c143f373c30",
    1300, -2500, 4.7
  ),

  // Australia
  new VacationLocation(
    "v11", "c6", "Sydney Opera House",
    "Sydney, Australia",
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    1800, 1973, 4.8
  ),
  new VacationLocation(
    "v12", "c6", "Great Barrier Reef",
    "Queensland, Australia",
    "https://images.unsplash.com/photo-1582967788606-a171c1080cb0",
    2200, 1975, 4.9
  ),

  // Canada
  new VacationLocation(
    "v13", "c7", "Banff National Park",
    "Alberta, Canada",
    "https://images.unsplash.com/photo-1503614472-8c93d56cd9b3",
    1600, 1885, 4.9
  ),
  new VacationLocation(
    "v14", "c7", "CN Tower",
    "Toronto, Canada",
    "https://images.unsplash.com/photo-1517090504586-fde19ea6066f",
    1400, 1976, 4.7
  ),

  // Spain
  new VacationLocation(
    "v15", "c8", "Sagrada Familia",
    "Barcelona, Spain",
    "https://images.unsplash.com/photo-1583422409516-2895a77efded",
    1300, 1882, 4.8
  ),
  new VacationLocation(
    "v16", "c8", "Alhambra",
    "Granada, Spain",
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
    1200, 1333, 4.8
  ),

  // Mexico
  new VacationLocation(
    "v17", "c9", "Chichen Itza",
    "Yucatan, Mexico",
    "https://images.unsplash.com/photo-1518638150340-f706e86654de",
    1000, 600, 4.9
  ),
  new VacationLocation(
    "v18", "c9", "Xcaret Park",
    "Playa del Carmen, Mexico",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
    1400, 1990, 4.8
  ),

  // Thailand
  new VacationLocation(
    "v19", "c10", "Grand Palace",
    "Bangkok, Thailand",
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    900, 1782, 4.8
  ),
  new VacationLocation(
    "v20", "c10", "Wat Arun",
    "Bangkok, Thailand",
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
    800, 1656, 4.7
  ),
];