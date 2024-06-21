namespace social_network.backend.UoW
{
    public interface IUnitOfWork : IDisposable
    {
        Task<bool> Complete();
        bool HasChanges();
    }
}
