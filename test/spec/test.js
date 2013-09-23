/*global describe, it */
'use strict';
(function () {
    describe('Git-Smack Chat', function () {
    	it('should have an instance of MessageCollection messages', function () {
                    expect(messages !== undefined || null).to.equal(true);
        });

        it('should be using jQuery', function () {
                    expect(jQuery() !== undefined || null).to.equal(true);
        });

        it('should have an instance of Parse Collection called MessageCollection', function () {
                    expect(MessageCollection !== undefined || null).to.equal(true);

        }); 

        it('should have an instance of Parse Object called Message', function () {
                    expect(Message !== undefined || null).to.equal(true);

        });
    })

    describe('uses Parse as a backend server', function(){

                this.timeout(15000);
     
                it('by sending a new message to Parse when you hit the submit button', function(done){
                
                var result;
     
                var form = $('.form-control');
                var randomMessage = 'A Test Message #'+ Math.floor(Math.random()*10000000)  
                form.val(randomMessage);
     
                $('.submit-btn').click()
        
                    setTimeout((function(){
    
                    var query = new Parse.Query(Message);
                    query.equalTo("message", randomMessage);
                    query.find({
                        success: function(results) {
                            result = results[0];

                            console.log(result);

                            expect(result.get('message')).to.equal(randomMessage);
                            done();
                        },
                        error: function(error) {
                            done(error.description)
                        }
                    });
                 
                }), 2000);
            }); 
                 
        });
        
})();
