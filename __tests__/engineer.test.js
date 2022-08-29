const Engineer = require('../lib/engineer');

describe('Engineer Test', () => {
    // Tests name
    describe('Engineer Name', () => {
        it('should check value of engineer name', () => {
            let alvivaEng = new Engineer('alviva', '96', 'alviva.faidley@gmail.com', 'AFaidley');
            expect(alvivaEng.name).toEqual('alviva');
        })
    });
    // Tests ID
    describe('id', () => {
        it('should check value of engineer id', () => {
            let alvivaEng = new Engineer('alviva', '96', 'alviva.faidley@gmail.com', 'AFaidley');
            expect(alvivaEng.id).toEqual('96');
        })
    });
    // Tests email
    describe('email', () => {
        it('should check value of engineer email', () => {
            let alvivaEng = new Engineer('alviva', '96', 'alviva.faidley@gmail.com', 'AFaidley');
            expect(alvivaEng.email).toEqual('alviva.faidley@gmail.com');
        })
    });
    // Tests Github
    describe('github', () => {
        it('should check value of engineer github', () => {
            let alvivaEng = new Engineer('alviva', '96', 'alviva.faidley@gmail.com', 'AFaidley');
            expect(alvivaEng.getGithub()).toEqual('AFaidley');
        })
    });
    // Tests engineer role = engineer
    describe('role', () => {
        it('should check value of engineer role', () => {
            let alvivaEng = new Engineer('alviva', '96', 'alviva.faidley@gmail.com', 'AFaidley');
            expect(alvivaEng.getRole()).toEqual('Engineer');
        })
    });

});