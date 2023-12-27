import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
    // "/" will be accessible to all users
    publicRoutes: ["/", "/shop", "/contact", '/Profile', '/api/shoes', '/shop(.*)', '/api/shoes(.*)', '/api/cart', '/api/edgestore/init'],
    ignoredRoutes: ['/api/shoes', '/']

});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)'],

};  