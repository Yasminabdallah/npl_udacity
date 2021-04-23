import { onBlur } from "../src/client/js/onBlur";

describe("Testing the onBlur", () => {
    const document = {
        getElementById: ()=> {
            return  {
                style: {
                    backgroundcolor: 'red',
                }
            }
        },
    }
    test("Testing the onBlur() ", () => {
        jest.spyOn(document, 'getElementById').mockResolvedValue(Promise.resolve({}));
        expect(onBlur).toBeDefined();
    })

});


