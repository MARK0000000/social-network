namespace social_network.backend.Errors
{
    public class HttpException : Exception
    {
        public int StatusCode { get; private set; }

        public HttpException(int statusCode, string message) : base($"{statusCode} - {message}")
        {
            StatusCode = statusCode;
        }
    }
}
