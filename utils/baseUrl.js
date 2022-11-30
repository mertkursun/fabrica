const baseUrl = process.env.NODE_ENV === "production" 
? 'https://fabricabt.com' 
: 'http://localhost:3000';

export default baseUrl;