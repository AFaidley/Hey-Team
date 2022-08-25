const Engineer = require('../lib/engineer');

describe('Engineer Test', () => {

    describe('Engineer Name', () => {
        it('should check value of engineer name', () => {
            let alvivaEng = new Engineer('alviva','96', 'alviva.faidley@gmail.com','AFaidley');
            expect(alvivaEng.name).toEqual('alviva');
        })
    });

    describe('id', () => {
        it('should check value of engineer id', () => {
            let alvivaEng = new Engineer('alviva','96', 'alviva.faidley@gmail.com','AFaidley');
            expect(alvivaEng.id).toEqual('96');
        })
    });

    describe('email', () => {
        it('should check value of engineer email', () => {
            let alvivaEng = new Engineer('alviva','96', 'alviva.faidley@gmail.com','AFaidley');
            expect(alvivaEng.email).toEqual('alviva.faidley@gmail.com');
        })
    });

    describe('github', () => {
        it('should check value of engineer github', () => {
            let alvivaEng = new Engineer('alviva','96', 'alviva.faidley@gmail.com','AFaidley');
            expect(alvivaEng.getGithub()).toEqual('AFaidley');
        })
    });

    describe('role', () => {
        it('should check value of engineer role', () => {
            let alvivaEng = new Engineer('alviva','96', 'alviva.faidley@gmail.com','AFaidley');
            expect(alvivaEng.getRole()).toEqual('Engineer');
        })
    });

});