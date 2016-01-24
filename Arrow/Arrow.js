Friends = new Mongo.Collection("friends");

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user

}

if (Meteor.isClient) {
  // This code only runs on the client

  window.fbAsyncInit = function() {
    FB.init({
      appId : '510841125734589',
      status : true,
      xfbml : true
    });

  };

  Template.login.helpers({

    // returns src for user profile picture to <img>
    // userProPic: function () {
    //   return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
    // },

    friendList: function (response) {
      return response;
    }
  });

  Template.login.events({
    'click .login-button': function (e) {
      e.preventDefault();
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          // var uid = response.authResponse.userID;
          // var accessToken = response.authResponse.accessToken;
          console.log("logged in");

          FB.api(
              "/me/friends",
              function (response) {
                if (response && !response.error) {
                  for (var key in response.data) {
                    var friend = response.data[key];
                    Friends.insert({
                      name: friend.name,
                      id: friend.id,
                    });
                  }
                }
              }
          );


        }
        else if (response.status === 'not_authorized') {
          console.log("not authorized");
          // the user is logged in to Facebook, 
          // but has not authenticated your app
        }
        else {
          console.log("not logged in");
          FB.login();
          // the user isn't logged in to Facebook.
        }
      });
    }
  });

  Template.body.helpers({
    friends: function () {
      return Friends.find({});
    },
    checkUserLogin: function() {
      FB.getLoginStatus(function(response) {
        console.log(response.status);
        if (response.status === 'connected') {
          return true;
        }
      });
    }
  });

  Template.body.events({

  });

  Template.friendList.helpers({
    isOwner: function () {
      return this.owner === Meteor.userId();
    },
  });

  Template.friendList.events({

  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

Meteor.methods({

});