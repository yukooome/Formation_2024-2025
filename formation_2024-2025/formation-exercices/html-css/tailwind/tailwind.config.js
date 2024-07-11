tailwind.config = {
    theme : {
        /* extend permet d'ajouter des choses en plus au thème (de base) */
        extend : {

            colors : {
                /* Soit juste une key + value -> bg-primary text-primary etc*/
                'primary' : '#0d6efd',

                /* Soit key + object -> pour faire un nuancier -> bg-chestnut-500 */
                'chestnut': {
                    '50': '#fcf5f4',
                    '100': '#fae8e6',
                    '200': '#f6d5d2',
                    '300': '#efb7b2',
                    '400': '#e48d85',
                    '500': '#d6675d',
                    '600': '#c4544a',
                    '700': '#a23c33',
                    '800': '#86352e',
                    '900': '#70322c',
                    '950': '#3c1613',
                },

                
            },
            fontFamily : {
               'cactus' : 'Cactus Classical Serif'
            },
            
            
        }
    }
}