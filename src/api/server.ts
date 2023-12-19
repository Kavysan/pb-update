// const token = '41d8904829f74ac97a3694791d970f473ceb305ef2c6b9a7'
const token = 'c4eef02dd94f3904ba89c35656e81b220aa9a3a64bb62d7c'

// export const server_calls = {
//     get: async () => { 
//         const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts`,
//         {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 'x-access-token': `Bearer ${token}`
//             }

//         });

//         if (!response.ok){
//             throw new Error('Failed to fetch data from the server')
//         }

//         return await response.json()

//         },

//         create: async(data: any = {}) => {
//             const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts`,{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'x-access-token': `Bearer ${token}`
//                 },
//                 body: JSON.stringify(data)
//             });
    
//             if(!response.ok){
//                 throw new Error('Failed to Create new data on server')
//             }
    
//             return await response.json()
//     },
//         update: async (id:string, data:any = {}) => {
//             const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts/${id}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': `Bearer ${token}`
                
//             },
//             body: JSON.stringify(data)
//         })
//             if (!response.ok) {
//                 throw new Error('Failed to update data on server')
//             }

//             return await response.json()
//         },

//         delete: async(id:string) => {
//             const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts/${id}`,{
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*',
//                     'x-access-token': `Bearer ${token}`
//                 },
    
//             })
//         if (!response.ok) {
//             throw new Error('Failed to delete data on server')
//         }

//         return;
//     },
// }

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}