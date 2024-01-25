import absinthe from '../public/green-fairy.png'
import beer from '../public/beer-saur.png'
import wine from '../public/wine-ab.png'
import abstain from '../public/no-alcohol.png'

export const menuDrinks = [
    {
        "category": "Featured Cocktails",
        href: `featured`,
        imageUrl: absinthe,

    },
    {
        "category": "Wine",
        href: `wine`,
        imageUrl: wine,

    },
    {
        "category": "Beer",
        imageUrl: beer,
        href: `beer`,
    },
    {
        "category": "Abstaining",
        href: `abstain`,
        imageUrl: abstain,
    }
]

export const featuredDrinks = [
    {
        "name": "ABSINTHE HALLUCINATOR",
        "sizes": { "12oz": 19, "16oz": 26 },
        "souvenir_flask": 65,
        "description": ["Vodka", "Strawberry", "Rhubarb", "Lemon", "Absinthe - Hallucinate Responsibly"]
    },
    {
        "name": "LATVIAN LOVE POTION",
        "sizes": { "12oz": 19, "16oz": 26 },
        "souvenir_flask": 65,
        "description": ["Whiskey", "Black Currant", "Lemon", "Almond", "Bitters"]
    },
    {
        "name": "TICKLE ME TIPPLE",
        "sizes": { "12oz": 19, "16oz": 26 },
        "souvenir_flask": 65,
        "description": ["JAJA Tequila", "Cherry", "Lemon", "Sugar", "Bitters"]
    },
    {
        "name": "UNICORN JUICE",
        "sizes": { "12oz": 19, "16oz": 26 },
        "souvenir_flask": 65,
        "description": ["Vodka", "Grapefruit", "Green Tea", "Peach", "Rose"]
    }
];


export const wineData = [
    {
        "name": "Veuve Clicquot Yellow Label",
        "glass": 32,
        "bottle": 135,
        "size": 'glass&bottle'
    },
    {
        "name": "Gaston Chiquet Brut Rosé",
        "glass": 38,
        "bottle": 152,
        "size": 'glass&bottle'
    },
    {
        "name": "Notorious Pink Rosé",
        "glass": 16,
        "bottle": 59,
        "size": 'glass&bottle'
    },
    {
        "name": "Penfolds Max's Chardonnay",
        "glass": 18,
        "bottle": 64,
        "size": 'glass&bottle'
    },
    {
        "name": "Penfolds Max's Cabernet Sauvignon",
        "glass": 18,
        "bottle": 64,
        "size": 'glass&bottle'
    },
    {
        "name": "Bouvet-Ladubay Crémant de Loire",
        "glass": 17,
        "bottle": 59,
        "size": 'glass&bottle'
    },
    {
        "name": "Taittinger Brut La Française",
        "half_bottle": 74,
        "size": "half_bottle"
    },
    {
        "name": "Billecart-Salmon Brut Réserve",
        "half_bottle": 89,
        "size": "half_bottle"
    },
    {
        "name": "Jayson Sauvignon Blanc",
        "bottle_only": 79,
        "size": "bottle_only"
    },
    {
        "name": "Orin Swift Machete",
        "bottle_only": 136,
        "size": "bottle_only"
    },
    {
        "name": "Orin Swift 'Papillon'",
        "bottle_only": 169,
        "size": "bottle_only"
    },
    {
        "name": "Dom Pérignon",
        "bottle_only": 549,
        "size": "bottle_only"
    }
]

export const beerData = [
    {
        "name": "Domestic",
        "price": 16
    },
    {
        "name": "Import",
        "price": 19
    },
    {
        "name": "White Claw",
        "price": 14
    }
]


export const abstainData = [
    {
        "name": "Bottled Water",
        "price": 11
    },
    {
        "name": "Red Bull",
        "price": 7
    },
    {
        "name": "Soda",
        "small": 9,
        "large": 12
    }
]