using social_network.backend.DTOs;
using social_network.backend.Entities.SignalR;
using social_network.backend.Helpers;
using System.Text.RegularExpressions;
namespace social_network.backend.Interfaces
{
    public interface IMessageRepository
    {
        void AddMessage(Message message);
        void RemoveMessage(Message message);
        Task<Message> GetMessage(int id);
        Task<PagedList<MessageDTO>> GetMessageForUser(MessageParams messageParams);
        Task<IEnumerable<MessageDTO>> GetMessageThread(string currentUserName, string recipientUserName);
        void AddGroup(Entities.SignalR.Group group);
        void RemoveConnection(Connection connection);
        Task<Connection> GetConnection(string connectionId);
        Task<Entities.SignalR.Group> GetMessageGroup(string groupName);
        Task<Entities.SignalR.Group> GetGroupForConnection(string connectionId);
    }
}
