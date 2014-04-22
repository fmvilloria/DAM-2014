/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths : {
            'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim :{
            'ydn-db': {
                exports: 'ydn'
            }
        }
    });

    describe('Database module', function(){
        var DB;

        beforeEach(function(done){
            require(['data'], function(data){
                DB = data;
                done();
            });
        });

        describe('#insert method', function(){
            it('Insert a tweet', function(done){ //El parametro done se utiliza para validaciones asincronas
                //Los callbacks de success y error equivalen a realizar un assert
                DB.insertTweet({id: 1, text: 'Este es mi tweet!!!'},
                    function(key){
                        if (key != 1) { throw 'El "id" no se corresponde con el "key" insertado'; }

                        console.log(key);
                        done();
                    }, function(err){throw err}
                );
            });
        });

        describe('#insert method', function(){
            it('Insert some tweets', function(done){
                DB.insertTweet([{id: 2, text: 'Este es mi segundo tweet!!!'}, {id: 3, text: 'Este es mi tercer tweet!!!'}],
                    function(keys){
                        assert.deepEqual([2, 3], keys, 'Los "ids" no se corresponde con los "keys" insertados');

                        console.log(keys);
                        done();
                    }, function(err){throw err}
                );
            });
        });

        describe('#retrieve method', function(){
            it('Retrieve a tweet', function(done){
                DB.retrieveTweet(1,
                    function(record){
                        if (record == undefined) { throw 'Registro no encontrado'; }

                        console.log(record);

                        done();
                    }, function(err){throw err;}
                );
            });
        });

        describe('#update method', function(){
            it('Update a tweet', function(done){
                DB.updateTweet({id: 1, text: 'Este es mi tweet modificado!!!'},
                    function(key){
                        if (key != 1) { throw 'El "id" no se corresponde con el "key" insertado'; }

                        console.log(key);

                        done();
                    }, function(err){throw err;}
                );
            });
        });

        describe('#delete method', function(){
            it('Delete a tweet', function(done){
                DB.deleteTweet(1, function(number){
                    if(number == 0) { throw 'No se ha eliminado ningún registro'; }

                    console.log(number);

                    done();
                }, function(err){throw err;});
            });
        });
    });
})();