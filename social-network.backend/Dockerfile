#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/sdk:7.0 As build-env
WORKDIR /app

COPY social-network.backend.csproj ./

RUN dotnet restore

COPY . ./

RUN dotnet publish social-network.backend.sln -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

COPY --from=build-env /app/out .

ENTRYPOINT ["dotnet","social-network.backend.dll"]