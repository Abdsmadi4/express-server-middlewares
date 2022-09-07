'use strict';

const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );

describe( 'server', () => {
    it( '404 on an invalid route', async () => {
        const response = await request.get("/squareMW");
        expect( response.status ).toBe( 404 );
    } );
    it( 'Home page works', async () => {
        const res = await request.get( '/' );
        expect( res.status ).toEqual( 200 );
        expect(res.text).toEqual("alive server");
    } );
    it( 'Square route', async () => {
        const res = await request.get( '/square?num=7' );
        expect( res.status ).toEqual( 200 );
        expect(res.text).toEqual('{"num":49}');
    } );
    it( 'Square route with invalid number', async () => {
        const res = await request.get( '/square?num=hello' );
        expect( res.status ).toEqual( 500 );
        expect(res.text).toEqual(
          '{"code":500,"message":"Server Error: hello is not a Number"}'
        );
    } );
} );