export const paths: Record<string, any> = { 
    main: '/',  
    login: '/login', 
    register: '/register', 
    todo: '/todo',
    todoFilter: (filter: 'all' | 'opened' | 'closed' = 'all') => `/todo?${filter}`,
    
}