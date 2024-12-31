import { vitriol, rebis, ether, quebrith, hydragenum, vermillon, sol, caelum, fulgur } from './composant_alchimique.js';

export const formules_alchimique = [
    {
        name: 'Ami de l\'empoisonneur',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 14,
        duration: '10 minutes',
        composant: [vermillon, vermillon, vitriol, caelum],
        price: 24
    },
    {
        name: 'Encre invisible',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 11,
        duration: '5 rounds',
        composant: [quebrith, ether],
        price: 22
    },
    {
        name: 'Fluide stérilisant',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 12,
        duration: '5 rounds',
        composant: [quebrith, caelum],
        price: 33
    },
    {
        name: 'Hallucinogène',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 12,
        duration: '5 rounds',
        composant: [vitriol, rebis],
        price: 47
    },
    {
        name: 'Herbes engourdissantes',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 12,
        duration: '5 rounds',
        composant: [quebrith, vermillon],
        price: 18
    },
    {
        name: 'Potion de Larme d\'épouse',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 14,
        duration: '10 minutes',
        composant: [hydragenum, ether, ether, vitriol],
        price: 28
    },
    {
        name: 'Poudre basique',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 12,
        duration: '5 rounds',
        composant: [vermillon, quebrith],
        price: 27
    },
    {
        name: 'Poudre de coagulation',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 12,
        duration: '5 rounds',
        composant: [ether, rebis],
        price: 30
    },
    {
        name: 'Sels de pâmoison',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 14,
        duration: '10 minutes',
        composant: [quebrith, rebis, caelum, caelum],
        price: 37
    },
    {
        name: 'Souffle du succube',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 14,
        duration: '10 minutes',
        composant: [sol, ether, ether, caelum],
        price: 30
    },
    {
        name: 'Tombe d\'Adda',
        category: 'Les articles alchimiques',
        level: 'Formules de novice',
        sd_alchimie: 13,
        duration: '5 rounds',
        composant: [ether, ether, hydragenum, vermillon],
        price: 27
    },
    {
        name: 'Adhésif alchimique',
        category: 'Les articles alchimiques',
        level: 'Formules de compagnon',
        sd_alchimie: 15,
        duration: '10 minutes',
        composant: [quebrith, hydragenum, caelum, caelum, vitriol],
        price: 52
    },
    {
        name: 'Chloroforme',
        category: 'Les articles alchimiques',
        level: 'Formules de compagnon',
        sd_alchimie: 16,
        duration: '15 minutes',
        composant: [quebrith, quebrith, vermillon, vermillon, ether, vitriol],
        price: 54
    },
    {
        name: 'Feu rapide',
        category: 'Les articles alchimiques',
        level: 'Formules de compagnon',
        sd_alchimie: 16,
        duration: '15 minutes',
        composant: [quebrith, rebis, rebis, caelum, vitriol, vermillon],
        price: 67
    },
    {
        name: 'Solution acide',
        category: 'Les articles alchimiques',
        level: 'Formules de compagnon',
        sd_alchimie: 16,
        duration: '15 minutes',
        composant: [ether, quebrith, vermillon, vitriol, vitriol, vitriol],
        price: 84
    },
    {
        name: 'Venin noir',
        category: 'Les articles alchimiques',
        level: 'Formules de compagnon',
        sd_alchimie: 15,
        duration: '10 minutes',
        composant: [quebrith, quebrith, ether, ether, rebis],
        price: 67
    },
    {
        name: 'Elixir de Pantagran',
        category: 'Les articles alchimiques',
        level: 'Formules de maître',
        sd_alchimie: 17,
        duration: '15 minutes',
        composant: [vermillon, vermillon, ether, ether, caelum, sol, fulgur],
        price: 100
    },
    {
        name: 'Feu de Zerrikanien',
        category: 'Les articles alchimiques',
        level: 'Formules de maître',
        sd_alchimie: 17,
        duration: '15 minutes',
        composant: [sol, sol, rebis, rebis, rebis, fulgur, vitriol],
        price: 97
    },
    {
        name: 'Fisstech',
        category: 'Les articles alchimiques',
        level: 'Formules de maître',
        sd_alchimie: 18,
        duration: '30 minutes',
        composant: [rebis, rebis, rebis, hydragenum, hydragenum, vitriol, vitriol, vermillon],
        price: 120
    },
    {
        name: 'Fureur de Bredan',
        category: 'Les articles alchimiques',
        level: 'Formules de maître',
        sd_alchimie: 22,
        duration: '30 minutes',
        composant: [sol, sol, sol, fulgur, fulgur, fulgur, caelum, vermillon],
        price: 142
    },
    {
        name: 'Larmes de Talgar',
        category: 'Les articles alchimiques',
        level: 'Formules de maître',
        sd_alchimie: 20,
        duration: '30 minutes',
        composant: [hydragenum, hydragenum, hydragenum, ether, ether, vermillon, vitriol, vitriol],
        price: 118
    },
    {
        name: 'Potion parfumée',
        category: 'Les articles alchimiques',
        level: 'Formules de maître',
        sd_alchimie: 18,
        duration: '30 minutes',
        composant: [quebrith, quebrith, ether, vitriol, vitriol, vermillon, hydragenum, hydragenum],
        price: 114
    }
]

export const potions_sorceleur = [
    {
        name: 'Blizzard',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 18,
        duration: '30 minutes',
        composant: [vitriol, vitriol, rebis, rebis],
        price: 'None'
    },
    {
        name: 'Chat',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 16,
        duration: '30 minutes',
        composant: [ether, vermillon, hydragenum],
        price: 'None'
    },
    { 
        name: 'Chat-huant',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 16,
        duration: '30 minutes',
        composant: [vitriol, vermillon, quebrith],
        price: 'None'
    },
    {
        name: 'Forêt de Maribor',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 18,
        duration: '30 minutes',
        composant: [rebis, vermillon, caelum, quebrith],
        price: 'None'
    },
    {
        name: 'Hirondelle',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 16,
        duration: '30 minutes',
        composant: [vitriol, ether, caelum],
        price: 'None'
    },
    {
        name: 'Loriot doré',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 16,
        duration: '30 minutes',
        composant: [rebis, vermillon, caelum],
        price: 'None'
    },
    {
        name: 'Miel blanc',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 16,
        duration: '30 minutes',
        composant: [vitriol, rebis, ether],
        price: 'None'
    },
    {
        name: 'Orque',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 18,
        duration: '30 minutes',
        composant: [vitriol, vitriol, quebrith, fulgur],
        price: 'None'
    },
    {
        name: 'Philtre de Petri',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 16,
        duration: '30 minutes',
        composant: [rebis, ether, quebrith],
        price: 'None'
    },
    {
        name: 'Pleine lune',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 20,
        duration: '30 minutes',
        composant: [quebrith, hydragenum, hydragenum, vermillon, vermillon],
        price: 'None'
    },
    {
        name: 'Sang noir',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 20,
        duration: '30 minutes',
        composant: [vitriol, vitriol, vitriol, rebis, ether],
        price: 'None'
    },
    {
        name: 'Tonnerre',
        category: 'Potions de sorceleurs',
        level: 'None',
        sd_alchimie: 20,
        duration: '30 minutes',
        composant: [quebrith, quebrith, hydragenum, hydragenum],
        price: 'None'
    }
]