const getConfig = () => ({
     headers: { Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU5MzczODI1LCJleHAiOjE2NjQ1NTc4MjV9.2dCwe92BRudcp-yT7HkJUyAga0LD7N-c4t4pKs4PP6c'}` }
    //  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    // Ultima key creada para Horacio Choque 
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYsImlhdCI6MTY1OTgxNjY3MCwiZXhwIjoxNjY1MDAwNjcwfQ.GCQd7GEifd9tqLz2Ff6jnCN1DuYi4pXRH7eRuyal2GQ
});

export default getConfig;