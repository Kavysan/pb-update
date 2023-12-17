export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phonebook-vk68.onrender.com/api/contacts`,
        {
            method: 'GET',
            mode: "cors",
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    }

    // finsh other delete update and rest

}