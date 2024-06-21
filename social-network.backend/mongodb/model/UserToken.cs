using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace social_network.backend.mongodb.model
{
    public class UserToken
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("username")]
        public string UserName { get; set; } = String.Empty;

        [BsonElement("token")]
        public string Token { get; set; } = String.Empty;

        [BsonElement("wasdeleted")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
        public DateTime WasDeleted { get; set; } = DateTime.UtcNow;
    }
}
