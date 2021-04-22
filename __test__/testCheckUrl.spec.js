import { checkUrl } from "../src/client/js/checkUrl";

describe("Testing the submit functionality", () => {
    test("Testing the checkUrl() function if invalid url", () => {
        expect(checkUrl('hello')).toBeFalsy();
    })

    test("Testing the checkUrl() function if valid url", () => {
        expect(checkUrl('http:www.google.com')).toBeTruthy();
    })

});


