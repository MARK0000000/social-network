﻿namespace social_network.backend.Entities.SignalR
{
    public class Connection
    {
        public string ConnectionId { get; set; }
        public string Username { get; set; }

        public Connection()
        {

        }
        public Connection(string connectionId, string username)
        {
            ConnectionId = connectionId;
            Username = username;
        }
    }
}
