export const initialState = {
    place: {
        name: '',
        description: '',
        address_state: '',
        address_city: '',
        address_colony:'',
        address_street: '',
        address_zipcode: '',
        image: null,
        
    } ,
    errors: {
        name: {
            text: 'Complete el campo de nombre',
            status: false, 
        },
        description: {
            text: 'Complete el campo de descripción',
            status: false,
        },
        address_state: {
            text: 'Completa el campo de estado',
            status: false,
            },
        address_city: {
            text: 'Completa el campo de ciudad',
            status: false,    
            },
        address_colony: {
            text: 'Completa el campo de colonia',
            status: false,
            },
        address_street: {
            text: 'Completa el campo de calle',
            status: false,
            },
        address_zipcode: {
            text: 'Completa el campo de código postal',
            status: false,
            },
},
    isLoading: false,
    isSuccess: false,
    isError: false,
   
};