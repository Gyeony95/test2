module.exports = function() {
    var UserAgents = [];

    var UserAgent = function(id, name, type,connect) {
        this.name = name;
        this.id = id;
        this.type = type;
        this.type = connect
    }

    return {
        addUserAgent : function(id, name, type, connect) {
            var agent = new UserAgent(id, name, type, connect);
            UserAgents.push(agent);
        },

        removeUserAgent : function(id) {
            var idx = 0;
            while (idx < UserAgents.length && UserAgents[idx].id != id) {
                idx++;
            }
            UserAgents.splice(idx, 1)
        },

        getUserAgents : function() {
            return UserAgents;
        },

        echoUserAgents : function() {
            if (UserAgents.length == 0) {
                console.log(('user agent list:empty').yellow);
                return;
            }
            console.log('user agent list:');
            for (var i = 0; i < UserAgents.length; i++) {
                console.log(('agent idx:' + i + ' id:' + UserAgents[i].id + ' name:' + UserAgents[i].name + ' type:' + UserAgents[i].type + ' connect:' + UserAgents[i].connect).yellow);
            }
        }
    }
};