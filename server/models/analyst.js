'use strict';

module.exports = function(Analyst) {

  Analyst.disableRemoteMethodByName("upsert");                               // disables PATCH /Analysts
  Analyst.disableRemoteMethodByName("find");                                 // disables GET /Analysts
  Analyst.disableRemoteMethodByName("replaceOrCreate");                      // disables PUT /Analysts
  Analyst.disableRemoteMethodByName("create");                               // disables POST /Analysts

  Analyst.disableRemoteMethodByName("prototype.updateAttributes");           // disables PATCH /Analysts/{id}
  Analyst.disableRemoteMethodByName("findById");                             // disables GET /Analysts/{id}
  Analyst.disableRemoteMethodByName("exists");                               // disables HEAD /Analysts/{id}
  Analyst.disableRemoteMethodByName("replaceById");                          // disables PUT /Analysts/{id}
  Analyst.disableRemoteMethodByName("deleteById");                           // disables DELETE /Analysts/{id}

  Analyst.disableRemoteMethodByName('prototype.__get__accessTokens');        // disable GET /Analysts/{id}/accessTokens
  Analyst.disableRemoteMethodByName('prototype.__create__accessTokens');     // disable POST /Analysts/{id}/accessTokens
  Analyst.disableRemoteMethodByName('prototype.__delete__accessTokens');     // disable DELETE /Analysts/{id}/accessTokens

  Analyst.disableRemoteMethodByName('prototype.__findById__accessTokens');   // disable GET /Analysts/{id}/accessTokens/{fk}
  Analyst.disableRemoteMethodByName('prototype.__updateById__accessTokens'); // disable PUT /Analysts/{id}/accessTokens/{fk}
  Analyst.disableRemoteMethodByName('prototype.__destroyById__accessTokens');// disable DELETE /Analysts/{id}/accessTokens/{fk}

  Analyst.disableRemoteMethodByName('prototype.__count__accessTokens');      // disable  GET /Analysts/{id}/accessTokens/count

  Analyst.disableRemoteMethodByName("prototype.verify");                     // disable POST /Analysts/{id}/verify
  Analyst.disableRemoteMethodByName("changePassword");                       // disable POST /Analysts/change-password
  Analyst.disableRemoteMethodByName("createChangeStream");                   // disable GET and POST /Analysts/change-stream

  Analyst.disableRemoteMethodByName("confirm");                              // disables GET /Analysts/confirm
  Analyst.disableRemoteMethodByName("count");                                // disables GET /Analysts/count
  Analyst.disableRemoteMethodByName("findOne");                              // disables GET /Analysts/findOne

  //Analyst.disableRemoteMethodByName("login");                                // disables POST /Analysts/login
  //Analyst.disableRemoteMethodByName("logout");                               // disables POST /Analysts/logout

  Analyst.disableRemoteMethodByName("resetPassword");                        // disables POST /Analysts/reset
  Analyst.disableRemoteMethodByName("setPassword");                          // disables POST /Analysts/reset-password
  Analyst.disableRemoteMethodByName("update");                               // disables POST /Analysts/update
  Analyst.disableRemoteMethodByName("upsertWithWhere");                      // disables POST /Analysts/upsertWithWhere

};
